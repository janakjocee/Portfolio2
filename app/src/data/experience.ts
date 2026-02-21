export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "mathco-data-scientist",
    title: "Data Scientist I",
    company: "MathCo",
    location: "Bengaluru, India",
    startDate: "Aug 2025",
    endDate: "Sep 2025",
    description:
      "Built data-driven solutions for Fortune 500 clients, working on real-world business problem solving with stakeholder collaboration and applied analytics tools for actionable insights.",
    achievements: [
      "Developed and deployed ML models for production analytics",
      "Collaborated with cross-functional teams to deliver data-driven solutions",
      "Worked on resource allocation and scheduling optimization projects",
      "Created data visualization dashboards for stakeholder reporting",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "SQL",
      "Pandas",
      "Scikit-learn",
      "Tableau",
    ],
  },
  {
    id: "mathco-intern",
    title: "Analytics Intern",
    company: "MathCo",
    location: "Bengaluru, India",
    startDate: "Jan 2025",
    endDate: "Aug 2025",
    description:
      "Built analytical pipelines and dashboards to support stakeholder decisions. Performed exploratory analysis and produced actionable insights for business problems.",
    achievements: [
      "Built analytical pipelines for data processing and transformation",
      "Created dashboards to support stakeholder decision-making",
      "Performed exploratory data analysis on large datasets",
      "Produced actionable insights for business optimization",
    ],
    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    id: "vaultofcodes",
    title: "Intern",
    company: "VaultofCodes",
    location: "Remote",
    startDate: "Oct 2023",
    endDate: "Dec 2023",
    description:
      "Contributed to Java-based projects and team collaboration, gaining hands-on experience in software development lifecycle.",
    achievements: [
      "Developed Java-based applications following best practices",
      "Collaborated with team members on project deliverables",
      "Learned enterprise software development workflows",
    ],
    technologies: ["Java", "OOP", "Git", "MySQL"],
  },
];
