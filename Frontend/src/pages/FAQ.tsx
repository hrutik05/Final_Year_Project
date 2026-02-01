import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, ChevronDown, ChevronUp, HelpCircle, MessageSquare, Shield, Users, Settings, BookOpen } from 'lucide-react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const categories = [
    { id: 'general', title: 'General', icon: HelpCircle },
    { id: 'usage', title: 'Using LegalAI', icon: MessageSquare },
    { id: 'account', title: 'Account & Billing', icon: Users },
    { id: 'privacy', title: 'Privacy & Security', icon: Shield },
    { id: 'technical', title: 'Technical', icon: Settings },
    { id: 'legal', title: 'Legal Information', icon: BookOpen }
  ];

  const faqData = {
    general: [
      {
        id: 'what-is-legalai',
        question: 'What is LegalAI?',
        answer: 'LegalAI is an AI-powered legal assistant specifically designed for Indian laws. It provides instant answers to legal questions, proper citations, and guidance across various areas of Indian law including Constitutional, Criminal, Civil, Corporate, Family, Property, Labour, and Consumer law.'
      },
      {
        id: 'who-can-use',
        question: 'Who can use LegalAI?',
        answer: 'LegalAI is designed for law students, legal professionals, businesses, and the general public. Whether you\'re studying law, practicing as a lawyer, running a business, or just need legal information for personal use, LegalAI can help you understand Indian laws better.'
      },
      {
        id: 'is-it-free',
        question: 'Is LegalAI free to use?',
        answer: 'Yes, LegalAI offers a free tier that allows you to ask legal questions and get AI-powered responses. We also offer premium plans with additional features like unlimited queries, priority support, and advanced analytics.'
      },
      {
        id: 'accuracy',
        question: 'How accurate is the legal information provided?',
        answer: 'LegalAI maintains a 95%+ accuracy rate, validated by legal experts. However, it provides general legal information and should not replace professional legal advice. Always consult with a qualified lawyer for specific legal matters.'
      }
    ],
    usage: [
      {
        id: 'how-to-ask',
        question: 'How do I ask a legal question?',
        answer: 'Simply click the "Start Chat" button or scroll to the chat section on the homepage. Type your question in the chat box and press send. For best results, be specific and include relevant details like jurisdiction, legal area, or specific circumstances.'
      },
      {
        id: 'question-types',
        question: 'What types of questions can I ask?',
        answer: 'You can ask about any aspect of Indian law including specific sections of acts, procedures, rights, penalties, legal definitions, court processes, and general legal guidance. Avoid asking for personal legal advice about ongoing cases.'
      },
      {
        id: 'languages',
        question: 'What languages are supported?',
        answer: 'The interface supports 10+ Indian languages including Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Punjabi, and Urdu. However, legal responses are provided in English for accuracy, as legal terminology has specific meanings.'
      },
      {
        id: 'citations',
        question: 'Do responses include legal citations?',
        answer: 'Yes, every response includes proper legal citations and references to relevant acts, sections, case laws, and constitutional provisions. This helps you verify the information and conduct further research.'
      }
    ],
    account: [
      {
        id: 'create-account',
        question: 'Do I need to create an account?',
        answer: 'No, you can use LegalAI without creating an account. However, having an account provides benefits like saving chat history, personalized recommendations, priority support, and access to advanced features.'
      },
      {
        id: 'account-benefits',
        question: 'What are the benefits of having an account?',
        answer: 'Account holders get unlimited queries, chat history, personalized legal recommendations, priority customer support, usage analytics, and early access to new features.'
      },
      {
        id: 'forgot-password',
        question: 'I forgot my password. How can I reset it?',
        answer: 'Click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to reset your password. Check your spam folder if you don\'t receive the email within a few minutes.'
      },
      {
        id: 'delete-account',
        question: 'How can I delete my account?',
        answer: 'You can delete your account by going to Account Settings and clicking "Delete Account". This will permanently remove all your data including chat history. This action cannot be undone.'
      }
    ],
    privacy: [
      {
        id: 'data-privacy',
        question: 'How is my data protected?',
        answer: 'We use industry-standard encryption to protect your data. Your conversations are encrypted in transit and at rest. We don\'t share your personal information with third parties without your consent.'
      },
      {
        id: 'chat-history',
        question: 'Is my chat history saved?',
        answer: 'Chat history is only saved if you have an account and choose to save it. You can delete your chat history at any time from your account settings. Anonymous users\' chats are not stored.'
      },
      {
        id: 'data-usage',
        question: 'How is my data used?',
        answer: 'We use your data to provide legal assistance, improve our AI models, and enhance user experience. We don\'t use your personal legal queries for marketing purposes or share them with third parties.'
      },
      {
        id: 'gdpr-compliance',
        question: 'Are you GDPR compliant?',
        answer: 'Yes, we comply with GDPR and other privacy regulations. You have the right to access, modify, or delete your personal data. Contact our support team for any privacy-related requests.'
      }
    ],
    technical: [
      {
        id: 'browser-support',
        question: 'Which browsers are supported?',
        answer: 'LegalAI works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience.'
      },
      {
        id: 'mobile-app',
        question: 'Is there a mobile app?',
        answer: 'Currently, LegalAI is available as a web application that works perfectly on mobile browsers. A dedicated mobile app is planned for future release.'
      },
      {
        id: 'offline-access',
        question: 'Can I use LegalAI offline?',
        answer: 'LegalAI requires an internet connection to function as it relies on our AI servers to process queries. However, the website has offline capabilities for basic navigation when you lose connection.'
      },
      {
        id: 'api-access',
        question: 'Do you provide API access?',
        answer: 'Yes, we offer API access for developers and businesses who want to integrate LegalAI into their applications. Contact us for API documentation and pricing.'
      }
    ],
    legal: [
      {
        id: 'legal-advice',
        question: 'Does LegalAI provide legal advice?',
        answer: 'No, LegalAI provides general legal information and guidance, not personalized legal advice. It should not be used as a substitute for consulting with a qualified lawyer for specific legal matters.'
      },
      {
        id: 'court-representation',
        question: 'Can LegalAI help with court cases?',
        answer: 'LegalAI can provide general information about court procedures, legal provisions, and processes. However, it cannot provide specific advice about ongoing cases or represent you in court. Always consult a lawyer for court matters.'
      },
      {
        id: 'legal-updates',
        question: 'How often is legal information updated?',
        answer: 'Our legal database is continuously updated with new laws, amendments, and significant court judgments. However, there may be a delay in incorporating very recent changes. Always verify current legal status for critical matters.'
      },
      {
        id: 'jurisdiction',
        question: 'Which jurisdictions are covered?',
        answer: 'LegalAI covers Indian federal laws and general state laws. For state-specific matters, mention your state in the query. We\'re continuously expanding coverage of state-specific laws and regulations.'
      }
    ]
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredFAQs = faqData[activeCategory as keyof typeof faqData].filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h1>
              <p className="text-gray-600 dark:text-gray-400">Find answers to common questions about LegalAI</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm">{category.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                    {categories.find(cat => cat.id === activeCategory)?.icon && (
                      React.createElement(categories.find(cat => cat.id === activeCategory)!.icon, {
                        className: "w-6 h-6 text-white"
                      })
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {categories.find(cat => cat.id === activeCategory)?.title}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-8">
                    <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">No FAQs found matching your search.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((item) => (
                      <div key={item.id} className="border border-gray-200 dark:border-gray-600 rounded-lg">
                        <button
                          onClick={() => toggleExpanded(item.id)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white pr-4">{item.question}</h3>
                          {expandedItems.includes(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {expandedItems.includes(item.id) && (
                          <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-gray-600 dark:text-gray-300 pt-4 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Still have questions?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/support"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  Contact Support
                </Link>
                <Link 
                  to="/#chat"
                  className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center font-medium"
                >
                  Ask AI Assistant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}