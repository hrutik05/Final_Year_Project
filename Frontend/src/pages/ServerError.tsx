import React from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function ServerError() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="bg-red-100 dark:bg-red-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Server Error</h1>
          <p className="text-gray-600 dark:text-gray-300">
            We're experiencing technical difficulties. Our team has been notified and is working to resolve the issue.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What happened?</h2>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>Our servers encountered an unexpected error</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>The issue has been automatically reported</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>Our team is working on a fix</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleReload}
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          
          <Link
            to="/"
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If the problem persists, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}