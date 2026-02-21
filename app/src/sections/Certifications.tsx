import { motion } from "framer-motion";
import {
  Code,
  Lightbulb,
  Network,
  ExternalLink,
  Award,
  Trophy,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { certifications, awards } from "@/data/certifications";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Lightbulb,
  Network,
};

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative bg-muted/20">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Credentials</span>
            <h2 className="section-title">Certifications & Awards</h2>
            <div className="section-line" />
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Certifications
        </h3>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          staggerDelay={0.1}
        >
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <StaggerItem key={cert.id}>
                <motion.div
                  className="glass-card-hover p-6 h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: cert.color }} />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold mb-1">{cert.name}</h4>
                  <p className="text-primary font-medium text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.date}
                  </p>

                  {/* Credential Link */}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Awards Section */}
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          Awards & Recognition
        </h3>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {awards.map((award) => (
            <StaggerItem key={award.id}>
              <motion.div
                className="glass-card-hover p-6"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{award.title}</h4>
                    <p className="text-primary font-medium text-sm">
                      {award.event}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {award.year} · {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Continuous Learning Note */}
        <ScrollReveal className="mt-12 text-center" delay={0.4}>
          <div className="glass-card inline-flex items-center gap-3 px-6 py-3">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Continuously learning and pursuing new certifications
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Certifications;
