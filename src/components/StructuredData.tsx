import Script from 'next/script';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mercy Adebayo",
  "jobTitle": "Full Stack Engineer",
  "description": "Full Stack Developer with expertise in AI, LLMs, machine learning, and scalable cloud-native systems.",
  "url": "https://mercyadebayo.dev",
  "sameAs": [
    "https://github.com/MercyAdebayo",
    "https://www.linkedin.com/in/mercyadebayo/"
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Spring Boot",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full Stack Engineer",
    "occupationLocation": {
      "@type": "Place",
      "name": "Remote"
    },
    "skills": [
      "Full Stack Development",
      "AI/ML Engineering",
      "Cloud Architecture",
      "DevOps",
      "System Design"
    ]
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  }
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mercy Adebayo Portfolio",
  "url": "https://mercyadebayo.dev",
  "description": "Portfolio website showcasing full-stack development and AI engineering projects",
  "author": {
    "@type": "Person",
    "name": "Mercy Adebayo"
  },
  "inLanguage": "en-US"
};

export default function StructuredData() {
  return (
    <>
      <Script
        id="person-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </>
  );
}
