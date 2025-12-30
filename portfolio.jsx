import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with predictive analytics and machine learning integration.",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      link: "#",
      gradient: "from-amber-400 to-orange-600"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "Social Media Automation Tool",
      description: "Cross-platform content scheduler with analytics tracking and AI-assisted caption generation.",
      tech: ["TypeScript", "React", "OpenAI API", "MongoDB"],
      link: "#",
      gradient: "from-pink-400 to-rose-600"
    },
    {
      title: "Blockchain Wallet App",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
      tech: ["React Native", "Web3.js", "Solidity", "Firebase"],
      link: "#",
      gradient: "from-emerald-400 to-teal-600"
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Three.js"],
    "Backend": ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"],
    "Tools & Cloud": ["Docker", "AWS", "Git", "CI/CD", "Vercel", "Figma"]
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-4 h-4 bg-amber-400 rounded-full pointer-events-none z-50 mix-blend-difference blur-sm"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-cyan-900/20" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/50 border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-amber-400">{"<"}</span>
            Portfolio
            <span className="text-amber-400">{"/>"}</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="hover:text-amber-400 transition-colors text-sm tracking-wide">ABOUT</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors text-sm tracking-wide">PROJECTS</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors text-sm tracking-wide">SKILLS</a>
            <a href="#contact" className="bg-amber-400 text-black px-6 py-2 hover:bg-amber-300 transition-all font-medium text-sm">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6" id="hero">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="space-y-8"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="inline-block">
              <div className="flex items-center gap-2 text-amber-400 text-sm tracking-widest mb-4 animate-pulse">
                <Sparkles className="w-4 h-4" />
                AVAILABLE FOR WORK
              </div>
            </div>
            
            <h1 className="text-7xl lg:text-8xl font-bold leading-none tracking-tighter">
              Creative
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Developer
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Crafting digital experiences at the intersection of design and code. 
              Specialized in building exceptional web applications that users love.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="group bg-amber-400 text-black px-8 py-4 font-semibold hover:bg-amber-300 transition-all flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="border-2 border-amber-400 text-amber-400 px-8 py-4 font-semibold hover:bg-amber-400 hover:text-black transition-all"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-6 pt-8">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-600 opacity-20 blur-3xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-amber-400/30 p-8 backdrop-blur-sm">
              <div className="space-y-4 font-mono text-sm">
                <div className="text-gray-500">// Creative Developer</div>
                <div className="text-amber-400">const developer = {"{"}</div>
                <div className="pl-4 text-gray-300">name: <span className="text-cyan-400">"Your Name"</span>,</div>
                <div className="pl-4 text-gray-300">role: <span className="text-cyan-400">"Full Stack Developer"</span>,</div>
                <div className="pl-4 text-gray-300">location: <span className="text-cyan-400">"Your City"</span>,</div>
                <div className="pl-4 text-gray-300">passion: <span className="text-cyan-400">"Building amazing things"</span>,</div>
                <div className="text-amber-400">{"}"}</div>
                <div className="pt-4 text-gray-500">// Let's create something extraordinary</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="text-xs text-gray-500 tracking-widest">SCROLL</div>
          <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-sm tracking-widest text-amber-400">ABOUT ME</div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Turning ideas into
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                  digital reality
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a keen eye for design and a love for clean, 
                efficient code. With several years of experience in web development, I specialize in 
                creating seamless user experiences and robust backend systems.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a constant desire to learn. 
                I believe in writing code that not only works but tells a story and solves real problems 
                for real people.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6 bg-zinc-950" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm tracking-widest text-amber-400 mb-4">SELECTED WORK</div>
            <h2 className="text-5xl lg:text-6xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <Code2 className="w-8 h-8 text-amber-400" />
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-zinc-800 text-amber-400 text-xs font-medium border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-amber-400 font-medium hover:gap-3 transition-all"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-6" id="skills">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm tracking-widest text-amber-400 mb-4">EXPERTISE</div>
            <h2 className="text-5xl lg:text-6xl font-bold">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className="relative group"
                style={{
                  animationDelay: `${idx * 0.15}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-zinc-900 border border-zinc-800 group-hover:border-amber-400/50 p-8 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-amber-400">{category}</h3>
                  <div className="space-y-3">
                    {items.map((skill, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-400 rotate-45" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6 bg-zinc-950" id="contact">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <div className="text-sm tracking-widest text-amber-400 mb-4">GET IN TOUCH</div>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Let's build something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                extraordinary together
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:your.email@example.com"
              className="group bg-amber-400 text-black px-10 py-5 font-semibold hover:bg-amber-300 transition-all text-lg flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Send an Email
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#"
              className="border-2 border-amber-400 text-amber-400 px-10 py-5 font-semibold hover:bg-amber-400 hover:text-black transition-all text-lg"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-8 justify-center pt-8">
            <a href="#" className="group">
              <Github className="w-8 h-8 text-gray-600 group-hover:text-amber-400 transition-colors" />
            </a>
            <a href="#" className="group">
              <Linkedin className="w-8 h-8 text-gray-600 group-hover:text-amber-400 transition-colors" />
            </a>
            <a href="#" className="group">
              <Mail className="w-8 h-8 text-gray-600 group-hover:text-amber-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2025 Your Name. Crafted with passion and code.
          </div>
          <div className="text-gray-500 text-sm">
            Built with React + Tailwind CSS • Deployed on Vercel
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
