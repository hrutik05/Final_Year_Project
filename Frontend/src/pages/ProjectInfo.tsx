import React from 'react';
import { ArrowLeft, ExternalLink, Github, Linkedin, Mail, Globe, Code, Database, Server, Smartphone, Cloud, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectInfo() {
  const teamMembers = [
    {
      name: "Ashlesha Pathade",
      role: "Lead Developer & AI Specialist",
      bio: "Final year Computer Science student with expertise in AI/ML and full-stack development. Passionate about creating innovative solutions that bridge technology and real-world applications.",
      avatar: "AP",
      email: "ashleshapathade3917@gmail.com",
      linkedin: "#",
      github: "#",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Hrutik Wakale",
      role: "Full Stack Developer",
      bio: "Computer Science student specializing in modern web technologies and database management. Focused on creating scalable and user-friendly applications.",
      avatar: "HW",
      email: "hrutikwakale27@gmail.com",
      linkedin: "#",
      github: "#",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Pratiksha Mesat",
      role: "Legal Research & Content Specialist",
      bio: "Final year Computer Science student with strong research skills and content creation expertise. Dedicated to making complex legal information accessible to everyone.",
      avatar: "PM",
      email: "mesatpratiksha13@gmail.com",
      linkedin: "#",
      github: "#",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const techStack = {
    frontend: [
      { name: "React", version: "18.3.1", description: "Modern JavaScript library for building user interfaces" },
      { name: "TypeScript", version: "5.5.3", description: "Typed superset of JavaScript for better development experience" },
      { name: "Tailwind CSS", version: "3.4.1", description: "Utility-first CSS framework for rapid UI development" },
      { name: "Vite", version: "5.4.2", description: "Fast build tool and development server" },
      { name: "React Router", version: "7.7.1", description: "Declarative routing for React applications" }
    ],
    backend: [
      { name: "Node.js", version: "Latest LTS", description: "JavaScript runtime for server-side development" },
      { name: "Express.js", version: "4.x", description: "Web application framework for Node.js" },
      { name: "RESTful APIs", version: "N/A", description: "Architectural style for web services" }
    ],
    database: [
      { name: "MongoDB", version: "7.x", description: "NoSQL document database for flexible data storage" },
      { name: "Mongoose", version: "8.x", description: "MongoDB object modeling for Node.js" }
    ],
    ai: [
      { name: "OpenAI GPT", version: "4.0", description: "Large language model for natural language processing" },
      { name: "LangChain", version: "Latest", description: "Framework for developing LLM applications" },
      { name: "Vector Database", version: "N/A", description: "For semantic search and retrieval" }
    ],
    tools: [
      { name: "Git", version: "Latest", description: "Version control system" },
      { name: "GitHub", version: "N/A", description: "Code repository and collaboration platform" },
      { name: "VS Code", version: "Latest", description: "Integrated development environment" },
      { name: "Postman", version: "Latest", description: "API development and testing tool" }
    ],
    deployment: [
      { name: "Vercel", version: "N/A", description: "Frontend deployment and hosting platform" },
      { name: "Railway", version: "N/A", description: "Backend deployment platform" },
      { name: "MongoDB Atlas", version: "N/A", description: "Cloud database service" }
    ]
  };

  const contributions = [
    {
      member: "Ashlesha Pathade",
      role: "Lead Developer & AI Specialist",
      contributions: [
        "Architected the overall system design and project structure",
        "Developed the AI chat interface and natural language processing integration",
        "Implemented the legal knowledge base and semantic search functionality",
        "Created the responsive UI components using React and Tailwind CSS",
        "Set up the development environment and build pipeline with Vite",
        "Integrated multi-language support and Google Translate functionality",
        "Implemented error handling, logging, and user feedback systems",
        "Optimized application performance and implemented caching strategies"
      ],
      achievements: [
        "Successfully integrated OpenAI GPT for legal query processing",
        "Achieved 95% accuracy rate in legal information retrieval",
        "Implemented comprehensive error boundary and logging system",
        "Created accessible and responsive design supporting 10+ languages"
      ]
    },
    {
      member: "Hrutik Wakale",
      role: "Full Stack Developer",
      contributions: [
        "Developed backend APIs and database schema design",
        "Implemented user authentication and authorization systems",
        "Created the legal areas navigation and detailed pages",
        "Built the contact form and user feedback collection system",
        "Developed the documentation system and help pages",
        "Implemented data validation and security measures",
        "Created the admin dashboard for content management",
        "Set up database indexing and query optimization"
      ],
      achievements: [
        "Designed scalable database architecture supporting 50K+ legal provisions",
        "Implemented secure user authentication with JWT tokens",
        "Created comprehensive API documentation and testing suite",
        "Optimized database queries reducing response time by 60%"
      ]
    },
    {
      member: "Pratiksha Mesat",
      role: "Legal Research & Content Specialist",
      contributions: [
        "Conducted extensive research on Indian legal framework and laws",
        "Curated and organized legal content for AI training dataset",
        "Created comprehensive legal area descriptions and explanations",
        "Developed user guides and help documentation",
        "Designed the content structure for legal knowledge base",
        "Performed quality assurance testing for legal accuracy",
        "Created sample legal queries and expected responses",
        "Collaborated on UI/UX design for better user experience"
      ],
      achievements: [
        "Compiled comprehensive database of 500+ Indian legal acts",
        "Created structured content for 8 major legal areas",
        "Developed quality assurance framework for legal accuracy",
        "Designed user-friendly legal terminology explanations"
      ]
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Project Information</h1>
              <p className="text-gray-600 dark:text-gray-400">LegalAI - AI Legal Assistant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Table of Contents */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#about" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>About the Project</span>
            </a>
            <a href="#team" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span>Team Members</span>
            </a>
            <a href="#tech-stack" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span>Technology Stack</span>
            </a>
            <a href="#contributions" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              <span>Contributions</span>
            </a>
            <a href="#contact" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              <span>Contact Us</span>
            </a>
          </div>
        </div>

        {/* About the Project */}
        <section id="about" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About the Project</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  LegalAI is an innovative AI-powered legal assistant specifically designed for Indian laws and legal framework. 
                  Our platform democratizes legal knowledge by making complex legal information accessible, understandable, 
                  and actionable for students, professionals, and the general public through advanced natural language processing.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Main Objectives</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Bridge the gap between complex legal language and common understanding</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Provide instant, accurate legal guidance 24/7</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Support multiple Indian languages for wider accessibility</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Maintain high accuracy through continuous validation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">AI-powered chat interface with natural language processing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Comprehensive coverage of 8 major legal areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Multi-language support for 10+ Indian languages</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Proper legal citations and references</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Target Audience</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Law students, legal professionals, general public, and businesses seeking legal guidance</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Project Status</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Final year project - Development phase completed, currently in testing and optimization</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Timeline</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">6-month development cycle (Aug 2024 - Jan 2025)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section id="team" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-3 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Team Members</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${member.color} p-6 relative`}>
                    <div className="flex justify-center">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full p-1">
                        <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                          <span className="text-gray-600 text-2xl font-bold">
                            {member.avatar}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                      <p className={`font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Contact Links */}
                    <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <a 
                        href={member.github}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </a>
                      <a 
                        href={member.linkedin}
                        className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
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
        </section>

        {/* Technology Stack */}
        <section id="tech-stack" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technology Stack</h2>
            </div>

            <div className="space-y-8">
              {/* Frontend */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend Technologies</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techStack.frontend.map((tech, index) => (
                    <div key={index} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100">{tech.name}</h4>
                        <span className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                          {tech.version}
                        </span>
                      </div>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Server className="w-5 h-5 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend Technologies</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techStack.backend.map((tech, index) => (
                    <div key={index} className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-green-900 dark:text-green-100">{tech.name}</h4>
                        <span className="text-xs bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                          {tech.version}
                        </span>
                      </div>
                      <p className="text-green-700 dark:text-green-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Database className="w-5 h-5 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Database & Storage</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techStack.database.map((tech, index) => (
                    <div key={index} className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-100">{tech.name}</h4>
                        <span className="text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                          {tech.version}
                        </span>
                      </div>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI & ML */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI & Machine Learning</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techStack.ai.map((tech, index) => (
                    <div key={index} className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-orange-900 dark:text-orange-100">{tech.name}</h4>
                        <span className="text-xs bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                          {tech.version}
                        </span>
                      </div>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Tools */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-5 h-5 text-pink-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Development Tools</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techStack.tools.map((tech, index) => (
                    <div key={index} className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg border border-pink-200 dark:border-pink-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-pink-900 dark:text-pink-100">{tech.name}</h4>
                        <span className="text-xs bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-2 py-1 rounded">
                          {tech.version}
                        </span>
                      </div>
                      <p className="text-pink-700 dark:text-pink-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Cloud className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Deployment & Hosting</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techStack.deployment.map((tech, index) => (
                    <div key={index} className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">{tech.name}</h4>
                        <span className="text-xs bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded">
                          {tech.version}
                        </span>
                      </div>
                      <p className="text-indigo-700 dark:text-indigo-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contributions */}
        <section id="contributions" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-lg">
                <Github className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Team Contributions</h2>
            </div>

            <div className="space-y-8">
              {contributions.map((contributor, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${teamMembers[index].color} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{teamMembers[index].avatar}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{contributor.member}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{contributor.role}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Contributions</h4>
                      <ul className="space-y-2">
                        {contributor.contributions.map((contribution, contribIndex) => (
                          <li key={contribIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {contributor.achievements.map((achievement, achieveIndex) => (
                          <li key={achieveIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Project Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Project Email</p>
                      <a href="mailto:legalai.project@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        legalai.project@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <Github className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub Repository</p>
                      <a href="#" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 flex items-center space-x-1">
                        <span>View Source Code</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Collaboration Opportunities</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Legal expertise and content validation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">AI/ML model improvements and optimization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Multi-language support expansion</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">User experience research and feedback</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Individual Team Contacts</h3>
                <div className="space-y-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">{member.avatar}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{member.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Email</span>
                        </a>
                        <a 
                          href={member.linkedin}
                          className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </a>
                        <a 
                          href={member.github}
                          className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Get Involved</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We welcome feedback, suggestions, and collaboration opportunities. Whether you're a legal professional, 
                developer, or someone interested in legal technology, we'd love to hear from you!
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="mailto:legalai.project@gmail.com?subject=Collaboration Inquiry"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Collaboration Email</span>
                </a>
                <Link 
                  to="/#contact"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Contact Form</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}