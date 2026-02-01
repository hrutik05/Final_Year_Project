import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about our AI legal assistant? Want to contribute to the project? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Whether you're a law student, legal professional, or someone interested in legal technology, 
              we welcome your feedback and suggestions to improve our AI assistant.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                  <div className="text-gray-600 dark:text-gray-300">legalai.project@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">WhatsApp</div>
                  <div className="text-gray-600 dark:text-gray-300">+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-100 to-green-200 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                  <div className="text-gray-600 dark:text-gray-300">Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Our Project</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-500 dark:placeholder-gray-400"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="feedback">Feedback on AI Assistant</option>
                  <option value="bug-report">Bug Report</option>
                  <option value="feature-request">Feature Request</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
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
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form> 
          </div>
        </div>
      </div>
    </section>
  );
}