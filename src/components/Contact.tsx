import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to discussing startup programs, accelerators, venture opportunities, 
          and collaboration on fintech projects.
        </p>

        <Card className="bg-card border-border p-8 md:p-12">
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Email</h3>
              <a 
                href="mailto:ethhartwell@gmail.com"
                className="text-primary hover:text-primary/80 text-lg transition-colors inline-flex items-center gap-2"
              >
                <Mail size={20} />
                ethhartwell@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-primary hover:text-primary"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/ethanhartwell" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </Button>

                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-primary hover:text-primary"
                  asChild
                >
                  <a 
                    href="https://github.com/ethanhartwell" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </Button>

                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-primary hover:text-primary"
                  asChild
                >
                  <a 
                    href="https://twitter.com/ethanhartwell" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Twitter size={20} />
                    Twitter
                  </a>
                </Button>
              </div>
            </div>

            {/* Location */}
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground">
                📍 Based in Bristol, UK
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-muted-foreground">
          <p className="mb-2">
            Positioning for startup programs, accelerators, and venture opportunities.
          </p>
          <p className="text-sm">
            Response time: Usually within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
