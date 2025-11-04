import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Scale, Shield, Home } from 'lucide-react';

interface RelatedLink {
  title: string;
  path: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface RelatedLinksProps {
  currentPath: string;
  className?: string;
  maxLinks?: number;
}

const allLinks: RelatedLink[] = [
  {
    title: 'Constitutional Law',
    path: '/constitutional-law',
    description: 'Fundamental rights, directive principles, and constitutional provisions',
    icon: Scale
  },
  {
    title: 'Criminal Law',
    path: '/criminal-law',
    description: 'Indian Penal Code, Criminal Procedure Code, and criminal justice',
    icon: Shield
  },

  {
    title: 'Property Law',
    path: '/property-law',
    description: 'Real estate, property rights, and registration procedures',
    icon: Home
  },
  {
    title: 'User Guide',
    path: '/user-guide',
    description: 'Complete guide to using LegalAI effectively',
    icon: BookOpen
  },
  {
    title: 'API Reference',
    path: '/api-reference',
    description: 'Technical documentation for developers',
    icon: BookOpen
  }
];

export default function RelatedLinks({ currentPath, className = '', maxLinks = 3 }: RelatedLinksProps) {
  // Filter out current page and get related links
  const relatedLinks = allLinks
    .filter(link => link.path !== currentPath)
    .slice(0, maxLinks);

  if (relatedLinks.length === 0) return null;

  return (
    <div className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <BookOpen className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
        Related Resources
      </h3>
      
      <div className="space-y-3">
        {relatedLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
            title={`Learn about ${link.title}`}
          >
            {link.icon && (
              <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors flex-shrink-0">
                <link.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {link.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                {link.description}
              </p>
            </div>
            
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
          </Link>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
        <Link
          to="/#legal-areas"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors flex items-center"
        >
          View All Legal Areas
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}