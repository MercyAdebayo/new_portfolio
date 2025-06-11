'use client';

import { ArrowRight, Mail, Download, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
} from 'react-icons/si';

export default function HomePage() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Lavender background blur */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#DA8CEA]/30 to-transparent blur-3xl z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        {/* Static Profile Image */}
        <div className="flex-1 max-w-md">
          <div className="absolute top-0 left-0 w-84 h-84 mx-auto rounded-full overflow-hidden border-4 border-[#FFA500] shadow-lg">
            <Image
              src="/Mercy.jpg"
              alt="Mercy Adebayo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="flex-1 max-w-xl space-y-8 text-center md:text-left">
          <div className="space-y-3">
            <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA8CEA] to-pink-400">
                Mercy Adebayo
              </span>
            </h1>

            {/* Badge */}
            <p className="text-sm bg-emerald-500 text-white px-3 py-1 rounded-full inline-block shadow ring-2 ring-lavender animate-pulseadow">
              Open to Opportunities
            </p>
          </div>

          <p className="text-xl text-zinc-400">
            Full Stack Engineer · AI Developer · Cloud-Native Builder
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed max-w-xl">
            I build scalable, secure web applications and integrate AI to solve
            complex real-world problems. Skilled in React, Node.js, Spring Boot,
            AWS, LLMs, and production-grade MLOps.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#DA8CEA] text-white rounded-lg hover:bg-[#c06be0] transition-transform hover:scale-105 hover:shadow-md"
            >
              View Projects <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 border border-zinc-600 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-transform hover:scale-105"
            >
              Get in Touch <Mail size={16} />
            </Link>

            <a
              href="/Mercy_Adebayo.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-transform hover:scale-105"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-6 justify-center md:justify-start">
            
            <a
              href="https://github.com/MercyAdebayo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DA8CEA] transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/mercyadebayo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DA8CEA] transition"
            >
              <Linkedin />
            </a>
          </div>

          {/* Featured Stack */}
          <div className="pt-8">
            <h2 className="text-xl font-semibold text-zinc-300 mb-3">Tech Stack</h2>
            <p className="text-zinc-400 mb-4">
              Tools and technologies I use to design, build, and deploy intelligent full-stack applications.
            </p>
            <div className="flex flex-wrap gap-4 text-base font-medium text-zinc-200">
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiReact /> React
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiNodedotjs /> Node.js
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiSpringboot /> Spring Boot
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiTypescript /> TypeScript
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiTailwindcss /> Tailwind CSS
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiPostgresql /> PostgreSQL
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiOpenai /> LLMs
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiPython /> Python
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiDocker /> Docker
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiKubernetes /> Kubernetes
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiMongodb /> MongoDB
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiGraphql /> GraphQL
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiRedis /> Redis
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiPostman /> Postman
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiFlask /> Flask
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiFastapi /> FastAPI
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiJupyter /> Jupyter
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">     
                <SiTensorflow /> TensorFlow
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiPytorch /> PyTorch
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiScikitlearn /> Scikit-learn
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiKeras /> Keras
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiNextdotjs /> Next.js
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiVercel /> Vercel
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiDjango /> Django
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiGooglecloud /> GCP
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiGit /> Git
              </span>     
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiGithubactions /> GitHub Actions
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiGitlab /> GitLab
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiBitbucket /> Bitbucket   
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiApacheairflow /> Airflow
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiApachespark /> Spark
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full">
                <SiMysql /> MySQL
              </span> 

            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
