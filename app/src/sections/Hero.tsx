import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/ui/custom/MagneticButton";
import { TypingAnimation } from "@/components/animations/TypingAnimation";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { personalInfo, heroRoles, stats } from "@/data/personal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              {personalInfo.location}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Role with Typing Animation */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 h-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TypingAnimation
              words={heroRoles}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            &ldquo;{personalInfo.tagline}&rdquo;
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <MagneticButton variant="primary" size="lg" href="#projects">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton variant="secondary" size="lg" href="#contact">
              Get In Touch
              <Mail className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton variant="outline" size="lg" href={personalInfo.cv}>
              <Download className="w-4 h-4" />
              Download CV
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  <CounterAnimation
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-current rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
