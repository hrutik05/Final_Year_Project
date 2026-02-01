import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, BookOpen, HelpCircle, Phone } from 'lucide-react';

interface ContextualLinksProps {
  context: 'legal-area' | 'documentation' | 'support' | 'general';
  className?: string;
}

const contextualLinkSets = {
  'legal-area': [
    {
      title: 'Ask AI Assistant',
      path: '/#chat',
      description: 'Get instant answers about this legal area',
      icon: MessageSquare,
      variant: 'primary' as const
    },
    {
      title: 'User Guide',
      path: '/user-guide',
      description: 'Learn how to use LegalAI effectively',
      icon: BookOpen,
      variant: 'secondary' as const
    },
    {
      title: 'FAQ',
      path: '/faq',
      description: 'Common questions and answers',
      icon: HelpCircle,
      variant: 'secondary' as const
    }
  ],
  'documentation': [
    {
      title: 'API Reference',
      path: '/api-reference',
      description: 'Complete API documentation',
      icon: BookOpen,
      variant: 'primary' as const
    },
    {
      title: 'Get Support',
      path: '/support',
      description: 'Contact our support team',
      icon: Phone,
      variant: 'secondary' as const
    },
    {
      title: 'FAQ',
      path: '/faq',
      description: 'Frequently asked questions',
      icon: HelpCircle,
      variant: 'secondary' as const
    }
  ],
  'support': [
    {
      title: 'User Guide',
      path: '/user-guide',
      description: 'Step-by-step tutorials',
      icon: BookOpen,
      variant: 'primary' as const
    },
    {
      title: 'Ask AI Assistant',
      path: '/#chat',
      description: 'Get instant help from AI',
      icon: MessageSquare,
      variant: 'secondary' as const
    },
    {
      title: 'FAQ',
      path: '/faq',
      description: 'Common questions and solutions',
      icon: HelpCircle,
      variant: 'secondary' as const
    }
  ],
  'general': [
    {
      title: 'Start Legal Chat',
      path: '/#chat',
      description: 'Get instant legal assistance',
      icon: MessageSquare,
      variant: 'primary' as const
    },
    {
      title: 'Browse Legal Areas',
      path: '/#legal-areas',
      description: 'Explore different areas of law',
      icon: BookOpen,
      variant: 'secondary' as const
    },
    {
      title: 'Get Support',
      path: '/support',
      description: 'Contact our team for help',
      icon: Phone,
      variant: 'secondary' as const
    }
  ]
};

export default function ContextualLinks({ context, className = '' }: ContextualLinksProps) {
  const links = contextualLinkSets[context] || contextualLinkSets.general;

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-700 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Need Help?
      </h3>
      
      <div className="space-y-3">
        {links.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            className={`group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
              link.variant === 'primary'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }`}
            title={link.description}
          >
            <div className={`p-2 rounded-lg ${
              link.variant === 'primary'
                ? 'bg-white/20'
                : 'bg-blue-100 dark:bg-blue-900/50'
            }`}>
              <link.icon className={`w-4 h-4 ${
                link.variant === 'primary'
                  ? 'text-white'
                  : 'text-blue-600 dark:text-blue-400'
              }`} />
            </div>
            
            <div className="flex-1">
              <h4 className={`font-medium ${
                link.variant === 'primary'
                  ? 'text-white'
                  : 'text-gray-900 dark:text-white'
              }`}>
                {link.title}
              </h4>
              <p className={`text-sm ${
                link.variant === 'primary'
                  ? 'text-blue-100'
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                {link.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}