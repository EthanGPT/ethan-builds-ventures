import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight, Zap, TrendingUp, Shield, Users, Brain, Rocket } from "lucide-react";
import { useState } from "react";
import greenPipsPreview from "@/assets/greenpips-preview.jpg";
import marketingToolPreview from "@/assets/marketing-tool-preview.jpg";
import clustrPreview from "@/assets/clustr-preview.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  image: string;
  link?: string;
  github?: string;
  highlights: string[];
  icon: React.ComponentType<any>;
  gradient: string;
  status: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const mainProjects: Project[] = [
  {
    id: "greenpips",
    title: "Green Pips Trading",
    description: "Revolutionary prop-firm fintech startup with gamified trading challenges and instant cash rewards. Full-stack platform with MT5 integration and tournament infrastructure.",
    role: "Founder & CEO",
    stack: ["React", "TypeScript", "Supabase", "MetaTrader 5 API", "Node.js", "Stripe"],
    image: greenPipsPreview,
    link: "https://greenpipstrading.com",
    icon: TrendingUp,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    status: "",
    metrics: [
      { label: "Users", value: "12K+" },
      { label: "Challenges", value: "15+" },
      { label: "Payouts", value: "Coming Soon" }
    ],
    highlights: [
      "Proprietary challenge algorithm with dynamic risk management",
      "Real-time MetaTrader 5 API integration for live trading data",
      "Built and leading team of 8+ developers and marketers",
      "Automated tournament system with instant payouts",
      "Advanced referral engine with multi-tier rewards"
    ]
  },
  {
    id: "clustr",
    title: "Clustr Analytics",
    description: "AI-powered trading analytics platform that transforms raw CSV data into actionable insights. Advanced ML algorithms identify patterns and optimize trading performance.",
    role: "Founder & Technical Lead",
    stack: ["React", "TypeScript", "Python", "TensorFlow", "D3.js", "FastAPI"],
    image: clustrPreview,
    link: "https://clustr.uk",
    icon: Brain,
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    status: "",
    metrics: [
      { label: "Data Points", value: "50M+" },
      { label: "Accuracy", value: "94.7%" },
      { label: "Insights", value: "Real-time" }
    ],
    highlights: [
      "Advanced ML pattern recognition for trading strategies",
      "Real-time data visualization with interactive charts",
      "Automated performance optimization recommendations",
      "B2B enterprise dashboard with white-label options",
      "Multi-broker CSV format support and standardization"
    ]
  },
  {
    id: "freely",
    title: "Freely Safety App",
    description: "Next-gen mobile safety platform with real-time GPS tracking, emergency protocols, and community safety features. Revolutionizing personal security through technology.",
    role: "Solo Technical Founder",
    stack: ["React Native", "Node.js", "WebRTC", "GPS APIs", "Twilio", "Firebase"],
    image: "",
    link: "https://freelyapp.me",
    icon: Shield,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    status: "",
    metrics: [
      { label: "Response Time", value: "<30s" },
      { label: "Coverage", value: "Global" },
      { label: "Reliability", value: "99.9%" }
    ],
    highlights: [
      "Real-time GPS tracking with 5-meter precision",
      "Instant emergency contact system with automated alerts",
      "Community safety network with crowd-sourced data",
      "Advanced ML for threat detection and risk assessment",
      "Cross-platform mobile app with offline capabilities"
    ]
  },
];

const otherProjects: Project[] = [
  {
    id: "trading-simulator",
    title: "Trading Simulator",
    description: "Interactive trading setup simulator (think Tinder for trading setups) used by 2,000+ users inside Green Pips Trading. Gamifies trading education and pattern recognition.",
    role: "Solo Developer",
    stack: ["React", "TypeScript", "Web APIs"],
    image: "",
    icon: Users,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    status: "Live",
    highlights: [
      "2,000+ users within Green Pips platform",
      "Gamified learning experience",
      "Pattern recognition training",
      "Built and deployed independently"
    ]
  },
  {
    id: "freely-legacy",
    title: "Freely App (Legacy)",
    description: "React Native mobile app designed to make people feel safe walking alone. Features SMS notifications and GPS tracking.",
    role: "Solo Mobile Developer",
    stack: ["React Native", "SMS APIs", "GPS Tracking", "Mobile Dev"],
    image: "",
    icon: Shield,
    gradient: "from-green-500 via-cyan-500 to-blue-500",
    status: "Archived",
    highlights: [
      "Cross-platform mobile development",
      "Real-time GPS tracking",
      "SMS notification system",
      "Safety-focused user experience"
    ]
  },
  {
    id: "llm-chatbot",
    title: "LLM Chatbot for Green Pips",
    description: "End-to-end LLM setup trained on Green Pips FAQs. Self-hosted on Hetzner with API integration into custom chatbot interface.",
    role: "Solo Developer",
    stack: ["Llama", "Hetzner", "APIs", "Python"],
    image: "",
    icon: Brain,
    gradient: "from-purple-500 via-pink-500 to-red-500",
    status: "Live",
    highlights: [
      "Custom LLM training on company FAQs",
      "Self-hosted infrastructure",
      "API backend integration",
      "Production chatbot deployment"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-80" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FEATURED VENTURES</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-[text-glow_4s_ease-in-out_infinite_alternate]">
            Core Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            High-impact ventures revolutionizing fintech, analytics, and safety through cutting-edge technology
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainProjects.map((project) => {
            const Icon = project.icon;
            const isSelected = selectedProject === project.id;
            
            return (
              <Card 
                key={project.id}
                className={`
                  relative group cursor-pointer overflow-hidden border-0 bg-gradient-to-br ${project.gradient} p-[1px] 
                  transition-all duration-500 hover:scale-105 hover:shadow-2xl
                  ${isSelected ? 'scale-105 shadow-2xl' : ''}
                `}
                onClick={() => setSelectedProject(isSelected ? null : project.id)}
              >
                <div className="relative h-full bg-background/95 backdrop-blur-sm rounded-lg p-6">
                  
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} p-3 mb-6
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {project.role}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-3 py-4 border-t border-border/50">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="font-bold text-lg text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Expandable Details */}
                    <div className={`
                      transition-all duration-500 overflow-hidden
                      ${isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="pt-4 border-t border-border/50 space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Key Innovations:</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start">
                                <Zap className="w-3 h-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {project.stack.map((tech, i) => (
                            <Badge 
                              key={i}
                              variant="outline"
                              className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between pt-4">
                      <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 text-sm font-medium">
                        {isSelected ? 'Show Less' : 'Learn More'}
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {/* Links */}
                      <div className="flex gap-2">
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Other Projects Section */}
        {showAllProjects && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Other Projects & Experiments
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Additional ventures and technical experiments that showcase diverse problem-solving
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {otherProjects.map((project) => {
                const Icon = project.icon;
                
                return (
                  <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-2.5`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs mb-3">
                        {project.role}
                      </Badge>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-sm mb-2">Key Features:</h5>
                          <ul className="space-y-1">
                            {project.highlights.slice(0, 3).map((highlight, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex items-start">
                                <Zap className="w-3 h-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {project.stack.slice(0, 4).map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-border/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Toggle Button */}
        <div className="text-center">
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="text-sm">
              {showAllProjects ? 'Show fewer projects' : 'View all projects & experiments'}
            </span>
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
              showAllProjects ? 'rotate-90' : ''
            }`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
