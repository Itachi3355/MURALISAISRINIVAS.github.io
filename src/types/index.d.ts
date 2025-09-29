interface Project {
    id: string;
    title: string;
    description: string;
    githubLink: string;
    liveDemoLink: string;
    imageUrl: string;
}

interface Skill {
    name: string;
    level: string; // e.g., "Beginner", "Intermediate", "Expert"
}

interface Experience {
    jobTitle: string;
    company: string;
    duration: string; // e.g., "Jan 2020 - Present"
    description: string;
}

interface ContactInfo {
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
}

interface PortfolioData {
    projects: Project[];
    skills: Skill[];
    experience: Experience[];
    contact: ContactInfo;
}