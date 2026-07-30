

export type ContactFormData = {
    name: string;
    email: string;
    message: string;
}

export type ProjectDiagram = {
    title: string;
    image: string;
}

export type Project = {
    title: string;
    context?: string;
    description: string;
    highlights?: string[];
    technologies: string[];
    repoUrl?: string;
    demoUrl?: string;
    image?: string;
    diagrams?: ProjectDiagram[];
    privateNote?: string;
}