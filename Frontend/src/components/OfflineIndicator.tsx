import React from 'react';
import { WifiOff, Wifi } from 'lucide-react';

interface OfflineIndicatorProps {
  isOnline: boolean;
  className?: string;
}

export default function OfflineIndicator({ isOnline, className = '' }: OfflineIndicatorProps) {
  if (isOnline) return null;

  return (
    <div className={`bg-yellow-500 text-white px-4 py-2 text-sm font-medium flex items-center justify-center space-x-2 ${className}`}>
      <WifiOff className="w-4 h-4" />
      <span>You're offline. Some features may be limited.</span>
    </div>
  );
}