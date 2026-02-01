import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, Users, Zap, Code, Loader as Roadmap, ExternalLink, CheckCircle, AlertCircle, Info, Target, Smartphone, Globe, Shield, Database, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Documentation() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">LegalAI Documentation</h1>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Version 1.0 | Last Updated: Augest 2025
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 sticky top-24 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                <button
                  onClick={() => scrollToSection('overview')}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  1. Website Overview
                </button>
                <button
                  onClick={() => scrollToSection('how-to-use')}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  2. How to Use Guide
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  3. Features Documentation
                </button>
                <button
                  onClick={() => scrollToSection('technical')}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  4. Technical Methodology
                </button>
                <button
                  onClick={() => scrollToSection('roadmap')}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  5. Future Scope & Roadmap
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-8 border border-blue-200 dark:border-blue-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to LegalAI Documentation</h1>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  This comprehensive guide will help you understand and effectively use LegalAI, your AI-powered legal assistant 
                  for Indian laws. Whether you're a law student, legal professional, or someone seeking legal guidance, 
                  this documentation provides everything you need to get started.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Users className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">For Everyone</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Accessible legal guidance for all users</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Zap className="w-8 h-8 text-purple-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">AI-Powered</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Advanced AI trained on Indian laws</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Shield className="w-8 h-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Reliable</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">95% accuracy with proper citations</p>
                  </div>
                </div>
              </div>

              {/* Section 1: Website Overview */}
              <section id="overview" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Website Overview</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Main Purpose & Objectives</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      LegalAI is an AI-powered legal assistant specifically designed for the Indian legal system. Our primary objectives are:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Democratize Legal Knowledge:</strong> Make complex Indian laws accessible to everyone, regardless of their legal background</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Provide Instant Legal Guidance:</strong> Offer immediate, accurate responses to legal questions with proper citations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Bridge the Legal Gap:</strong> Connect common people with legal knowledge through AI technology</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Support Legal Education:</strong> Assist law students and professionals in understanding complex legal concepts</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Target Audience & Use Cases</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">👨‍🎓 Law Students</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Understanding complex legal concepts</li>
                          <li>• Research assistance for assignments</li>
                          <li>• Quick reference for case studies</li>
                          <li>• Exam preparation support</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">⚖️ Legal Professionals</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Quick legal reference tool</li>
                          <li>• Case law research assistance</li>
                          <li>• Client consultation preparation</li>
                          <li>• Legal document drafting support</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">👥 General Public</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Understanding legal rights</li>
                          <li>• Basic legal guidance</li>
                          <li>• Consumer protection queries</li>
                          <li>• Family law questions</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🏢 Businesses</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Corporate compliance queries</li>
                          <li>• Contract law guidance</li>
                          <li>• Employment law questions</li>
                          <li>• Regulatory compliance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: How to Use Guide */}
              <section id="how-to-use" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. How to Use Guide</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step-by-Step Instructions for New Users</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Visit the Homepage</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">Navigate to the LegalAI homepage where you'll see the main hero section with the "Start Legal Chat" button.</p>
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-sm text-gray-600 dark:text-gray-300">
                            <strong>Tip:</strong> The homepage provides an overview of all available legal areas and features.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Start a Legal Chat</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">Click the "Start Legal Chat" button to open the AI assistant interface. You can also use quick question buttons for common queries.</p>
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-sm">
                            <strong>Quick Questions Available:</strong>
                            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                              <li>• "What are fundamental rights?"</li>
                              <li>• "Explain Section 302 IPC"</li>
                              <li>• "What is Article 21?"</li>
                              <li>• "Difference between IPC and CrPC"</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ask Your Legal Question</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">Type your legal question in the chat interface. Be specific for better results.</p>
                          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-sm">
                            <strong>Best Practices:</strong>
                            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                              <li>• Be specific about the legal area (e.g., "criminal law", "family law")</li>
                              <li>• Include relevant details about your situation</li>
                              <li>• Ask one question at a time for clarity</li>
                              <li>• Use simple, clear language</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Review AI Response</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">The AI will provide a detailed response with proper legal citations and references.</p>
                          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg text-sm">
                            <strong>Response Features:</strong>
                            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                              <li>• Detailed explanations with legal context</li>
                              <li>• Proper citations from Indian legal acts</li>
                              <li>• Copy, like, or dislike options for feedback</li>
                              <li>• Related legal provisions and references</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Navigation Walkthrough</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Header Navigation</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span><strong>Home:</strong> Return to main page</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            <span><strong>Legal Areas:</strong> Browse specific law categories</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span><strong>About:</strong> Learn about the project</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                            <span><strong>Contact:</strong> Get in touch with the team</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Additional Features</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-blue-600" />
                            <span><strong>Language Selector:</strong> Translate interface</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Smartphone className="w-4 h-4 text-purple-600" />
                            <span><strong>Dark Mode Toggle:</strong> Switch themes</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-green-600" />
                            <span><strong>Account Menu:</strong> Sign in/Sign up</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Account Setup (Optional)</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Info className="w-6 h-6 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Account Benefits</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            While LegalAI can be used without an account, creating one provides additional benefits:
                          </p>
                          <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                            <li>• Save chat history for future reference</li>
                            <li>• Personalized legal recommendations</li>
                            <li>• Priority support and feedback</li>
                            <li>• Access to premium features (coming soon)</li>
                          </ul>
                          <div className="mt-4 space-x-3">
                            <Link to="/signup" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                              Create Account
                            </Link>
                            <Link to="/login" className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                              Sign In
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Features Documentation */}
              <section id="features" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Features Documentation</h2>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <Zap className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Legal Assistant</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Advanced AI trained specifically on Indian legal framework providing instant, accurate responses.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">24/7 availability</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">95% accuracy rate</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">Proper legal citations</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <BookOpen className="w-6 h-6 text-purple-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comprehensive Legal Database</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Extensive database covering all major areas of Indian law with regular updates.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">500+ legal acts</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">10K+ case laws</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">Daily updates</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <Globe className="w-6 h-6 text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Multi-Language Support</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Interface translation in 10+ Indian languages for better accessibility.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">Hindi, Bengali, Tamil</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">Telugu, Marathi, Gujarati</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">And more regional languages</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <Shield className="w-6 h-6 text-orange-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy & Security</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Your legal queries are completely confidential and securely processed.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">End-to-end encryption</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">No data retention</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300">GDPR compliant</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Legal Areas Covered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { name: 'Constitutional Law', icon: '⚖️', desc: 'Fundamental rights, DPSP' },
                        { name: 'Criminal Law', icon: '🛡️', desc: 'IPC, CrPC, Evidence Act' },
                        { name: 'Civil Law', icon: '📄', desc: 'CPC, Contract Act, Torts' },
                        { name: 'Family Law', icon: '❤️', desc: 'Marriage, Divorce, Adoption' }
                      ].map((area, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                          <div className="text-2xl mb-2">{area.icon}</div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{area.name}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{area.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How to Access Each Feature</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🤖 AI Chat Assistant</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          <strong>Access:</strong> Click "Start Legal Chat" button on homepage or header
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          <strong>Usage:</strong> Type your legal question, use quick questions, or browse suggested topics
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📚 Legal Areas Browser</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          <strong>Access:</strong> Navigate to "Legal Areas" dropdown in header or scroll to legal areas section
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          <strong>Usage:</strong> Click on any legal area card to explore specific laws and provisions
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🌐 Language Translation</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          <strong>Access:</strong> Click the language selector (globe icon) in the header
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          <strong>Usage:</strong> Select your preferred language from the dropdown menu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Technical Methodology */}
              <section id="technical" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <Code className="w-8 h-8 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Technical Methodology</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies & Frameworks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          <li>• React 18 with TypeScript</li>
                          <li>• Vite for build tooling</li>
                          <li>• Tailwind CSS for styling</li>
                          <li>• React Router for navigation</li>
                          <li>• Lucide React for icons</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI & Backend</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          <li>• Natural Language Processing</li>
                          <li>• Machine Learning Models</li>
                          <li>• Legal Knowledge Base</li>
                          <li>• RESTful API Architecture</li>
                          <li>• Real-time Chat Interface</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Infrastructure</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          <li>• Service Worker for offline</li>
                          <li>• Progressive Web App</li>
                          <li>• Error monitoring & logging</li>
                          <li>• Performance optimization</li>
                          <li>• Security best practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Architecture Overview</h3>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                            <Smartphone className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Client-Side Architecture</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              React-based SPA with component-driven architecture, state management, and responsive design
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                            <Database className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">AI Processing Layer</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              Natural language understanding, legal knowledge retrieval, and response generation
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                            <Shield className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Security & Privacy</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              End-to-end encryption, secure API communication, and privacy-first design
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Development Approach & Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Development Methodology</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Agile Development:</strong> Iterative development with regular testing</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Component-Driven:</strong> Reusable, modular React components</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>TypeScript First:</strong> Type safety and better developer experience</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Mobile-First:</strong> Responsive design for all devices</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quality Assurance</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Error Boundaries:</strong> Graceful error handling and recovery</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Accessibility:</strong> WCAG 2.1 compliance and screen reader support</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Performance:</strong> Code splitting and lazy loading</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Testing:</strong> Unit tests and integration testing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI Training & Legal Accuracy</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Training Data</h4>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Indian Constitution and amendments</li>
                            <li>• All major legal acts (IPC, CrPC, CPC, etc.)</li>
                            <li>• Supreme Court and High Court judgments</li>
                            <li>• Legal commentaries and expert analysis</li>
                            <li>• Regular updates with new laws and judgments</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Validation Process</h4>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Expert legal review of AI responses</li>
                            <li>• Continuous accuracy monitoring</li>
                            <li>• User feedback integration</li>
                            <li>• Regular model updates and improvements</li>
                            <li>• Cross-verification with legal databases</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Future Scope & Roadmap */}
              <section id="roadmap" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <Roadmap className="w-8 h-8 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Future Scope & Roadmap</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Planned Features & Enhancements</h3>
                    <div className="space-y-6">
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">Q2</div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">2025 Q2 - Enhanced AI Capabilities</h4>
                        </div>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Voice Input/Output:</strong> Ask questions using voice and receive audio responses</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Document Analysis:</strong> Upload legal documents for AI analysis and summary</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Case Law Search:</strong> Advanced search through Indian case law database</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Legal Form Generator:</strong> AI-powered legal document templates</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">Q3</div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">2025 Q3 - User Experience & Collaboration</h4>
                        </div>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>User Profiles:</strong> Personalized experience with saved queries and preferences</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Collaboration Tools:</strong> Share legal research with colleagues and teams</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Mobile App:</strong> Native iOS and Android applications</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Expert Network:</strong> Connect with verified legal professionals</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">Q4</div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">2025 Q4 - Advanced Features & Integration</h4>
                        </div>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span><strong>API Access:</strong> Developer API for third-party integrations</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Predictive Analytics:</strong> Case outcome predictions and legal trend analysis</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Blockchain Integration:</strong> Secure document verification and timestamps</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Multi-jurisdiction Support:</strong> Expand to other legal systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Long-term Vision & Goals</h3>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                            <Target className="w-5 h-5 text-blue-600" />
                            <span>2026-2027 Vision</span>
                          </h4>
                          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Become the primary legal AI assistant for India</li>
                            <li>• Serve 1 million+ users across all demographics</li>
                            <li>• Partner with law schools and legal institutions</li>
                            <li>• Expand to cover international law aspects</li>
                            <li>• Develop specialized AI for different legal domains</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                            <Globe className="w-5 h-5 text-green-600" />
                            <span>Global Impact Goals</span>
                          </h4>
                          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Bridge the justice gap in underserved communities</li>
                            <li>• Reduce legal consultation costs by 70%</li>
                            <li>• Improve legal literacy across India</li>
                            <li>• Support pro bono legal services</li>
                            <li>• Contribute to legal system digitization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Timeline for Upcoming Releases</h3>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                      <div className="space-y-6">
                        {[
                          { date: 'March 2026', title: 'Voice Interface Beta', status: 'upcoming' },
                          { date: 'June 2026', title: 'Document Analysis Feature', status: 'upcoming' },
                          { date: 'September 2026', title: 'Mobile App Launch', status: 'upcoming' },
                          { date: 'December 2026', title: 'API Platform Release', status: 'planned' },
                          { date: 'Q2 2027', title: 'International Expansion', status: 'planned' }
                        ].map((milestone, index) => (
                          <div key={index} className="relative flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                              milestone.status === 'upcoming' ? 'bg-blue-600' : 'bg-gray-400'
                            }`}>
                              {index + 1}
                            </div>
                            <div className="flex-1 bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{milestone.title}</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.date}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  milestone.status === 'upcoming' 
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'
                                }`}>
                                  {milestone.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
                      <p className="mb-4">
                        Follow our development progress and be the first to know about new features and updates.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link 
                          to="/signup" 
                          className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        >
                          Join Our Community
                        </Link>
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer Section */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Need More Help?</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have questions not covered in this documentation, we're here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Support
                  </Link>
                  <Link 
                    to="/" 
                    className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  >
                    Try LegalAI Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}