import { logApiError, logNetworkError } from './logger';

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: number;
  success: boolean;
}

// Replace `any` with `unknown` for better type safety
export interface ApiError extends Error {
  status?: number;
  response?: unknown;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = import.meta.env.VITE_API_BASE_URL || '') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async handleResponse<T>(response: Response, requestDetails: {
    url: string;
    method: string;
  }): Promise<ApiResponse<T>> {
    const { url, method } = requestDetails;

    try {
      // Check if response is ok
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { message: response.statusText };
        }

        const error = new Error(errorData.message || `HTTP ${response.status}`) as ApiError;
        error.status = response.status;
        error.response = errorData;

        // Log API error
        logApiError(error, {
          url,
          method,
          status: response.status,
          response: errorData,
        });

        return {
          success: false,
          status: response.status,
          error: errorData.message || `Request failed with status ${response.status}`,
        };
      }

      // Parse successful response
      const data = await response.json();
      return {
        success: true,
        status: response.status,
        data,
      };
    } catch (error) {
      // Network or parsing error
      const networkError = error as Error;
      logNetworkError(networkError, { url, method, status: response?.status });

      return {
        success: false,
        status: response?.status || 0,
        error: 'Network error or invalid response format',
      };
    }
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const method = options.method || 'GET';

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...options.headers,
        },
      });

      return this.handleResponse<T>(response, { url, method });
    } catch (error) {
      // Network error (no response received)
      const networkError = error as Error;
      logNetworkError(networkError, { url, method });

      return {
        success: false,
        status: 0,
        error: 'Network error - please check your connection',
      };
    }
  }

  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, {
      method: 'GET',
      headers,
    });
  }

  async post<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, {
      method: 'POST',
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, {
      method: 'PUT',
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, {
      method: 'DELETE',
      headers,
    });
  }

  setAuthToken(token: string) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  removeAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }
}

// Create default instance
export const apiClient = new ApiClient();

// Utility function for handling common API patterns
export async function handleApiCall<T>(
  apiCall: () => Promise<ApiResponse<T>>,
  options: {
    onSuccess?: (data: T) => void;
    onError?: (error: string) => void;
    showToast?: boolean;
  } = {}
): Promise<ApiResponse<T>> {
  const response = await apiCall();

  if (response.success && response.data) {
    options.onSuccess?.(response.data);
  } else if (response.error) {
    options.onError?.(response.error);
  }

  return response;
}