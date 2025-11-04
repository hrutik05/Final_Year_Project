interface LogContext {
  userId?: string;
  route?: string;
  component?: string;
  action?: string;
  timestamp?: string;
  userAgent?: string;
  url?: string;
  [key: string]: any;
}

interface ErrorLogData {
  message: string;
  stack?: string;
  name?: string;
  context: LogContext;
  level: 'error' | 'warn' | 'info' | 'debug';
}

class Logger {
  private isDevelopment = import.meta.env.MODE === 'development';
  private apiEndpoint = import.meta.env.VITE_REACT_APP_ERROR_LOG_ENDPOINT;

  private getBaseContext(): LogContext {
    return {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      route: window.location.pathname,
    };
  }

  private async sendToServer(logData: ErrorLogData) {
    if (!this.apiEndpoint) {
      if (this.isDevelopment) {
        console.warn('Error logging endpoint not configured');
      }
      return;
    }

    try {
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
      });
    } catch (error) {
      // Silently fail - don't want logging errors to break the app
      if (this.isDevelopment) {
        console.error('Failed to send error log:', error);
      }
    }
  }

  private log(level: ErrorLogData['level'], message: string, context: LogContext = {}) {
    const logData: ErrorLogData = {
      message,
      context: { ...this.getBaseContext(), ...context },
      level,
    };

    // Always log to console in development
    if (this.isDevelopment) {
      const consoleMethod = level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'log';
      // Create a copy of context without stack for console logging
      const { stack, ...contextWithoutStack } = logData.context;
      console[consoleMethod](`[${level.toUpperCase()}]`, message, contextWithoutStack);
      // Log stack separately if it exists
      if (stack) {
        console[consoleMethod]('Stack trace:', stack);
      }
    }

    // Send to server in production or if explicitly configured
    if (!this.isDevelopment || this.apiEndpoint) {
      this.sendToServer(logData);
    }
  }

  logError(error: Error | string, context: LogContext = {}) {
    if (error instanceof Error) {
      this.log('error', error.message, {
        ...context,
        stack: error.stack,
        name: error.name,
      });
    } else {
      this.log('error', error, context);
    }
  }

  logWarning(message: string, context: LogContext = {}) {
    this.log('warn', message, context);
  }

  logInfo(message: string, context: LogContext = {}) {
    this.log('info', message, context);
  }

  logDebug(message: string, context: LogContext = {}) {
    this.log('debug', message, context);
  }

  // Network error specific logging
  logNetworkError(error: Error, requestDetails: {
    url: string;
    method: string;
    status?: number;
  }) {
    this.logError(error, {
      type: 'network_error',
      requestUrl: requestDetails.url,
      requestMethod: requestDetails.method,
      responseStatus: requestDetails.status,
    });
  }

  // API error specific logging
  logApiError(error: Error | string, requestDetails: {
    url: string;
    method: string;
    status: number;
    response?: any;
  }) {
    this.logError(error, {
      type: 'api_error',
      requestUrl: requestDetails.url,
      requestMethod: requestDetails.method,
      responseStatus: requestDetails.status,
      responseData: requestDetails.response,
    });
  }

  // User action logging
  logUserAction(action: string, context: LogContext = {}) {
    this.logInfo(`User action: ${action}`, {
      ...context,
      type: 'user_action',
      action,
    });
  }
}

// Create singleton instance
const logger = new Logger();

// Export convenience functions
export const logError = logger.logError.bind(logger);
export const logWarning = logger.logWarning.bind(logger);
export const logInfo = logger.logInfo.bind(logger);
export const logDebug = logger.logDebug.bind(logger);
export const logNetworkError = logger.logNetworkError.bind(logger);
export const logApiError = logger.logApiError.bind(logger);
export const logUserAction = logger.logUserAction.bind(logger);

export default logger;