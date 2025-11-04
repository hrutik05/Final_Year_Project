import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BookOpen, Search, Clock, Shield, Award, Database, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Get immediate answers to your legal questions with AI-powered analysis of Indian laws.",
    color: "blue"
  },
  {
    icon: BookOpen,
    title: "Accurate Citations",
    description: "Every response includes proper legal citations and references to relevant acts and sections.",
    color: "purple"
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Advanced search capabilities across all Indian legal documents and case laws.",
    color: "green"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access legal guidance anytime, anywhere with our always-available AI assistant.",
    color: "orange"
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your legal queries are completely confidential and securely processed.",
    color: "red"
  },
  {
    icon: Award,
    title: "High Accuracy",
    description: "95%+ accuracy rate validated by legal experts and continuous learning.",
    color: "indigo"
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Trained on extensive Indian legal corpus including acts, rules, and judgments.",
    color: "teal"
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Suitable for law students, professionals, and general public seeking legal guidance.",
    color: "pink"
  }
];

const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  green: "from-green-500 to-green-600",
  orange: "from-orange-500 to-orange-600",
  red: "from-red-500 to-red-600",
  indigo: "from-indigo-500 to-indigo-600",
  teal: "from-teal-500 to-teal-600",
  pink: "from-pink-500 to-pink-600"
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced AI capabilities designed specifically for Indian legal system to provide accurate and reliable legal assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-600 group"
            >
              <div className={`bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-600">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Built for Indian Legal System
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                Our AI assistant is specifically designed and trained for the Indian legal framework, 
                ensuring culturally relevant and legally accurate responses for Indian law practitioners and students.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Trained on <Link to="/constitutional-law" className="text-blue-600 dark:text-blue-400 hover:underline">Indian Constitution</Link>, 
                    <Link to="/criminal-law" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">IPC</Link>, 
                    <Link to="/criminal-law" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">CrPC</Link>, 
                    <Link to="/civil-law" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">CPC</Link>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Updated with latest amendments and judgments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Supports 10+ languages including all major Indian languages
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Validated by legal experts and practitioners</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">95%</div>
                <div className="text-gray-600 dark:text-gray-300 mb-4">Accuracy Rate</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Validated through extensive testing with legal professionals and continuous improvement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}