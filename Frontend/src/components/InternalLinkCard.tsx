import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface InternalLinkCardProps {
  title: string;
  description: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
  className?: string;
  variant?: 'default' | 'featured' | 'compact';
}

export default function InternalLinkCard({
  title,
  description,
  path,
  icon: Icon,
  isExternal = false,
  className = '',
  variant = 'default'
}: InternalLinkCardProps) {
  const baseClasses = "group block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/50";
  
  const variantClasses = {
    default: "p-6",
    featured: "p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30",
    compact: "p-4"
  };

  const LinkComponent = isExternal ? 'a' : Link;
  const linkProps = isExternal 
    ? { href: path, target: '_blank', rel: 'noopener noreferrer' }
    : { to: path };

  return (
    <LinkComponent
      {...linkProps}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      title={`Navigate to ${title}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            {Icon && (
              <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            )}
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="ml-4 flex-shrink-0">
          {isExternal ? (
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          ) : (
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
          )}
        </div>
      </div>
    </LinkComponent>
  );
}