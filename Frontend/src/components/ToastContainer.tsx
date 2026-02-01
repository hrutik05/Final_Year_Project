import React from 'react';
import { createPortal } from 'react-dom';
import ToastNotification, { Toast } from './ToastNotification';

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
}

export default function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return createPortal(
    <div
      className="fixed top-4 right-4 z-50 space-y-2"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <ToastNotification
          key={toast.id}
          toast={toast}
          onClose={onClose}
        />
      ))}
    </div>,
    document.body
  );
}