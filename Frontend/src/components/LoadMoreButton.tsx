import React, { useState } from 'react';
import { Loader2, ChevronDown } from 'lucide-react';

interface LoadMoreButtonProps {
  onLoadMore: () => Promise<void> | void;
  isLoading?: boolean;
  hasMore?: boolean;
  loadingText?: string;
  buttonText?: string;
  noMoreText?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadMoreButton({
  onLoadMore,
  isLoading = false,
  hasMore = true,
  loadingText = 'Loading more...',
  buttonText = 'Load More',
  noMoreText = 'No more items to load',
  className = '',
  variant = 'outline',
  size = 'md'
}: LoadMoreButtonProps) {
  const [internalLoading, setInternalLoading] = useState(false);

  const handleClick = async () => {
    if (isLoading || internalLoading || !hasMore) return;

    setInternalLoading(true);
    try {
      await onLoadMore();
    } catch (error) {
      console.error('Error loading more items:', error);
    } finally {
      setInternalLoading(false);
    }
  };

  const loading = isLoading || internalLoading;

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-400',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-400',
    outline: 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-400 dark:disabled:text-gray-500'
  };

  if (!hasMore) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {noMoreText}
        </p>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <button
        onClick={handleClick}
        disabled={loading || !hasMore}
        className={`
          inline-flex items-center justify-center font-medium rounded-lg
          transition-all duration-200 transform hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900
          disabled:transform-none disabled:cursor-not-allowed disabled:opacity-60
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
        aria-label={loading ? loadingText : buttonText}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            <span>{loadingText}</span>
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <ChevronDown className="w-4 h-4 ml-2" />
          </>
        )}
      </button>

      {/* Screen reader status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {loading ? loadingText : ''}
      </div>
    </div>
  );
}