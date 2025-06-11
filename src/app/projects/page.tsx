import Link from 'next/link'

interface Project {
  title: string
  description: string
  stack: string[]
  repo?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'AI Interview Coach Simulator',
    description:
      'Real-time voice-based mock interview system with LLM feedback, Whisper transcription, and ElevenLabs voice synthesis.',
    stack: ['Next.js', 'LiveKit', 'OpenAI', 'Whisper', 'ElevenLabs'],
    repo: 'https://github.com/MercyAdebayo/ai-interview-coach',
  },
  {
    title: 'LLM Document Classifier + AI Search',
    description:
      'Built a full-stack OCR + ETL pipeline with RAG capabilities for smart document classification and semantic retrieval.',
    stack: ['FastAPI', 'OpenAI', 'LangChain', 'React', 'Azure'],
    repo: 'https://github.com/MercyAdebayo/llm-doc-pipeline',
  },
  {
    title: 'Real-Time Sentiment & Anomaly Detection',
    description:
      'Deployed event-driven microservices to detect anomalies in review streams with real-time dashboarding.',
    stack: ['Kafka', 'Spring Boot', 'React', 'PostgreSQL'],
  },
  {
    title: 'Synthetic Data Platform for Marketing Analytics',
    description:
      'Engineered a synthetic data generator for testing ML models under differential privacy constraints.',
    stack: ['Python', 'Pandas', 'Streamlit', 'Scikit-learn'],
  },
]

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-lg">A selection of full-stack and AI-driven solutions I've built and deployed.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm">{project.description}</p>
            <div className="mt-2 text-xs text-gray-500">
              Stack: {project.stack.join(', ')}
            </div>
            <div className="mt-4 flex space-x-4">
              {project.repo && (
                <Link
                  href={project.repo}
                  className="text-blue-600 underline text-sm"
                  target="_blank"
                >
                  GitHub
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  className="text-blue-600 underline text-sm"
                  target="_blank"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
