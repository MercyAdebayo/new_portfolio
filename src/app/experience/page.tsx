interface Experience {
  title: string
  company: string
  period: string
  bullets: string[]
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'DataAnnotation',
    period: 'Jan 2024 – Dec 2024',
    bullets: [
      'Built and deployed LLM fine-tuning pipelines and REST APIs with Python, Node.js, and C# for AI-driven automation.',
      'Implemented agentic and RAG systems using OpenAI APIs for intelligent chatbot and summarization features.',
      'Deployed FastAPI services on AWS with Docker and Lambda, integrating CI/CD pipelines for scalable delivery.',
    ],
  },
  {
    title: 'Full Stack Developer (Freelance)',
    company: 'Self-Employed',
    period: 'May 2023 – Present',
    bullets: [
      'Developed AI-enabled dashboards and real-time analytics tools with React, Spring Boot, and Azure.',
      'Built full-stack OCR + ETL systems for document classification, AI search, and microservices migration.',
      'Integrated Docker, Kubernetes, and observability tools to deliver production-grade systems.',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'Binasoftech IT Solutions',
    period: 'Dec 2021 – Nov 2022',
    bullets: [
      'Engineered financial web apps using Spring Boot microservices and React.js with Material UI.',
      'Integrated REST and GraphQL APIs, improving frontend/backend communication and delivery speed.',
      'Optimized MySQL and MongoDB data models for scalability and reduced latency.',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Experience</h1>
      <p className="text-lg">Roles I've held delivering AI-enabled, full-stack solutions at scale.</p>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="border-l-4 border-blue-600 pl-4">
            <h2 className="text-xl font-semibold">{exp.title}</h2>
            <p className="text-sm text-gray-500">
              {exp.company} • {exp.period}
            </p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              {exp.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
