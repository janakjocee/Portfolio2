import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, Brain, BarChart3, Cloud, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/ui/custom/MagneticButton";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

const categoryIcons: Record<string, React.ElementType> = {
  all: Layers,
  ml: Brain,
  data: BarChart3,
  cloud: Cloud,
  web: Globe,
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line" />
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => {
              const Icon = categoryIcons[category.id];
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-indigo-500 to-emerald-500 text-white shadow-glow"
                      : "bg-card border border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass-card-hover h-full flex flex-col overflow-hidden">
                  {/* Project Image Placeholder */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-indigo-500/10 to-emerald-500/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center">
                          {categoryIcons[project.category] && (
                            <span className="text-2xl text-white">
                              {(() => {
                                const Icon = categoryIcons[project.category];
                                return <Icon className="w-8 h-8" />;
                              })()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-background/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </motion.div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                      {
                        projectCategories.find((c) => c.id === project.category)
                          ?.label
                      }
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <ScrollReveal className="text-center mt-12" delay={0.3}>
          <MagneticButton
            variant="secondary"
            href="https://github.com/janakjocee"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Projects;
