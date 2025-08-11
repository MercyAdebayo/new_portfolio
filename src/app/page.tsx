'use client';

import { ArrowRight, Mail, Download, Github, Linkedin, ExternalLink, Code2, Briefcase, User, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import {
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiOpenai,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiGraphql,
  SiRedis,
  SiPostman,
  SiFlask,
  SiFastapi,
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiNextdotjs,
  SiVercel,
  SiDjango,
  SiGooglecloud,
  SiGit,
  SiGithubactions,
  SiGitlab,
  SiBitbucket,
  SiApacheairflow,
  SiApachespark,
  SiMysql,
  SiAmazonwebservices,
} from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  repo?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'AI Interview Coach Simulator',
    description: 'Voice-driven mock interview tool using STT–LLM–TTS pipeline. Features real-time feedback, job-aware questions, avatar integration, and natural conversation flow with advanced AI capabilities.',
    stack: ['Next.js', 'FastAPI', 'LiveKit', 'OpenAI GPT-4o', 'Deepgram', 'ElevenLabs', 'Tavus'],
    image: '/ai_interview_coach.png',
    repo: 'https://github.com/MercyAdebayo/ai-interview-coach',
    featured: true,
  },
  {
    title: 'LLM Document Classifier + AI Search',
    description: 'Built a full-stack OCR + ETL pipeline with RAG capabilities for smart document classification and semantic retrieval. Processes complex documents with high accuracy.',
    stack: ['FastAPI', 'OpenAI', 'LangChain', 'React', 'Azure', 'PostgreSQL'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/llm-doc-pipeline',
    featured: true,
  },
  {
    title: 'Synthetic Data Platform for Marketing Analytics',
    description: 'Engineered a synthetic data generator for testing ML models under differential privacy constraints. Enables safe testing of marketing algorithms with realistic data.',
    stack: ['Python', 'Pandas', 'Streamlit', 'Scikit-learn', 'FastAPI'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/synthetic-data-platform',
    featured: true,
  },
  {
    title: 'Hybrid Recommender System with Spark + FastAPI',
    description: 'Built a personalized movie recommender system using collaborative and content-based filtering with Spark MLlib and FastAPI. Handles large-scale data processing efficiently.',
    stack: ['PySpark', 'FastAPI', 'Spark MLlib', 'Airflow', 'Redis'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/hybrid-recommender',
    featured: true,
  },
  {
    title: 'Medical Imaging Classification Platform',
    description: 'Advanced imaging platform using transfer learning and TensorFlow for medical classification. Achieves high accuracy in diagnostic image analysis with explainable AI features.',
    stack: ['Python', 'Next.js', 'TensorFlow', 'Transfer Learning', 'Streamlit', 'Docker'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/medical-imaging-platform',
    featured: true,
  },
  {
    title: 'Microservices API Gateway',
    description: 'Scalable API gateway with service discovery, load balancing, authentication, and monitoring. Built for high-throughput enterprise applications.',
    stack: ['Spring Boot', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'Message Queue'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/microservices-gateway',
  },
  {
    title: 'MLOps Pipeline for Predictive Analytics',
    description: 'End-to-end MLOps pipeline with automated model training, validation, deployment, and monitoring. Includes A/B testing and model versioning.',
    stack: ['Python', 'MLflow', 'Airflow', 'Docker', 'Kubernetes', 'AWS'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/mlops-pipeline',
  },
  {
    title: 'AI-Powered E-commerce Platform',
    description: 'Full-stack e-commerce platform with AI-driven product recommendations, dynamic pricing, and intelligent inventory management.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI', 'Stripe', 'AWS'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/ai-ecommerce-platform',
  },
];

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DA8CEA]/20 via-transparent to-blue-500/10 dark:from-[#DA8CEA]/30 dark:to-blue-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,140,234,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Profile Image */}
            <div className="flex-1 max-w-md lg:order-2">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DA8CEA] to-pink-400 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900 relative">
                    <Image
                      src="/Mercy.jpg"
                      alt="Mercy Adebayo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#DA8CEA] rounded-full flex items-center justify-center animate-bounce">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 max-w-2xl text-center lg:text-left lg:order-1">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Open to Opportunities</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="text-zinc-900 dark:text-white">Hi, I'm </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA8CEA] to-pink-400">
                      Mercy
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
                    Full Stack Engineer · AI Developer · Cloud-Native Builder
                  </p>
                </div>

                <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
                  I build scalable, secure web applications and integrate AI to solve complex real-world problems. 
                  Skilled in React, Node.js, Spring Boot, AWS, LLMs, and production-grade MLOps.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#DA8CEA] text-white rounded-xl hover:bg-[#c06be0] transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
                  >
                    View Projects <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center gap-2 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Get in Touch <Mail size={18} />
                  </button>

                  <a
                    href="/Mercy_Adebayo.pdf"
                    download
                    className="inline-flex items-center gap-2 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Download Resume <Download size={18} />
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 pt-6 justify-center lg:justify-start">
                  <a
                    href="https://github.com/MercyAdebayo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#DA8CEA] hover:bg-[#DA8CEA]/10 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mercyadebayo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#DA8CEA] hover:bg-[#DA8CEA]/10 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DA8CEA]/10 text-[#DA8CEA] rounded-full mb-4">
              <User size={16} />
              <span className="text-sm font-medium">About Me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Passionate About Building the Future
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              With expertise spanning full-stack development, AI/ML, and cloud architecture, 
              I create solutions that bridge the gap between cutting-edge technology and real-world impact.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {[
                { icon: SiReact, name: 'React', color: '#61DAFB' },
                { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
                { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
                { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
                { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
                { icon: SiPython, name: 'Python', color: '#3776AB' },
                { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
                { icon: SiFlask, name: 'Flask', color: '#000000' },
                { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
                { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
                { icon: SiRedis, name: 'Redis', color: '#DC382D' },
                { icon: SiDocker, name: 'Docker', color: '#2496ED' },
                { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
                { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
                { icon: SiGooglecloud, name: 'GCP', color: '#4285F4' },
                { icon: SiOpenai, name: 'OpenAI', color: '#412991' },
                { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
                { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
                { icon: SiApachespark, name: 'Spark', color: '#E25A1C' },
                { icon: SiApacheairflow, name: 'Airflow', color: '#017CEE' },
                { icon: SiGraphql, name: 'GraphQL', color: '#E10098' },
                { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
                { icon: SiGit, name: 'Git', color: '#F05032' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 bg-white dark:bg-zinc-800 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-[#DA8CEA] hover:bg-[#DA8CEA]/5 transition-all duration-300 group"
                >
                  <tech.icon className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: tech.color }} />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DA8CEA]/10 text-[#DA8CEA] rounded-full mb-4">
              <Briefcase size={16} />
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              A showcase of my work in AI, full-stack development, and cloud architecture
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.title}
                className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#DA8CEA] hover:text-[#c06be0] font-medium transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#DA8CEA] hover:text-[#c06be0] font-medium transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-1 text-zinc-500 text-xs">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#DA8CEA] hover:text-[#c06be0] font-medium text-sm transition-colors"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DA8CEA]/10 text-[#DA8CEA] rounded-full mb-4">
              <MessageCircle size={16} />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DA8CEA] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DA8CEA] focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DA8CEA] focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DA8CEA] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#DA8CEA] text-white px-8 py-4 rounded-xl hover:bg-[#c06be0] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg font-medium text-lg"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
                <a
                  href="mailto:mercy@example.com"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-[#DA8CEA] transition-colors"
                >
                  <Mail size={18} />
                  mercy.a.adebayo@gmail.com
                </a>
                <a
                  href="https://github.com/MercyAdebayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-[#DA8CEA] transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mercyadebayo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-[#DA8CEA] transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
