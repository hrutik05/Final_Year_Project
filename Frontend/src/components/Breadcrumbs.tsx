import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/constitutional-law': 'Constitutional Law',
  '/criminal-law': 'Criminal Law',
  '/civil-law': 'Civil Law',
  '/corporate-law': 'Corporate Law',
  '/family-law': 'Family Law',
  '/property-law': 'Property Law',
  '/labour-law': 'Labour Law',
  '/consumer-law': 'Consumer Law',
  '/api-reference': 'API Reference',
  '/user-guide': 'User Guide',
  '/faq': 'FAQ',
  '/support': 'Support',
  '/documentation': 'Documentation',
  '/project-info': 'Project Information',
  '/login': 'Sign In',
  '/signup': 'Sign Up'
};

export default function Breadcrumbs({ customItems, className = '' }: BreadcrumbsProps) {
  const location = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;
    
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isActive = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        label: routeLabels[currentPath] || segment.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        path: currentPath,
        isActive
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  if (breadcrumbs.length <= 1) return null;

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className={`bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500 mx-2" />
              )}
              
              {item.isActive ? (
                <span 
                  className="text-gray-900 dark:text-white font-medium"
                  aria-current="page"
                >
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
                  title={`Navigate to ${item.label}`}
                >
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}