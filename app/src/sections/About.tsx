import { MapPin, Mail, GraduationCap, Award, BookOpen } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/ui/custom/MagneticButton";
import { personalInfo } from "@/data/personal";
import { education } from "@/data/education";

const quickInfo = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Mail, label: "Email", value: personalInfo.email },
  { icon: GraduationCap, label: "Education", value: "MSc Data Science" },
  { icon: Award, label: "Achievement", value: "CGPA: 9.39" },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">About Me</span>
            <h2 className="section-title">Who I Am</h2>
            <div className="section-line" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - About Content */}
          <div>
            <ScrollReveal direction="left">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Data Scientist with a passion for{" "}
                <span className="gradient-text">transforming data</span> into
                actionable insights
              </h3>
            </ScrollReveal>

            <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
              <StaggerItem>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a dedicated Data Scientist and Analytics Consultant based in{" "}
                  <strong className="text-foreground">London, United Kingdom</strong>,
                  with expertise spanning across machine learning, statistical modeling,
                  and cloud computing.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="text-muted-foreground leading-relaxed">
                  My experience at MathCo working with Fortune 500 clients has honed my
                  ability to deliver data-driven solutions that create real business impact.
                  I specialize in building production-ready ML systems and analytical
                  pipelines.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong academic background (CGPA: 9.39) and multiple research
                  publications, I bring both theoretical depth and practical expertise to
                  every project I undertake.
                </p>
              </StaggerItem>
            </StaggerContainer>

            {/* Quick Info Grid */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {quickInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="up" delay={0.4}>
              <MagneticButton variant="primary" href="#contact">
                Let&apos;s Collaborate
              </MagneticButton>
            </ScrollReveal>
          </div>

          {/* Right Column - Education */}
          <div>
            <ScrollReveal direction="right">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Education
              </h3>
            </ScrollReveal>

            <StaggerContainer className="space-y-6" staggerDelay={0.15}>
              {education.map((edu) => (
                <StaggerItem key={edu.id}>
                  <div className="glass-card-hover p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {edu.location} · {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights?.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
