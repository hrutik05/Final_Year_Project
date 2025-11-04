import React from 'react';
import { Shield, BookOpen, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedLinks from '../components/RelatedLinks';
import ContextualLinks from '../components/ContextualLinks';

export default function CriminalLaw() {
  const sections = [
    {
      title: "Indian Penal Code (IPC)",
      chapters: ["Chapter I-IV", "Chapter XVI", "Chapter XVII"],
      description: "Comprehensive criminal code covering offenses and punishments"
    },
    {
      title: "Criminal Procedure Code (CrPC)",
      chapters: ["Chapter VII", "Chapter XIV", "Chapter XXIII"],
      description: "Procedural law for criminal cases and investigations"
    },
    {
      title: "Evidence Act",
      chapters: ["Chapter II", "Chapter VII", "Chapter IX"],
      description: "Rules governing evidence in criminal proceedings"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50 w-16 h-16 rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Criminal Law</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">Indian Penal Code, Criminal Procedure Code, and criminal justice system</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Criminal Law in India encompasses the Indian Penal Code (IPC), Criminal Procedure Code (CrPC),
                and Evidence Act. These laws define crimes, prescribe punishments, and establish procedures for criminal justice.
              </p>

              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Quick Navigation</h3>
                <div className="flex flex-wrap gap-2">
                  <Link to="/constitutional-law" className="text-sm bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 px-3 py-1 rounded-full hover:bg-red-100 dark:hover:bg-red-800/50 transition-colors">
                    Constitutional Law →
                  </Link>
                  <Link to="/civil-law" className="text-sm bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 px-3 py-1 rounded-full hover:bg-red-100 dark:hover:bg-red-800/50 transition-colors">
                    Civil Law →
                  </Link>
                  <Link to="/#chat" className="text-sm bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 px-3 py-1 rounded-full hover:bg-red-100 dark:hover:bg-red-800/50 transition-colors">
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
                      {section.chapters.map((chapter, chapterIndex) => (
                        <span key={chapterIndex} className="bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">
                          {chapter}
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
                  <BookOpen className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">IPC 1860</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">CrPC 1973</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">Evidence Act 1872</span>
                </div>
              </div>
            </div>

            <ContextualLinks context="legal-area" className="mb-6" />

            <RelatedLinks currentPath="/criminal-law" />
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