import Link from 'next/link'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  stack: string[]
  image: string
  repo?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'AI Interview Coach Simulator',
    description:
      'Real-time voice-based mock interview system with LLM feedback, Whisper transcription, and ElevenLabs voice synthesis.',
    stack: ['Next.js', 'LiveKit', 'OpenAI', 'Whisper', 'ElevenLabs'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/ai-interview-coach',
  },
  {
    title: 'LLM Document Classifier + AI Search',
    description:
      'Built a full-stack OCR + ETL pipeline with RAG capabilities for smart document classification and semantic retrieval.',
    stack: ['FastAPI', 'OpenAI', 'LangChain', 'React', 'Azure'],
    image: '/placeholder.jpg',
    repo: 'https://github.com/MercyAdebayo/llm-doc-pipeline',
  },
  {
    title: 'Real-Time Sentiment & Anomaly Detection',
    description:
      'Deployed event-driven microservices to detect anomalies in review streams with real-time dashboarding.',
    stack: ['Kafka', 'Spring Boot', 'React', 'PostgreSQL'],
    image: '/placeholder.jpg',
  },
  {
    title: 'Synthetic Data Platform for Marketing Analytics',
    description:
      'Engineered a synthetic data generator for testing ML models under differential privacy constraints.',
    stack: ['Python', 'Pandas', 'Streamlit', 'Scikit-learn'],
    image: '/placeholder.jpg',
  },
  {
    title: 'Hybrid Recommender System with Spark + FastAPI',
    description:
      'Built a personalized movie recommender system using collaborative and content-based filtering with Spark MLlib and FastAPI.',
    stack: ['PySpark', 'FastAPI', 'Yelp Dataset', 'Spark MLlib', 'Airflow'],
    image: '/placeholder.jpg',
  },
  {
    title: 'Data Pipeline for ETL Automation',
    description:
      'Designed a resilient ETL pipeline with Apache Airflow for data ingestion, transformation, and warehouse syncing.',
    stack: ['Airflow', 'PostgreSQL', 'Python', 'Docker'],
    image: '/placeholder.jpg',
  },
  {
    title: 'Developer Efficiency Dashboard',
    description:
      'CI/CD-driven dashboard leveraging GitHub API and automation.',
    stack: ['Node.js', 'Bash', 'React', 'GitHub API', 'CI/CD'],
    image: '/placeholder.jpg',
  },
  {
    title: 'Medical Imaging Classification Platform',
    description:
      'Imaging platform using transfer learning and TensorFlow for medical classification.',
    stack: ['Python', 'Next.js', 'TensorFlow', 'Transfer Learning', 'Streamlit'],
    image: '/placeholder.jpg',
  },
  {
    title: 'AI Resume Analyzer & Scorer',
    description:
      'Created a tool to parse and score resumes based on job descriptions using LLMs and semantic similarity.',
    stack: ['Python', 'OpenAI', 'FastAPI'],
    image: '/placeholder.jpg',
  },
  {
    title: 'Portfolio Website with Next.js & Tailwind',
    description:
      'Developed a responsive portfolio site showcasing technical skills and projects with modern animations.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/placeholder.jpg',
  },
]

export default function ProjectsPage() {
  return (
    <section className="relative max-w-6xl mx-auto py-16 px-4">
      {/* Lavender background hue */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#DA8CEA]/30 to-transparent blur-3xl z-0" />

      <h1 className="relative z-10 text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="relative z-10 grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow hover:shadow-xl hover:scale-[1.02] transition-transform duration-200"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-zinc-400">{project.description}</p>
              <p className="text-zinc-500 font-medium">Stack:</p>
              <div className="flex flex-wrap gap-2 text-sm text-zinc-300">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-zinc-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DA8CEA] hover:underline inline-block pt-1"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
