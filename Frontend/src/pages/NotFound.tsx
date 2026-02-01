import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What can you do?</h2>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Check the URL for typos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Go back to the previous page</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Visit our homepage</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Use our AI assistant for legal help</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help? Contact our support team or use our AI legal assistant.
          </p>
        </div>
      </div>
    </div>
  );
}