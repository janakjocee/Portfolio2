export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    id: "msc-data-science",
    degree: "MSc Data Science",
    institution: "University of Greenwich",
    location: "London, UK",
    startDate: "Sep 2025",
    endDate: "Sep 2026",
    description: "Focus: Big Data, Statistical Modeling, Machine Learning",
    highlights: [
      "Advanced Machine Learning",
      "Big Data Analytics",
      "Statistical Modeling",
      "Data Visualization",
    ],
  },
  {
    id: "be-cse",
    degree: "B.E. Computer Science & Engineering",
    institution: "New Horizon College of Engineering",
    location: "Bengaluru, India",
    startDate: "Nov 2021",
    endDate: "Jul 2025",
    description: "Graduated with high distinction",
    highlights: [
      "CGPA: 9.39",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Machine Learning",
      "Cloud Computing",
    ],
  },
];
