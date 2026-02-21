import { motion } from "framer-motion";
import { FileText, ExternalLink, Download, BookOpen, Calendar } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { publications } from "@/data/publications";

export function Publications() {
  return (
    <section id="publications" className="section-padding relative bg-muted/20">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Research</span>
            <h2 className="section-title">Publications & Research</h2>
            <div className="section-line" />
          </div>
        </ScrollReveal>

        {/* Publications Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {publications.map((pub) => (
            <StaggerItem key={pub.id}>
              <motion.div
                className="glass-card-hover p-6 h-full flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {pub.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{pub.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{pub.venue}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-4">
                  {pub.abstract}
                </p>

                {/* Paper ID */}
                {pub.paperId && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Paper ID: {pub.paperId}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      PDF
                    </a>
                  )}
                  {pub.linkedinUrl && (
                    <a
                      href={pub.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Research Focus */}
        <ScrollReveal className="mt-16" delay={0.3}>
          <div className="glass-card p-8 text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Research Focus</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My research interests span machine learning applications in education,
              learning analytics, and explainable AI. I&apos;m passionate about developing
              data-driven solutions that create meaningful impact in real-world scenarios.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Publications;
