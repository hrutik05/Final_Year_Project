import React from 'react';
import { Target, Users, Award, BookOpen, Code, Lightbulb, Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Ashlesha Pathade",
    role: "Lead Developer & AI Specialist",
    description: "Final year Computer Science student specializing in AI/ML and legal technology.",
    color: "from-blue-500 to-purple-600",
    icon: Code,
    responsibilities: [
      "Lead Developer & UI/UX Implementation",
      "AI Specialist", 
      "Database Architecture & Management",
      "Performance Optimization"
    ],
    skills: ["Machine Learning", "Natural Language Processing", "System Architecture"],
    social: {
      github: "#",
      linkedin: "#", 
      email: "ashleshapathade3917@gmail.com"
    }
  },
  {
    name: "Hrutik Wakale", 
    role: "Full Stack Developer",
    description: "Computer Science student focused on scalable systems and database management.",
    color: "from-green-500 to-teal-600",
    icon: BookOpen,
    responsibilities: [
      "Database Management",
      "API Development",
      "AI Tool Expert", 
      "Designing full Front end"
    ],
    skills: ["Tailwand.css", "React.js", "Computer Science", "Java"],
    social: {
      github: "#",
      linkedin: "#",
      email: "hrutikwakale27@gmail.com" 
    }
  },
  {
    name: "Pratiksha Mesat",
    role: "Legal Research & Content", 
    description: "Final year Computer Science student specializing in research.",
    color: "from-pink-500 to-rose-600",
    icon: Target,
    responsibilities: [
      "User Experience Design & Research",
      "Visual Design & Brand Identity",
      "Mobile App Interface Design",
      "Accessibility & Usability Testing"
    ],
    skills: ["Figma", "Legal Research", "Constitutional Law", "Criminal Law", "Content Writing"],
    social: {
      github: "#",
      linkedin: "#", 
      email: "mesatpratiksha13@gmail.com"
    }
  }
];

const projectStats = [
  { icon: BookOpen, value: '500+', label: 'Legal Documents Processed' },
  { icon: Code, value: '10K+', label: 'Lines of Code' },
  { icon: Users, value: '100+', label: 'Beta Testers' },
  { icon: Award, value: '95%', label: 'Accuracy Rate' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Our Project
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A final year project aimed at democratizing legal knowledge and making Indian laws accessible to everyone through AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              To bridge the gap between complex legal language and common understanding by creating an AI-powered 
              assistant that makes Indian laws accessible, understandable, and actionable for students, professionals, 
              and the general public.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Accessibility</h4>
                  <p className="text-gray-600 dark:text-gray-300">Making legal knowledge accessible to everyone, regardless of their legal background.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Innovation</h4>
                  <p className="text-gray-600 dark:text-gray-300">Leveraging cutting-edge AI technology to solve real-world legal challenges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Accuracy</h4>
                  <p className="text-gray-600 dark:text-gray-300">Ensuring high accuracy through continuous validation and expert review.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {projectStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                {/* Header with gradient background */}
                <div className={`bg-gradient-to-r ${member.color} p-6 relative`}>
                  <div className="absolute top-4 right-4">
                    <member.icon className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full p-1">
                      <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                        <span className="text-gray-600 text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h4>
                    <p className={`font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Key Responsibilities</h5>
                    <ul className="space-y-2">
                      {member.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.color} mt-1.5 mr-2 flex-shrink-0`}></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  {/* Skills & Expertise */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Skills & Expertise</h5>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${member.color}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href={member.social.github}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}