export interface Publication {
  id: string;
  title: string;
  abstract: string;
  venue: string;
  date: string;
  paperId?: string;
  pdfUrl?: string;
  linkedinUrl?: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    id: "digital-identity-learning",
    title: "Digital Identity and Learning Analysis",
    abstract:
      "This research explores the intersection of digital identity frameworks and learning analytics, proposing novel methodologies for understanding student engagement patterns in digital learning environments. The study leverages machine learning techniques to analyze behavioral data and provide actionable insights for educational institutions.",
    venue:
      "6th International Conference on Data Science, Machine Learning & Applications (ICDSMLA)",
    date: "Dec 2024",
    paperId: "557",
    pdfUrl: "#",
    linkedinUrl: "#",
    tags: ["Learning Analytics", "Digital Identity", "Machine Learning", "Education"],
  },
  {
    id: "redefining-learning",
    title: "Redefining Learning Analysis through Identity",
    abstract:
      "A comprehensive study on how identity-based approaches can transform traditional learning analytics. This paper presents a framework for integrating identity management systems with learning platforms to enhance personalization and improve learning outcomes through data-driven insights.",
    venue:
      "9th International Conference on Communication and Electronics Systems (ICCES)",
    date: "Dec 2024",
    paperId: "ICCES–981",
    pdfUrl: "#",
    linkedinUrl: "#",
    tags: ["Learning Analytics", "Identity Management", "Educational Technology"],
  },
  {
    id: "ml-trends",
    title: "Unveiling The Trends of Machine Learning",
    abstract:
      "An in-depth analysis of emerging trends in machine learning, covering recent advancements in deep learning, reinforcement learning, and their practical applications across various industries. This review paper synthesizes current research and identifies future directions for the field.",
    venue: "International Journal of Scientific Research in CSEIT (IJSRCSEIT)",
    date: "Jul 2024",
    paperId: "UGC Journal No: 64718",
    pdfUrl: "#",
    linkedinUrl: "#",
    tags: ["Machine Learning", "Deep Learning", "Research Review", "AI Trends"],
  },
];
