import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Award } from "lucide-react";

const Trading = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trading Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Practical market understanding that informs my fintech builds
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border p-6 text-center hover:shadow-glow transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-primary">4.5 Years</h3>
            <p className="text-muted-foreground">Active XAU/USD Trading</p>
          </Card>

          <Card className="bg-card border-border p-6 text-center hover:shadow-glow transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-primary">4-16%</h3>
            <p className="text-muted-foreground">Monthly Returns FY24/25</p>
          </Card>

          <Card className="bg-card border-border p-6 text-center hover:shadow-glow transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-primary">+24.7%</h3>
            <p className="text-muted-foreground">SIPP Returns Y1 at HL</p>
          </Card>
        </div>

        <Card className="bg-card border-border p-8">
          <h3 className="text-2xl font-bold mb-4">Trading Philosophy</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              My trading background isn't just about returns — it's about understanding market 
              psychology, risk management, and what traders actually need from their tools.
            </p>
            <p>
              Specializing in <span className="text-primary font-semibold">liquidity zone analysis</span> and 
              <span className="text-primary font-semibold"> short-term position management</span>, I've developed 
              a systematic approach to day trading that informs every product decision at Green Pips Trading.
            </p>
            <p>
              This practical market experience, combined with 2 years of strategic development on demo accounts, 
              gives me unique insight into building fintech products that actually serve traders' needs.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Trading;
