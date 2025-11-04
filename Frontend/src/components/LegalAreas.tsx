import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield,Home, FileText, } from 'lucide-react';

const legalAreas = [
  {
    icon: Scale,
    title: "Constitutional Law",
    description: "Fundamental rights, directive principles, constitutional amendments, and judicial review.",
    topics: ["Fundamental Rights", "DPSP", "Emergency Provisions", "Constitutional Amendments"],
    color: "blue",
    path: "/constitutional-law"
  },
  {
    icon: Shield,
    title: "Criminal Law",
    description: "Indian Penal Code, Criminal Procedure Code, and criminal justice system.",
    topics: ["IPC Sections", "CrPC Procedures", "Bail Provisions", "Evidence Act"],
    color: "red",
    path: "/criminal-law"
  },
  {
    icon: FileText,
    title: "Civil Law",
    description: "Civil procedures, contracts, torts, and civil remedies under Indian law.",
    topics: ["CPC Procedures", "Contract Act", "Tort Law", "Civil Remedies"],
    color: "green",
    path: "/civil-law"
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Real estate, property rights, registration, and property disputes.",
    topics: ["Property Rights", "Registration Act", "Transfer of Property", "Land Laws"],
    color: "orange",
    path: "/property-law"
  }
];

const colorClasses = {
  blue: "from-blue-100 to-blue-200 text-blue-600 border-blue-200",
  red: "from-red-100 to-red-200 text-red-600 border-red-200",
  green: "from-green-100 to-green-200 text-green-600 border-green-200",
  purple: "from-purple-100 to-purple-200 text-purple-600 border-purple-200",
  pink: "from-pink-100 to-pink-200 text-pink-600 border-pink-200",
  orange: "from-orange-100 to-orange-200 text-orange-600 border-orange-200",
  indigo: "from-indigo-100 to-indigo-200 text-indigo-600 border-indigo-200",
  teal: "from-teal-100 to-teal-200 text-teal-600 border-teal-200"
};

export default function LegalAreas() {
  return (
    <section id="legal-areas" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Legal Areas Covered
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI assistant is trained on comprehensive Indian legal frameworks covering all major areas of law.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalAreas.map((area, index) => (
            <Link 
              key={index} 
              to={area.path} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group cursor-pointer block"
              title={`Learn about ${area.title} - ${area.description}`}
            >
              <div className={`bg-gradient-to-r ${colorClasses[area.color as keyof typeof colorClasses]} w-14 h-14 rounded-lg flex items-center justify-center mb-4 border group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{area.description}</p>
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Key Topics:</p>
                <div className="flex flex-wrap gap-1">
                  {area.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Legal Database</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Our AI is trained on thousands of legal documents, case laws, and statutory provisions to provide 
              accurate and up-to-date legal information across all major areas of Indian law.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Legal Acts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Case Laws</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Legal Provisions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Daily</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}