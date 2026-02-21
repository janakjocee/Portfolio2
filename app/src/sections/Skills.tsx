import { useState } from "react";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Code2, Database, Cloud, Wrench, Terminal, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import {
  technicalSkills,
  dataSkills,
  databaseSkills,
  conceptSkills,
  toolSkills,
  skillTags,
  radarData,
  strengths,
} from "@/data/skills";

const skillCategories = [
  { id: "languages", label: "Languages", icon: Code2, skills: technicalSkills },
  { id: "data", label: "Data & ML", icon: Sparkles, skills: dataSkills },
  { id: "databases", label: "Databases", icon: Database, skills: databaseSkills },
  { id: "concepts", label: "Concepts", icon: Cloud, skills: conceptSkills },
  { id: "tools", label: "Tools", icon: Wrench, skills: toolSkills },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages");
  const activeSkills =
    skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">My Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="section-line" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Radar Chart & Categories */}
          <div>
            {/* Radar Chart */}
            <ScrollReveal>
              <div className="glass-card p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-center">
                  Skill Proficiency Overview
                </h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="70%"
                      data={radarData}
                    >
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 11,
                        }}
                      />
                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 100]}
                        tick={false}
                      />
                      <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        fill="hsl(var(--primary))"
                        fillOpacity={0.2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>

            {/* Category Tabs */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border hover:border-primary/50"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Skill Bars */}
          <div>
            <ScrollReveal>
              <h3 className="text-xl font-semibold mb-6">
                {
                  skillCategories.find((cat) => cat.id === activeCategory)
                    ?.label
                }{" "}
                Skills
              </h3>
            </ScrollReveal>

            <StaggerContainer className="space-y-5" staggerDelay={0.08}>
              {activeSkills.map((skill, index) => (
                <StaggerItem key={skill.name}>
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.08,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Strengths */}
        <ScrollReveal className="mt-16" delay={0.3}>
          <h3 className="text-center text-lg font-semibold mb-6">
            Key Strengths
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {strengths.map((strength, index) => (
              <motion.span
                key={strength}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {strength}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Tags */}
        <ScrollReveal className="mt-12" delay={0.4}>
          <h3 className="text-center text-lg font-semibold mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillTags.map((tag, index) => (
              <motion.span
                key={tag}
                className="tech-badge cursor-default hover:border-primary/50 hover:text-primary transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
              >
                <Terminal className="w-3 h-3" />
                {tag}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Skills;
