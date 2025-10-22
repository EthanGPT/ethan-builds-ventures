import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6';
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated Green Hue Overlays */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 w-full h-2 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-green-wave top-1/3 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
        <div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent animate-green-wave top-2/3 shadow-[0_0_15px_rgba(34,197,94,0.6)]" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="mb-6">
          <span className="text-primary text-sm font-mono tracking-wider">
            FOUNDER • DEVELOPER • TRADER
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-[text-glow_4s_ease-in-out_infinite_alternate] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          Ethan Hartwell
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Building fintech ventures from the ground up.
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          South Africa → UK • Michaelhouse Alumnus • CEO of Green Pips Trading
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow animate-[button-glow_3s_ease-in-out_infinite_alternate] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-border hover:bg-muted hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com/EthanGPT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/ethan-hartwell" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://x.com/EthanHartw74498"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaXTwitter size={24} />
          </a>
          <a 
            href="mailto:ethhartwell@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
