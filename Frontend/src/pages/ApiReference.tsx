import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Code, Database, Shield, Key, Clock, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContextualLinks from '../components/ContextualLinks';

export default function ApiReference() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/legal/query',
      description: 'Submit a legal query to the AI assistant',
      parameters: [
        { name: 'query', type: 'string', required: true, description: 'The legal question to ask' },
        { name: 'language', type: 'string', required: false, description: 'Response language (default: en)' },
        { name: 'legal_area', type: 'string', required: false, description: 'Specific legal area to focus on' }
      ],
      response: {
        answer: 'string',
        citations: 'array',
        confidence: 'number',
        legal_area: 'string'
      }
    },
    {
      method: 'GET',
      path: '/api/v1/legal/areas',
      description: 'Get list of available legal areas',
      parameters: [],
      response: {
        areas: 'array',
        count: 'number'
      }
    },
    {
      method: 'GET',
      path: '/api/v1/user/profile',
      description: 'Get user profile information',
      parameters: [
        { name: 'user_id', type: 'string', required: true, description: 'User identifier' }
      ],
      response: {
        user_id: 'string',
        email: 'string',
        created_at: 'string',
        subscription_type: 'string'
      }
    }
  ];

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const filteredEndpoints = endpoints.filter(endpoint =>
    endpoint.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
    endpoint.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Breadcrumbs />
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">API Reference</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">LegalAI REST API Documentation</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link to="/user-guide" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                User Guide →
              </Link>
              <Link to="/support" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                Get Support →
              </Link>
              <Link to="/faq" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                FAQ →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Table of Contents */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#overview" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>API Overview</span>
            </a>
            <a href="#authentication" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span>Authentication</span>
            </a>
            <a href="#endpoints" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span>API Endpoints</span>
            </a>
            <a href="#database" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              <span>Database Schema</span>
            </a>
            <a href="#rate-limiting" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span>Rate Limiting</span>
            </a>
            <a href="#examples" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              <span>Code Examples</span>
            </a>
          </div>
        </div>

        {/* API Overview */}
        <section id="overview" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">API Overview</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Base URL</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
                  https://api.legalai.com/v1
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Content Type</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  All API requests and responses use JSON format. Include the following header in all requests:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
                  Content-Type: application/json
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">RESTful Design</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Standard HTTP methods and status codes</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">JSON Responses</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Consistent JSON structure for all endpoints</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Versioned API</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">Version control for backward compatibility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section id="authentication" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Authentication</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">API Key Authentication</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Include your API key in the Authorization header of all requests:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Getting Your API Key</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Sign up for a LegalAI account</li>
                  <li>Navigate to your dashboard</li>
                  <li>Go to API Settings</li>
                  <li>Generate a new API key</li>
                  <li>Copy and securely store your key</li>
                </ol>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Key className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Security Best Practices</h4>
                </div>
                <ul className="text-yellow-800 dark:text-yellow-300 text-sm space-y-1">
                  <li>• Never expose API keys in client-side code</li>
                  <li>• Use environment variables to store keys</li>
                  <li>• Rotate keys regularly</li>
                  <li>• Monitor API usage for unusual activity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">API Endpoints</h2>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search endpoints..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-6">
              {filteredEndpoints.map((endpoint, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="font-mono text-sm text-gray-900 dark:text-gray-100">
                          {endpoint.path}
                        </code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(endpoint.path, endpoint.path)}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      >
                        {copiedEndpoint === endpoint.path ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{endpoint.description}</p>
                  </div>
                  
                  <div className="p-4">
                    {endpoint.parameters.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Parameters</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                              <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Name</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Type</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Required</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Description</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                              {endpoint.parameters.map((param, paramIndex) => (
                                <tr key={paramIndex}>
                                  <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-gray-100">{param.name}</td>
                                  <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">{param.type}</td>
                                  <td className="px-4 py-2 text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                      param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      {param.required ? 'Required' : 'Optional'}
                                    </span>
                                  </td>
                                  <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response Format</h4>
                      <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto">
                        <code className="text-gray-900 dark:text-gray-100">
                          {JSON.stringify(endpoint.response, null, 2)}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database Schema */}
        <section id="database" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Database Schema</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Users Collection</h3>
                  <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`{
  "_id": "ObjectId",
  "email": "string",
  "name": "string",
  "created_at": "Date",
  "subscription_type": "string",
  "api_key": "string",
  "usage_stats": {
    "queries_count": "number",
    "last_query": "Date"
  }
}`}
                  </pre>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal Queries Collection</h3>
                  <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`{
  "_id": "ObjectId",
  "user_id": "ObjectId",
  "query": "string",
  "response": "string",
  "legal_area": "string",
  "confidence": "number",
  "citations": ["string"],
  "timestamp": "Date",
  "language": "string"
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Relationships</h3>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    <li>• Users → Legal Queries (One-to-Many)</li>
                    <li>• Legal Areas → Legal Queries (One-to-Many)</li>
                    <li>• Users → API Keys (One-to-One)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limiting */}
        <section id="rate-limiting" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Rate Limiting</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700 text-center">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Free Tier</h3>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">100</div>
                  <p className="text-green-700 dark:text-green-300 text-sm">requests per hour</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Pro Tier</h3>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">1,000</div>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">requests per hour</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700 text-center">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Enterprise</h3>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">10,000</div>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">requests per hour</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Rate Limit Headers</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  All API responses include rate limiting information in the headers:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm space-y-1">
                  <div>X-RateLimit-Limit: 1000</div>
                  <div>X-RateLimit-Remaining: 999</div>
                  <div>X-RateLimit-Reset: 1640995200</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section id="examples" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-3 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Code Examples</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">JavaScript (Node.js)</h3>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto">
                  <code className="text-gray-900 dark:text-gray-100">
{`const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
const baseURL = 'https://api.legalai.com/v1';

async function queryLegalAI(question) {
  try {
    const response = await axios.post(\`\${baseURL}/legal/query\`, {
      query: question,
      language: 'en'
    }, {
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

// Usage
queryLegalAI('What are fundamental rights in India?')
  .then(result => console.log(result));`}
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Python</h3>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto">
                  <code className="text-gray-900 dark:text-gray-100">
{`import requests
import json

API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.legalai.com/v1'

def query_legal_ai(question):
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
    
    data = {
        'query': question,
        'language': 'en'
    }
    
    response = requests.post(
        f'{BASE_URL}/legal/query',
        headers=headers,
        json=data
    )
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f'Error: {response.status_code}')
        return None

# Usage
result = query_legal_ai('What are fundamental rights in India?')
if result:
    print(json.dumps(result, indent=2))`}
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">cURL</h3>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto">
                  <code className="text-gray-900 dark:text-gray-100">
{`curl -X POST https://api.legalai.com/v1/legal/query \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "What are fundamental rights in India?",
    "language": "en"
  }'`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
        
        {/* Help Section */}
        <div className="mt-16">
          <ContextualLinks context="documentation" />
        </div>
      </div>
    </div>
  );
}