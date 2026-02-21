export interface Skill {
  name: string;
  level: number;
  category: "languages" | "data" | "databases" | "concepts" | "tools";
}

export const technicalSkills: Skill[] = [
  { name: "Python", level: 95, category: "languages" },
  { name: "SQL", level: 90, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "C", level: 80, category: "languages" },
  { name: "HTML/CSS", level: 75, category: "languages" },
  { name: "PHP", level: 70, category: "languages" },
];

export const dataSkills: Skill[] = [
  { name: "Machine Learning", level: 92, category: "data" },
  { name: "Statistical Modeling", level: 88, category: "data" },
  { name: "Data Analysis", level: 95, category: "data" },
  { name: "Data Structures & Algorithms", level: 85, category: "data" },
];

export const databaseSkills: Skill[] = [
  { name: "MySQL", level: 90, category: "databases" },
  { name: "MongoDB", level: 75, category: "databases" },
];

export const conceptSkills: Skill[] = [
  { name: "Object-Oriented Programming", level: 88, category: "concepts" },
  { name: "Operating Systems", level: 80, category: "concepts" },
  { name: "Cyber Security", level: 75, category: "concepts" },
  { name: "Cloud Computing", level: 82, category: "concepts" },
];

export const toolSkills: Skill[] = [
  { name: "Scikit-learn", level: 92, category: "tools" },
  { name: "PyTorch", level: 85, category: "tools" },
  { name: "TensorFlow", level: 80, category: "tools" },
  { name: "Pandas / NumPy", level: 95, category: "tools" },
  { name: "Docker", level: 78, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Jupyter", level: 92, category: "tools" },
];

export const skillTags = [
  "Python",
  "Machine Learning",
  "SQL",
  "Data Analysis",
  "Statistics",
  "Java",
  "Scikit-learn",
  "PyTorch",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "Docker",
  "Git",
  "AWS",
  "Jupyter",
  "MySQL",
  "MongoDB",
  "Tableau",
  "OOP",
  "Cloud Computing",
];

// Radar chart data
export const radarData = [
  { subject: "Machine Learning", A: 92, fullMark: 100 },
  { subject: "Data Analysis", A: 95, fullMark: 100 },
  { subject: "Statistics", A: 88, fullMark: 100 },
  { subject: "Programming", A: 90, fullMark: 100 },
  { subject: "Cloud/DevOps", A: 78, fullMark: 100 },
  { subject: "Databases", A: 85, fullMark: 100 },
];

export const strengths = [
  "Research & Technical Writing",
  "Data Storytelling",
  "Cross-functional Collaboration",
  "Problem Solving",
  "Mentoring",
  "Open-source Contributions",
];
