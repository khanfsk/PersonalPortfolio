'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Sparkles, Terminal, Award } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMouseVelocity({
        x: e.clientX - lastX,
        y: e.clientY - lastY
      });
      lastX = e.clientX;
      lastY = e.clientY;
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Serial Allocation System",
      description: "Designed and deployed a global Serial Allocation System with Azure (SQL, App Services, Key Vault), enabling conflict-free assignment of 10,000+ serials per batch. Built with React (TypeScript) and C#/.NET, used by 50+ global users.",
      tech: ["React", "TypeScript", "C#", ".NET 8", "Azure SQL", "Azure App Services"],
      link: "#",
      gradient: "from-blue-400 to-cyan-600",
      year: "2025",
      company: "INOVA Geophysical"
    },
    {
      title: "Multimodal Mental Health Assistant",
      description: "Built a multimodal mental health assistant (text, audio, video) using OpenAI APIs that improved emotion detection by 20%. Applied transfer learning across modalities and deployed real-time support chatbot with inference-time safeguards.",
      tech: ["Python", "OpenAI API", "TensorFlow", "PyTorch", "Flask"],
      link: "#",
      gradient: "from-purple-400 to-pink-600",
      year: "2024-2025",
      company: "NUS Research"
    },
    {
      title: "Driver Behavior Classification System",
      description: "Led a team building a MobileNetV2 model reaching 95% accuracy for driver-behavior classification. Deployed via AWS (S3, EMR, Lambda, SageMaker) and reduced fleet alert response times by 30% with Streamlit monitoring interface.",
      tech: ["Python", "TensorFlow", "AWS S3", "SageMaker", "Lambda", "Streamlit"],
      link: "#",
      gradient: "from-orange-400 to-red-600",
      year: "2024",
      company: "NUS & AWS"
    },
    {
      title: "Sentio Mood Tracking App",
      description: "Led a team of 6 using Agile methodology to deliver a comprehensive mood tracking app with 1,000+ events recorded. Implemented real-time username validation reducing sign-up errors by 40%, with Firebase Auth/Firestore supporting 100+ profiles.",
      tech: ["Java", "Android", "Firebase", "Firestore", "Firebase Auth"],
      link: "#",
      gradient: "from-emerald-400 to-teal-600",
      year: "2025",
      company: "Personal Project"
    }
  ];

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "INOVA Geophysical",
      location: "Calgary, Alberta",
      period: "May 2025 – December 2025",
      highlights: [
        "Automated processing of 500+ daily SQLite QC files into GeoPackages using C#/.NET 8",
        "Built React (TypeScript) + C#/.NET web application used by 50+ global users",
        "Improved system reliability through real-time validation and increased unit-test coverage by 30%"
      ]
    },
    {
      title: "AI/ML Research Intern",
      company: "Remote Research FIRE Program, NUS",
      location: "Singapore (Remote)",
      period: "September 2024 – January 2025",
      highlights: [
        "Built multimodal mental health assistant improving emotion detection by 20%",
        "Applied transfer learning across modalities to increase robustness",
        "Deployed real-time support chatbot with inference-time safeguards"
      ]
    },
    {
      title: "Data Analytics/ML Summer Internship",
      company: "National University of Singapore (NUS) & AWS",
      location: "Singapore",
      period: "May 2024 – July 2024",
      highlights: [
        "Led team building MobileNetV2 model with 95% accuracy",
        "Deployed via AWS reducing fleet alert response times by 30%",
        "Worked cross-functionally to deliver Streamlit monitoring front end"
      ]
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "C", "C++", "C#", "TypeScript", "JavaScript", "SQL"],
    "AI/ML & Frameworks": ["TensorFlow", "PyTorch", "React", ".NET 8", "Flask", "NumPy", "Pandas"],
    "Cloud & DevOps": ["Azure", "AWS (S3, EMR, Lambda, SageMaker)", "GCP", "Docker", "Git", "Jira"]
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Grain Texture */}
      <div className="grain-overlay" />

      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen opacity-60 blur-md"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${1 + Math.abs(mouseVelocity.x + mouseVelocity.y) / 100})`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/20" />
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundImage: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(34, 211, 238, 0.15) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/60 border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="hidden sm:inline">FK</span>
          </div>
          <div className="flex gap-6 lg:gap-8 items-center">
            <a href="#about" className="hover:text-cyan-400 transition-colors text-sm tracking-wider font-medium">
              ABOUT
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors text-sm tracking-wider font-medium">
              EXPERIENCE
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors text-sm tracking-wider font-medium hidden sm:inline">
              PROJECTS
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors text-sm tracking-wider font-medium hidden sm:inline">
              SKILLS
            </a>
            <a 
              href="#contact" 
              className="bg-cyan-400 text-black px-5 py-2.5 hover:bg-cyan-300 transition-all font-semibold text-sm tracking-wide"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20" id="hero">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div 
              className="lg:col-span-7 space-y-8"
              style={{
                transform: `translateY(${scrollY * 0.15}px)`,
              }}
            >
              <div className="inline-block animate-fadeInUp">
                <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-[0.3em] mb-6 font-medium">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  OPEN TO OPPORTUNITIES
                </div>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter animate-fadeInUp">
                FARHAN
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block">
                  KHAN
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed font-light animate-fadeInUp">
                CS & AI Student at University of Alberta. Building intelligent systems with AI/ML, 
                cloud infrastructure, and full-stack development. Experienced in React, .NET, Azure, AWS, 
                and cutting-edge AI technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeInUp">
                <a 
                  href="#projects" 
                  className="group bg-cyan-400 text-black px-8 py-4 font-bold hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 tracking-wide"
                >
                  VIEW MY WORK
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <a 
                  href="/Farhan_KhanRes2.pdf" 
                  download
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 font-bold hover:bg-cyan-400 hover:text-black transition-all tracking-wide text-center"
                >
                  DOWNLOAD CV
                </a>
              </div>

              <div className="flex gap-6 pt-8 animate-fadeInUp">
                <a href="https://github.com/khanfsk" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/farhankhan-ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:fkhan3@ualberta.ca" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Code Block */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-3xl animate-pulse" />
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-cyan-400/20 p-8 font-mono text-sm overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                
                <div className="space-y-3 pt-8">
                  <div className="text-gray-600">// developer.config.ts</div>
                  <div className="text-cyan-400">export const developer = {"{"}</div>
                  <div className="pl-4 text-gray-300">
                    name: <span className="text-purple-400">"Farhan Khan"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    role: <span className="text-purple-400">"AI/ML Engineer"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    location: <span className="text-purple-400">"Edmonton, Alberta"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    school: <span className="text-purple-400">"University of Alberta"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    graduation: <span className="text-orange-400">"May 2027"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    specialties: <span className="text-blue-400">["AI/ML", "Cloud", "Full-Stack"]</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    passion: <span className="text-purple-400">"Building intelligent systems"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    sideQuest: <span className="text-purple-400">"Badminton #87 Alberta"</span>
                  </div>
                  <div className="text-cyan-400">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-bounce">
          <div className="text-xs text-gray-600 tracking-[0.3em] font-medium">SCROLL</div>
          <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 sticky top-32">
              <div className="text-xs tracking-[0.3em] text-cyan-400 font-medium">ABOUT ME</div>
              <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95]">
                Building the future
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mt-2">
                  with AI & code
                </span>
              </h2>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-gray-500 tracking-wide">INTERNSHIPS</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-cyan-400">#87</div>
                  <div className="text-sm text-gray-500 tracking-wide">ALBERTA BADMINTON</div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="flex items-start gap-3 p-4 bg-zinc-900/50 border border-cyan-400/20">
                <Award className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-cyan-400 mb-1">University of Alberta</div>
                  <div className="text-sm text-gray-400">BSc Computer Science & AI • Co-op Program</div>
                  <div className="text-xs text-gray-500 mt-1">Expected May 2027</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                I'm a Computer Science and AI student at the University of Alberta with a passion for building 
                intelligent systems that solve real-world problems. My journey spans AI/ML research, full-stack 
                development, and cloud infrastructure across international experiences.
              </p>
              <p>
                Most recently, I worked as a Software Developer Intern at INOVA Geophysical, where I built enterprise 
                systems using React, TypeScript, C#/.NET, and Azure, serving 50+ global users. I've also 
                conducted AI/ML research at NUS, built driver-behavior classification systems with AWS, and led 
                Agile teams delivering production applications.
              </p>
              <p>
                I believe in the convergence of elegant code, intelligent algorithms, and thoughtful design. 
                Whether it's deploying multimodal AI assistants, optimizing cloud infrastructure, or building 
                scalable web applications, I approach every challenge with curiosity and precision.
              </p>
              
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-white font-medium mb-4">Currently exploring:</p>
                <div className="flex flex-wrap gap-3">
                  {['Reinforcement Learning', 'Neural Networks', 'Visual Recognition', 'Cloud Architecture'].map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-zinc-900 border border-cyan-400/30 text-cyan-400 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 px-6 bg-zinc-950/50" id="experience">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="text-xs tracking-[0.3em] text-cyan-400 mb-6 font-medium">PROFESSIONAL JOURNEY</div>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">Work Experience</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative border-l-2 border-cyan-400/30 pl-8 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black" />
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-gray-400">
                      <span className="text-cyan-400 font-semibold">{exp.company}</span>
                      <span className="text-gray-600">•</span>
                      <span>{exp.location}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="text-xs tracking-[0.3em] text-cyan-400 mb-6 font-medium">SELECTED WORK</div>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">Featured Projects</h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-cyan-400/40 transition-all duration-700 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12">
                  {/* Year & Icon */}
                  <div className="lg:col-span-2 flex lg:flex-col items-start gap-4">
                    <Code2 className="w-10 h-10 text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                    <div>
                      <div className="text-sm text-gray-600 font-mono mb-1">{project.year}</div>
                      <div className="text-xs text-gray-700">{project.company}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold group-hover:text-cyan-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-1.5 bg-zinc-800/50 text-cyan-400 text-sm font-medium border border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <div className="lg:col-span-3 flex items-end lg:items-center lg:justify-end">
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-3 text-cyan-400 font-semibold hover:gap-4 transition-all group/link"
                    >
                      <span className="tracking-wide">VIEW DETAILS</span>
                      <ExternalLink className="w-5 h-5 group-hover/link:rotate-45 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-6 bg-zinc-950/50" id="skills">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-xs tracking-[0.3em] text-cyan-400 mb-6 font-medium">TECHNICAL EXPERTISE</div>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 group-hover:border-cyan-400/50 p-10 transition-all duration-500 h-full">
                  <h3 className="text-2xl font-bold mb-8 text-cyan-400 tracking-tight">{category}</h3>
                  <div className="space-y-4">
                    {items.map((skill, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors font-light text-lg"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rotate-45 group-hover:scale-125 transition-transform" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Also proficient in</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {['MongoDB', 'Matplotlib', 'NUnit', 'Moq', 'FluentAssertions', 'JUnit', 'SharePoint', 
                'Teams', 'Outlook', 'Excel', 'Visual Studio', 'SVN', 'Linux'].map((tech, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-gray-400 text-sm hover:border-cyan-400/30 hover:text-cyan-400 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6" id="contact">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div>
            <div className="text-xs tracking-[0.3em] text-cyan-400 mb-8 font-medium">LET'S CONNECT</div>
            <h2 className="text-5xl lg:text-8xl font-bold leading-[0.95] mb-10">
              Ready to build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mt-2">
                something amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, 
              or just chat about AI, tech, and badminton. Let's connect!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="mailto:fkhan3@ualberta.ca"
              className="group bg-cyan-400 text-black px-12 py-6 font-bold hover:bg-cyan-300 transition-all text-lg flex items-center justify-center gap-3 tracking-wide"
            >
              <Mail className="w-6 h-6" />
              SEND EMAIL
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="/Farhan_KhanRes2.pdf"
              download
              className="border-2 border-cyan-400 text-cyan-400 px-12 py-6 font-bold hover:bg-cyan-400 hover:text-black transition-all text-lg tracking-wide"
            >
              DOWNLOAD CV
            </a>
          </div>

          <div className="flex gap-10 justify-center pt-12">
            <a href="https://github.com/khanfsk" target="_blank" rel="noopener noreferrer" className="group">
              <Github className="w-8 h-8 text-gray-600 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
            </a>
            <a href="https://linkedin.com/in/farhankhan-ai" target="_blank" rel="noopener noreferrer" className="group">
              <Linkedin className="w-8 h-8 text-gray-600 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
            </a>
            <a href="mailto:fkhan3@ualberta.ca" className="group">
              <Mail className="w-8 h-8 text-gray-600 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-sm font-light">
              © 2025 Farhan Khan. Built with precision, deployed with passion.
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <span>Crafted with</span>
              <span className="text-cyan-400">React + Next.js + Tailwind</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
