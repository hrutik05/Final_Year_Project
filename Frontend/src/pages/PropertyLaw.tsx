import React from 'react';
import { Home, BookOpen, FileText, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedLinks from '../components/RelatedLinks';
import ContextualLinks from '../components/ContextualLinks';

export default function PropertyLaw() {
  const sections = [
    {
      title: "Transfer of Property Act",
      chapters: ["Chapter II", "Chapter IV", "Chapter VII"],
      description: "Laws governing transfer of immovable property and related transactions"
    },
    {
      title: "Registration Act",
      sections: ["Section 17", "Section 49", "Section 69"],
      description: "Mandatory registration of property documents and procedures"
    },
    {
      title: "Land Acquisition",
      acts: ["LARR Act 2013", "State Land Laws", "Urban Land Acts"],
      description: "Government acquisition of private land for public purposes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 w-16 h-16 rounded-lg flex items-center justify-center">
              <Home className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Property Law</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">Real estate, property rights, registration, and property disputes</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Property Law governs the ownership, transfer, and use of real estate and immovable property.
                It includes registration requirements, property rights, and dispute resolution mechanisms.
              </p>

              <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-700">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Quick Navigation</h3>
                <div className="flex flex-wrap gap-2">
                  <Link to="/civil-law" className="text-sm bg-white dark:bg-gray-700 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full hover:bg-orange-100 dark:hover:bg-orange-800/50 transition-colors">
                    Civil Law →
                  </Link>
                  <Link to="/family-law" className="text-sm bg-white dark:bg-gray-700 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full hover:bg-orange-100 dark:hover:bg-orange-800/50 transition-colors">
                    Family Law →
                  </Link>
                  <Link to="/#chat" className="text-sm bg-white dark:bg-gray-700 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full hover:bg-orange-100 dark:hover:bg-orange-800/50 transition-colors">
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
                      {(section.chapters || section.sections || section.acts)?.map((item, itemIndex) => (
                        <span key={itemIndex} className="bg-orange-50 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm">
                          {item}
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
                  <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-300">Transfer of Property Act</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-300">Registration Act</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-300">RERA 2016</span>
                </div>
              </div>
            </div>

            <ContextualLinks context="legal-area" className="mb-6" />

            <RelatedLinks currentPath="/property-law" />
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