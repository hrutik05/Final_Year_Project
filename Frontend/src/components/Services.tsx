import React from 'react';
import { Brain, Code, BarChart3, Cog, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic guidance to identify AI opportunities and implement solutions that drive business growth.",
    features: ["AI Strategy Development", "Use Case Identification", "ROI Analysis", "Implementation Planning"]
  },
  {
    icon: Code,
    title: "Custom AI Development",
    description: "Tailored AI solutions built specifically for your business needs and industry requirements.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    features: ["Data Mining", "Statistical Analysis", "Business Intelligence", "Real-time Dashboards"]
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that learns and adapts to your workflows.",
    features: ["Workflow Automation", "Document Processing", "Quality Assurance", "Performance Optimization"]
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Comprehensive data solutions from collection and storage to processing and governance.",
    features: ["Data Pipeline Design", "Cloud Migration", "Data Quality", "Compliance Management"]
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Protect your AI systems with robust security measures and ethical AI practices.",
    features: ["Model Security", "Data Privacy", "Bias Detection", "Audit & Compliance"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to implementation, we provide end-to-end AI solutions that transform how you do business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}