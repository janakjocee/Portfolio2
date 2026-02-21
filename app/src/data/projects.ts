export interface Project {
  id: string;
  title: string;
  description: string;
  category: "ml" | "data" | "web" | "cloud";
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ml-pipeline",
    title: "End-to-End ML Pipeline",
    description:
      "A production-ready machine learning pipeline for automated model training, validation, and deployment. Features include data preprocessing, feature engineering, hyperparameter tuning, and model monitoring.",
    category: "ml",
    techStack: ["Python", "Scikit-learn", "MLflow", "Docker", "AWS"],
    githubUrl: "https://github.com/janakjocee",
    featured: true,
  },
  {
    id: "learning-analytics",
    title: "Learning Analytics Dashboard",
    description:
      "Interactive dashboard for analyzing student performance and engagement metrics. Provides real-time insights into learning patterns, helping educators make data-driven decisions.",
    category: "data",
    techStack: ["Python", "Pandas", "Plotly", "Streamlit", "SQL"],
    githubUrl: "https://github.com/janakjocee",
    featured: true,
  },
  {
    id: "resource-optimizer",
    title: "Resource Allocation Optimizer",
    description:
      "Optimization system for resource allocation and scheduling using linear programming and genetic algorithms. Reduced operational costs by 25% for a Fortune 500 client.",
    category: "ml",
    techStack: ["Python", "PuLP", "NumPy", "Pandas", "OR-Tools"],
    githubUrl: "https://github.com/janakjocee",
    featured: true,
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis API",
    description:
      "REST API for real-time sentiment analysis of social media data. Uses BERT-based models for accurate emotion detection and classification.",
    category: "ml",
    techStack: ["Python", "FastAPI", "PyTorch", "Transformers", "Docker"],
    githubUrl: "https://github.com/janakjocee",
  },
  {
    id: "cloud-etl",
    title: "Cloud ETL Pipeline",
    description:
      "Scalable ETL pipeline built on AWS for processing large datasets. Features include data validation, transformation, and loading to data warehouses.",
    category: "cloud",
    techStack: ["AWS Lambda", "S3", "Glue", "Redshift", "Python"],
    githubUrl: "https://github.com/janakjocee",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description:
      "This portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and responsive design.",
    category: "web",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://janakjocee.vercel.app",
    githubUrl: "https://github.com/janakjocee",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ml", label: "Machine Learning" },
  { id: "data", label: "Data Analytics" },
  { id: "cloud", label: "Cloud" },
  { id: "web", label: "Web Development" },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["id"];
