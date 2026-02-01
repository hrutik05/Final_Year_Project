import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, BookOpen, MessageSquare, Users, Settings, HelpCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContextualLinks from '../components/ContextualLinks';

export default function UserGuide() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: BookOpen },
    { id: 'using-chat', title: 'Using the AI Chat', icon: MessageSquare },
    { id: 'account-setup', title: 'Account Setup', icon: Users },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: HelpCircle },
    { id: 'best-practices', title: 'Best Practices', icon: Settings }
  ];

  const troubleshootingItems = [
    {
      issue: "AI responses are not accurate",
      solution: "Try rephrasing your question more specifically. Include relevant details like jurisdiction, specific legal area, or context.",
      type: "warning"
    },
    {
      issue: "Chat interface is not loading",
      solution: "Check your internet connection and refresh the page. Clear your browser cache if the issue persists.",
      type: "error"
    },
    {
      issue: "Translation is not working properly",
      solution: "Ensure you have selected the correct language from the language selector. Some legal terms may not translate directly.",
      type: "info"
    },
    {
      issue: "Cannot create an account",
      solution: "Verify your email address format and ensure you're using a strong password with at least 8 characters.",
      type: "warning"
    }
  ];

  const bestPractices = [
    {
      title: "Ask Specific Questions",
      description: "Instead of 'Tell me about criminal law', ask 'What is the punishment for theft under Section 378 IPC?'",
      icon: MessageSquare
    },
    {
      title: "Provide Context",
      description: "Include relevant details like your location, specific situation, or the legal area you're interested in.",
      icon: Info
    },
    {
      title: "Use Legal Terminology",
      description: "When you know specific legal terms or section numbers, include them in your questions for more precise answers.",
      icon: BookOpen
    },
    {
      title: "Verify Information",
      description: "Always cross-reference AI responses with official legal documents or consult a qualified lawyer for important matters.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Breadcrumbs />
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">User Guide</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Complete guide to using LegalAI</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link to="/api-reference" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                API Reference →
              </Link>
              <Link to="/faq" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                FAQ →
              </Link>
              <Link to="/#chat" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                Try AI Assistant →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contents</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Search */}
              <div className="mt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search guide..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              
              {/* Getting Started */}
              {activeSection === 'getting-started' && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Getting Started</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Welcome to LegalAI</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        LegalAI is your comprehensive AI-powered legal assistant for Indian laws. This guide will help you get the most out of our platform.
                      </p>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">What You Can Do</h4>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                          <li>• Ask questions about Indian laws and get instant answers</li>
                          <li>• Get proper legal citations and references</li>
                          <li>• Access information in multiple Indian languages</li>
                          <li>• Explore different areas of law (Constitutional, Criminal, Civil, etc.)</li>
                          <li>• Get 24/7 legal guidance and support</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Start Steps</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Navigate to the Chat</h4>
                            <p className="text-gray-600 dark:text-gray-300">Click the "Start Chat" button in the header or scroll down to the chat section on the homepage.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Ask Your Question</h4>
                            <p className="text-gray-600 dark:text-gray-300">Type your legal question in the chat box. Be as specific as possible for better results.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Review the Response</h4>
                            <p className="text-gray-600 dark:text-gray-300">Get detailed answers with proper citations and legal references.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Explore Legal Areas</h4>
                            <p className="text-gray-600 dark:text-gray-300">Browse different legal areas for more specific information and resources.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Using Chat */}
              {activeSection === 'using-chat' && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Using the AI Chat</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Chat Interface Overview</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        The AI chat is your primary tool for getting legal information. Here's how to use it effectively:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Questions</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            Use the pre-defined quick questions to get started quickly.
                          </p>
                          <div className="space-y-2">
                            <div className="bg-white dark:bg-gray-600 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-300">
                              "What are fundamental rights?"
                            </div>
                            <div className="bg-white dark:bg-gray-600 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-300">
                              "Explain Section 302 IPC"
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Custom Questions</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            Type your own questions for personalized legal guidance.
                          </p>
                          <div className="bg-white dark:bg-gray-600 p-3 rounded">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Example:</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                              "What is the procedure for filing a consumer complaint in India?"
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Understanding Responses</h3>
                      <div className="space-y-4">
                        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Citations & References</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            Every response includes proper legal citations to help you verify information:
                          </p>
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Citations:</div>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                              <li>• Constitution of India, Part III</li>
                              <li>• Article 12-35</li>
                              <li>• Supreme Court judgments</li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response Actions</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            Use the action buttons below each response:
                          </p>
                          <div className="flex space-x-4 text-sm">
                            <span className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                              <span>📋</span> <span>Copy response</span>
                            </span>
                            <span className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                              <span>👍</span> <span>Helpful</span>
                            </span>
                            <span className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                              <span>👎</span> <span>Not helpful</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Language Support</h3>
                      <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Translation Notice</h4>
                        <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                          While the interface can be translated to multiple Indian languages, legal advice is provided in English for accuracy. 
                          Always consult original legal texts for precise meanings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Setup */}
              {activeSection === 'account-setup' && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Account Setup</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Creating an Account</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        While you can use LegalAI without an account, creating one provides additional benefits:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">With Account</h4>
                          <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                            <li>• Save chat history</li>
                            <li>• Personalized recommendations</li>
                            <li>• Priority support</li>
                            <li>• Advanced features access</li>
                            <li>• Usage analytics</li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Without Account</h4>
                          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                            <li>• Basic AI chat access</li>
                            <li>• Limited daily queries</li>
                            <li>• No chat history</li>
                            <li>• Standard support</li>
                            <li>• Basic features only</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Sign Up Process</h4>
                        <ol className="list-decimal list-inside space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                          <li>Click "Sign Up" in the header navigation</li>
                          <li>Fill in your full name, email, and phone number</li>
                          <li>Create a strong password (8+ characters with uppercase, lowercase, and numbers)</li>
                          <li>Accept the terms and conditions</li>
                          <li>Click "Create Account" to complete registration</li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Account Settings</h3>
                      <div className="space-y-4">
                        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Profile Management</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Update your personal information, change password, and manage notification preferences.
                          </p>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy Settings</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Control data sharing, chat history retention, and privacy preferences.
                          </p>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Language Preferences</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Set your preferred language for the interface and responses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Troubleshooting */}
              {activeSection === 'troubleshooting' && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-lg">
                      <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Troubleshooting</h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      Having issues with LegalAI? Here are solutions to common problems:
                    </p>

                    <div className="space-y-4">
                      {troubleshootingItems.map((item, index) => (
                        <div key={index} className={`border rounded-lg p-4 ${
                          item.type === 'error' ? 'border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/30' :
                          item.type === 'warning' ? 'border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/30' :
                          'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30'
                        }`}>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                              {item.type === 'error' && <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />}
                              {item.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
                              {item.type === 'info' && <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-semibold mb-2 ${
                                item.type === 'error' ? 'text-red-900 dark:text-red-100' :
                                item.type === 'warning' ? 'text-yellow-900 dark:text-yellow-100' :
                                'text-blue-900 dark:text-blue-100'
                              }`}>
                                {item.issue}
                              </h4>
                              <p className={`text-sm ${
                                item.type === 'error' ? 'text-red-800 dark:text-red-200' :
                                item.type === 'warning' ? 'text-yellow-800 dark:text-yellow-200' :
                                'text-blue-800 dark:text-blue-200'
                              }`}>
                                {item.solution}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Still Need Help?</h3>
                      <div className="space-y-3">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          If you're still experiencing issues, try these steps:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>Clear your browser cache and cookies</li>
                          <li>Try using a different browser or incognito mode</li>
                          <li>Check if JavaScript is enabled in your browser</li>
                          <li>Disable browser extensions temporarily</li>
                          <li>Contact our support team if the issue persists</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Best Practices */}
              {activeSection === 'best-practices' && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-3 rounded-lg">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Best Practices</h2>
                  </div>

                  <div className="space-y-8">
                    <p className="text-gray-600 dark:text-gray-300">
                      Follow these best practices to get the most accurate and helpful responses from LegalAI:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {bestPractices.map((practice, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                              <practice.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{practice.title}</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{practice.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                      <div className="flex items-center space-x-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <h3 className="font-semibold text-red-900 dark:text-red-100">Important Disclaimer</h3>
                      </div>
                      <div className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                        <p>• LegalAI provides general legal information, not personalized legal advice</p>
                        <p>• Always consult with a qualified lawyer for specific legal matters</p>
                        <p>• Laws may vary by state and jurisdiction within India</p>
                        <p>• Information may not reflect the most recent legal changes</p>
                        <p>• Use this tool as a starting point for legal research, not as a substitute for professional legal counsel</p>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Tips for Better Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Good Questions:</h4>
                          <ul className="space-y-1 text-green-700 dark:text-green-300 text-sm">
                            <li>• "What is the penalty for Section 420 IPC?"</li>
                            <li>• "How to file RTI application in Maharashtra?"</li>
                            <li>• "What are grounds for divorce under Hindu Marriage Act?"</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Avoid:</h4>
                          <ul className="space-y-1 text-green-700 dark:text-green-300 text-sm">
                            <li>• Vague questions like "Tell me about law"</li>
                            <li>• Personal legal advice requests</li>
                            <li>• Questions about ongoing court cases</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div className="mt-16">
          <ContextualLinks context="support" />
        </div>
      </div>
    </div>
  );
}