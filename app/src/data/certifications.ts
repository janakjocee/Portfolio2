export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: "nptel-java",
    name: "Programming in Java",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "2024",
    credentialUrl: "#",
    icon: "Code",
    color: "#f89820",
  },
  {
    id: "ibm-design",
    name: "Enterprise Design Thinking",
    issuer: "IBM",
    date: "2024",
    credentialUrl: "#",
    icon: "Lightbulb",
    color: "#054ada",
  },
  {
    id: "ccna",
    name: "CCNA",
    issuer: "Cisco",
    date: "2024",
    credentialUrl: "#",
    icon: "Network",
    color: "#1ba0d7",
  },
];

export const awards = [
  {
    id: "science-exhibition",
    title: "First Place",
    event: "State-level Science Exhibition",
    year: "2023",
    description: "Awarded first place for innovative project demonstration",
  },
];
