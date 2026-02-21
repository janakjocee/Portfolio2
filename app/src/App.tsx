import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/custom/CustomCursor";
import { AnimatedBackground } from "@/components/backgrounds/AnimatedBackground";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Publications } from "@/sections/Publications";
import { Projects } from "@/sections/Projects";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";

function App() {
  useEffect(() => {
    // Console easter egg
    console.log(
      "%c👋 Hey there, curious developer!",
      "font-size: 20px; font-weight: bold; color: #6366f1;"
    );
    console.log(
      "%cWelcome to Janak Raj Joshi's Portfolio",
      "font-size: 14px; color: #94a3b8;"
    );
    console.log(
      "%cLet's connect on LinkedIn: https://www.linkedin.com/in/janakjocee/",
      "font-size: 12px; color: #64748b;"
    );
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Publications />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
