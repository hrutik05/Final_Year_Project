import React from 'react';
import { ArrowLeft, Scale, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedLinks from '../components/RelatedLinks';
import ContextualLinks from '../components/ContextualLinks';

export default function ConstitutionalLaw() {
  const sections = [
    {
      title: "Fundamental Rights",
      articles: ["Article 14-18", "Article 19-22", "Article 23-24"],
      description: "Core constitutional rights guaranteed to all citizens"
    },
    {
      title: "Directive Principles",
      articles: ["Article 36-51", "Part IV"],
      description: "Guidelines for state policy and governance"
    },
    {
      title: "Emergency Provisions",
      articles: ["Article 352-360", "Part XVIII"],
      description: "Constitutional provisions during emergency situations"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 w-16 h-16 rounded-lg flex items-center justify-center">
              <Scale className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Constitutional Law</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">Fundamental rights, directive principles, and constitutional provisions</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Constitutional Law forms the foundation of the Indian legal system. This section covers the fundamental
                structure, rights, and principles enshrined in the Constitution of India.
              </p>

              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Quick Navigation</h3>
                <div className="flex flex-wrap gap-2">
                  <Link to="/criminal-law" className="text-sm bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors">
                    Criminal Law →
                  </Link>
                  <Link to="/civil-law" className="text-sm bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors">
                    Civil Law →
                  </Link>
                  <Link to="/#chat" className="text-sm bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors">
                    Ask AI Assistant →
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                {sections.map((section, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{section.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{section.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {section.articles.map((article, articleIndex) => (
                        <span key={articleIndex} className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                          {article}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Reference</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Constitution of India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">395 Articles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">22 Parts</span>
                </div>
              </div>
            </div>

            <ContextualLinks context="legal-area" className="mb-6" />

            <RelatedLinks currentPath="/constitutional-law" />
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Explore More Legal Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/criminal-law" className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors border border-red-200 dark:border-red-700">
              <h3 className="font-semibold text-red-900 dark:text-red-100">Criminal Law</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">IPC, CrPC, and criminal procedures</p>
            </Link>
            <Link to="/family-law" className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-colors border border-pink-200 dark:border-pink-700">
              <h3 className="font-semibold text-pink-900 dark:text-pink-100">Constitutional Law</h3>
              <p className="text-sm text-pink-700 dark:text-pink-300 mt-1">Fundamental rights and principles</p>
            </Link>
            <Link to="/property-law" className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors border border-orange-200 dark:border-orange-700">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100">Property Law</h3>
              <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">Real estate and property rights</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}