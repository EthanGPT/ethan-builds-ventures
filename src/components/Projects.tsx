import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import greenPipsPreview from "@/assets/greenpips-preview.jpg";
import marketingToolPreview from "@/assets/marketing-tool-preview.jpg";
import clustrPreview from "@/assets/clustr-preview.jpg";

interface Project {
  title: string;
  description: string;
  role: string;
  stack: string[];
  image: string;
  link?: string;
  github?: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Green Pips Trading",
    description: "Prop-firm-style fintech startup delivering gamified demo trading challenges with cash rewards. Built from the ground up with full backend operations and tournament infrastructure.",
    role: "Founder & CEO",
    stack: ["React", "TypeScript", "Supabase", "MetaTrader 5 API", "Node.js"],
    image: greenPipsPreview,
    highlights: [
      "Designed proprietary challenge model with tiered risk-reward structures",
      "MetaTrader 5 integration for automated account creation and equity tracking",
      "Built team: CTO, CMO, developers",
      "5-year financial forecast with sustainable cash flow",
      "Referral system, tournaments, and email automation"
    ]
  },
  {
    title: "Internal Marketing Tool",
    description: "ML-powered lead generation system for Green Pips team. Scrapes X, Reddit, and other platforms to identify frustrated traders, learns from rejected leads, auto-replies, and tracks team performance.",
    role: "Solo Developer",
    stack: ["Python", "Machine Learning", "Web Scraping", "APIs", "React"],
    image: marketingToolPreview,
    highlights: [
      "Multi-platform scraping (X, Reddit, etc.)",
      "ML model learns from rejected leads to improve quality",
      "In-platform auto-reply functionality",
      "Team leaderboard for outreach performance",
      "Continuous high-quality lead generation"
    ]
  },
  {
    title: "Clustr",
    description: "B2C/B2B trade analytics platform that ingests CSV trading data and produces ML-powered insights. Helps traders understand performance patterns and optimize strategies.",
    role: "Founder & Developer",
    stack: ["React", "TypeScript", "Machine Learning", "Data Visualization", "Python"],
    image: clustrPreview,
    highlights: [
      "CSV data ingestion and processing",
      "ML-powered trading insights and pattern recognition",
      "Interactive data visualization",
      "B2C and B2B market positioning",
      "Performance analytics and strategy optimization"
    ]
  },
  {
    title: "Trading Simulator",
    description: "Interactive trading setup simulator (think Tinder for trading setups) adopted by 7,000+ users. Gamifies trading education and pattern recognition.",
    role: "Solo Developer",
    stack: ["React", "TypeScript", "Web APIs"],
    image: "",
    highlights: [
      "7,000+ active users",
      "Gamified learning experience",
      "Pattern recognition training",
      "Built and deployed independently"
    ]
  },
  {
    title: "Personalized Trading Advisor",
    description: "Full-stack day trading advisor platform with auth, storage, and RLS policies. Complete lifecycle from concept to deployment.",
    role: "Solo Full-Stack Developer",
    stack: ["TypeScript", "React", "Supabase", "RLS Policies"],
    image: "",
    highlights: [
      "Full authentication system",
      "Row-level security implementation",
      "Front-end and back-end development",
      "Solo full lifecycle delivery"
    ]
  },
  {
    title: "Freely App",
    description: "React Native mobile app designed to make people feel safe walking alone. Features SMS notifications and GPS tracking.",
    role: "Solo Mobile Developer",
    stack: ["React Native", "SMS APIs", "GPS Tracking", "Mobile Dev"],
    image: "",
    highlights: [
      "Cross-platform mobile development",
      "Real-time GPS tracking",
      "SMS notification system",
      "Safety-focused user experience"
    ]
  },
  {
    title: "LLM Chatbot for Green Pips",
    description: "End-to-end LLM setup trained on Green Pips FAQs. Self-hosted on Hetzner with API integration into custom chatbot interface.",
    role: "Solo Developer",
    stack: ["Llama", "Hetzner", "APIs", "Python"],
    image: "",
    highlights: [
      "Custom LLM training on company FAQs",
      "Self-hosted infrastructure",
      "API backend integration",
      "Production chatbot deployment"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects & Builds
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building technical solutions across fintech, trading, and automation
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border overflow-hidden hover:shadow-card transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Image */}
                {project.image && (
                  <div className="relative overflow-hidden rounded-lg bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className={project.image ? "" : "md:col-span-2"}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {project.role}
                  </Badge>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className="border-border text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
