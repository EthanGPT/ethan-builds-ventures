import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Ethan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From South Africa to building fintech ventures in the UK
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Background */}
          <Card className="bg-card border-border p-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Background</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Born and raised in South Africa, I attended <span className="text-foreground font-semibold">Michaelhouse</span>, 
                one of the country's leading independent schools in Durban.
              </p>
              <p>
                After moving to the UK, I joined <span className="text-foreground font-semibold">Hargreaves Lansdown</span> where 
                I progressed from Client Service Associate to Senior Investment Consultant and Investment Trainer, 
                personally supporting over 100 clients in a single day during peak tax-year periods.
              </p>
              <p>
                In December 2024, I took the leap to become a full-time founder, launching Green Pips Trading.
              </p>
            </div>
          </Card>

          {/* Awards */}
          <Card className="bg-card border-border p-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Recognition</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                  2024 & 2025
                </Badge>
                <h4 className="font-semibold mb-1">CEO Award - Hargreaves Lansdown</h4>
                <p className="text-sm text-muted-foreground">
                  "A Standout Performer Over Tax-Year End" — Personally congratulated by CEO Dan Olley for 
                  consistently delivering outstanding client service and contributing to higher NPS scores.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-semibold mb-1 text-muted-foreground">Role Model Recognition</h4>
                <p className="text-sm text-muted-foreground">
                  Highlighted as a role model of quality, dedication, and professionalism across the organization.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Qualifications */}
        <Card className="bg-card border-border p-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="text-2xl font-bold">Qualifications & Education</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-lg">Financial Qualifications</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Level 7 Chartered Wealth Management</span> (In Progress)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">
                    Level 3 Securities & Investments — 82%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">
                    UK Financial Regulation — 76%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">
                    Level 2 Fundamentals — 90%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">
                    Capital Markets (CISI) — First Class
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">Technical Training</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">
                    CS50 — Harvard (In Progress)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">
                    JavaScript Fundamentals (Codecademy)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">
                    IEB National Certificate, Michaelhouse
                  </span>
                </li>
              </ul>

              <h4 className="font-semibold mb-3 text-lg mt-6">CPD Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {["Financial Analysis", "Risk Management", "Ethics", "AML", "Consumer Duty"].map((cert) => (
                  <Badge key={cert} variant="outline" className="border-border text-foreground">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
