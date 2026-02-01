import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageSquare, Phone, Clock, Send, CheckCircle, AlertCircle, Info, HelpCircle } from 'lucide-react';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    priority: 'medium',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        category: '',
        priority: 'medium',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'support@legalai.com',
      responseTime: '24-48 hours',
      color: 'blue'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our AI assistant',
      contact: 'Available 24/7',
      responseTime: 'Instant',
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+91 98765 43210',
      responseTime: 'Business hours',
      color: 'purple'
    }
  ];

  const commonIssues = [
    {
      title: 'Account Issues',
      description: 'Problems with login, registration, or account settings',
      icon: AlertCircle,
      color: 'red'
    },
    {
      title: 'Technical Problems',
      description: 'Website not loading, errors, or performance issues',
      icon: HelpCircle,
      color: 'orange'
    },
    {
      title: 'AI Responses',
      description: 'Questions about AI accuracy or response quality',
      icon: MessageSquare,
      color: 'blue'
    },
    {
      title: 'General Inquiries',
      description: 'Questions about features, pricing, or partnerships',
      icon: Info,
      color: 'green'
    }
  ];

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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Support Center</h1>
              <p className="text-gray-600 dark:text-gray-400">Get help and support for LegalAI</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Support Channels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">How can we help you?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${
                  channel.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  channel.color === 'green' ? 'from-green-500 to-green-600' :
                  'from-purple-500 to-purple-600'
                } w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{channel.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{channel.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact:</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">{channel.contact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{channel.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-300 text-sm">Your message has been sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="text-red-700 dark:text-red-300 text-sm">There was an error sending your message. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="account">Account Issues</option>
                    <option value="technical">Technical Problems</option>
                    <option value="ai-responses">AI Responses</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Please provide detailed information about your issue..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Common Issues & Resources */}
          <div className="space-y-8">
            {/* Common Issues */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Common Issues</h2>
              <div className="space-y-4">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      issue.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                      issue.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                      issue.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                      'bg-green-100 dark:bg-green-900/30'
                    }`}>
                      <issue.icon className={`w-5 h-5 ${
                        issue.color === 'red' ? 'text-red-600 dark:text-red-400' :
                        issue.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                        issue.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        'text-green-600 dark:text-green-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{issue.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{issue.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Resources</h2>
              <div className="space-y-3">
                <Link 
                  to="/faq"
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">FAQ</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Find answers to frequently asked questions</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                  </div>
                </Link>

                <Link 
                  to="/user-guide"
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">User Guide</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Learn how to use LegalAI effectively</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                  </div>
                </Link>

                <Link 
                  to="/api-reference"
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">API Documentation</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Technical documentation for developers</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Need immediate help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">support@legalai.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Mon-Fri, 9 AM - 6 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}