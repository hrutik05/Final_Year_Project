import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastNotificationProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const toastStyles = {
  success: {
    bg: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700',
    icon: CheckCircle,
    iconColor: 'text-green-600 dark:text-green-400'
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700',
    icon: AlertCircle,
    iconColor: 'text-red-600 dark:text-red-400'
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700',
    icon: AlertTriangle,
    iconColor: 'text-yellow-600 dark:text-yellow-400'
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700',
    icon: Info,
    iconColor: 'text-blue-600 dark:text-blue-400'
  }
};

export default function ToastNotification({ toast, onClose }: ToastNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  
  const style = toastStyles[toast.type];
  const Icon = style.icon;

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(toast.id);
    }, 300);
  };

  return (
    <div
      className={`
        max-w-sm w-full ${style.bg} border rounded-lg shadow-lg p-4 pointer-events-auto
        transform transition-all duration-300 ease-in-out
        ${isVisible && !isLeaving 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0'
        }
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className={`w-5 h-5 ${style.iconColor}`} />
        </div>
        
        <div className="ml-3 flex-1">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
            {toast.title}
          </h4>
          {toast.message && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {toast.message}
            </p>
          )}
          {toast.action && (
            <div className="mt-3">
              <button
                onClick={toast.action.onClick}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                {toast.action.label}
              </button>
            </div>
          )}
        </div>
        
        <div className="ml-4 flex-shrink-0">
          <button
            onClick={handleClose}
            className="inline-flex text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}