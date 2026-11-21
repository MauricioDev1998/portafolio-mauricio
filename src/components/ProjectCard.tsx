import { useState } from "react"
import type { Project } from "../types"
import Icon from "./Icon"

const VISIBLE_HIGHLIGHTS = 3

const linkClass =
    "flex-1 text-center px-4 py-3 bg-white/10 text-white rounded-xl text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-300"

interface ProjectCardProps {
    project: Project
    index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [expanded, setExpanded] = useState(false)

    const highlights = project.highlights ?? []
    const hiddenCount = Math.max(highlights.length - VISIBLE_HIGHLIGHTS, 0)
    const visibleHighlights = expanded ? highlights : highlights.slice(0, VISIBLE_HIGHLIGHTS)
    const hasLinks = Boolean(project.links?.length || project.repoUrl || project.demoUrl)

    return (
        <article
            className="flex flex-col bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 hover:bg-white/10 transition-colors duration-500 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {project.image && (
                <div className="h-56 overflow-hidden border-b border-white/10">
                    <img
                        src={project.image}
                        alt={`Captura del proyecto ${project.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            )}

            <div className="flex flex-col flex-1 p-8">
                {project.context && (
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">
                        {project.context}
                    </p>
                )}
                <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">{project.description}</p>

                {highlights.length > 0 && (
                    <div className="mb-6">
                        <ul className="space-y-3">
                            {visibleHighlights.map((highlight) => (
                                <li key={highlight} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                        {hiddenCount > 0 && (
                            <button
                                type="button"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                {expanded ? "Ver menos" : `Ver ${hiddenCount} puntos más`}
                                <Icon
                                    name="chevronDown"
                                    className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                                />
                            </button>
                        )}
                    </div>
                )}

                {project.diagrams && (
                    <div className="mb-6">
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                            Diagramas técnicos
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                            {project.diagrams.map((diagram) => (
                                <a
                                    key={diagram.title}
                                    href={diagram.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`Ver ${diagram.title} en tamaño completo`}
                                    className="group/diagram flex flex-col bg-white rounded-xl overflow-hidden border border-white/20 hover:border-white/60 transition-colors duration-300"
                                >
                                    <div className="h-28 p-2 overflow-hidden">
                                        <img
                                            src={diagram.image}
                                            alt={`Diagrama: ${diagram.title}`}
                                            loading="lazy"
                                            className="w-full h-full object-contain object-top"
                                        />
                                    </div>
                                    <p className="flex-1 flex items-center justify-center px-2 py-2 bg-black/80 text-gray-200 text-xs font-medium text-center group-hover/diagram:text-white transition-colors duration-300">
                                        {diagram.title}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-lg text-xs text-gray-100 border border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto space-y-4">
                    {project.privateNote && (
                        <p className="flex items-start gap-3 text-xs text-gray-400 leading-relaxed bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                            <Icon name="lock" className="w-4 h-4 mt-0.5" />
                            <span>{project.privateNote}</span>
                        </p>
                    )}
                    {hasLinks && (
                        <div className="flex flex-wrap gap-4">
                            {project.links?.map((link) => (
                                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    {link.label}
                                </a>
                            ))}
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    Ver código
                                </a>
                            )}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-4 py-3 bg-white text-black rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors duration-300"
                                >
                                    Ver demo
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
