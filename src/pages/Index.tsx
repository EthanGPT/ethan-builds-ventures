import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Trading from "@/components/Trading";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Trading />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
