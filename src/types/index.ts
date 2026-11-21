

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
    /** Enlaces extra (p. ej. repos separados de frontend y backend). */
    links?: { label: string; url: string }[];
    image?: string;
    diagrams?: ProjectDiagram[];
    privateNote?: string;
}