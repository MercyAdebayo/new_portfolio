# Mercy Adebayo - Portfolio Website

A modern, high-performance portfolio website built with Next.js 15, featuring dark/light mode toggle, single-page navigation, and comprehensive SEO optimization.

## ✨ Features

### 🎨 Design & UX
- **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **Single-Page Application** - Smooth scroll navigation between sections
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern Typography** - Enhanced readability and visual hierarchy
- **Smooth Animations** - Intersection Observer-based animations and micro-interactions

### 🚀 Performance
- **Next.js 15** - Latest React framework with App Router
- **Image Optimization** - WebP/AVIF formats with lazy loading
- **Code Splitting** - Optimized bundle sizes and loading
- **Intersection Observer** - Efficient scroll-based animations
- **Performance Headers** - Caching and compression optimizations

### 🔍 SEO & Accessibility
- **Comprehensive Meta Tags** - Open Graph, Twitter Cards, and more
- **Structured Data** - JSON-LD schema for better search visibility
- **Semantic HTML** - Proper heading hierarchy and landmarks
- **Focus Management** - Keyboard navigation and screen reader support
- **Web Vitals Optimized** - Fast loading and smooth interactions

### 🛠 Technical Stack
- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.8
- **Icons**: Lucide React + React Icons
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and theme variables
│   │   ├── layout.tsx           # Root layout with SEO and theme provider
│   │   └── page.tsx             # Main single-page application
│   ├── components/
│   │   ├── Footer.tsx           # Enhanced footer with social links
│   │   ├── Navbar.tsx           # Navigation with smooth scroll
│   │   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   │   ├── PerformanceOptimizer.tsx # Lazy loading components
│   │   └── StructuredData.tsx   # SEO structured data
│   └── contexts/
│       └── ThemeContext.tsx     # Theme management context
├── public/
│   ├── Mercy.jpg               # Profile image
│   └── [project-images]        # Project screenshots
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## 🎯 Featured Projects

The portfolio showcases 8 comprehensive projects:

1. **AI Interview Coach Simulator** - Voice-driven mock interview tool with real-time feedback
2. **LLM Document Classifier + AI Search** - OCR + ETL pipeline with RAG capabilities
3. **Synthetic Data Platform for Marketing Analytics** - Privacy-compliant data generation
4. **Hybrid Recommender System with Spark + FastAPI** - Large-scale recommendation engine
5. **Medical Imaging Classification Platform** - Transfer learning for medical diagnostics
6. **Microservices API Gateway** - Enterprise-grade service architecture
7. **MLOps Pipeline for Predictive Analytics** - End-to-end ML deployment pipeline
8. **AI-Powered E-commerce Platform** - Intelligent product recommendations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MercyAdebayo/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: mercy.a.adebayo@gmail.com
- **LinkedIn**: [linkedin.com/in/mercyadebayo](https://www.linkedin.com/in/mercyadebayo/)
- **GitHub**: [github.com/MercyAdebayo](https://github.com/MercyAdebayo)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
