import PageTransition from "../components/PageTransition"
import { projects } from "../data/projects"

const Projects = () => {
    return (
        <PageTransition>
            <div className="min-h-screen px-6 py-20">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                            Mis <span className="text-gray-300">Proyectos</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
                            Explora los proyectos que he desarrollado con pasión y dedicación
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {projects.map((project, index) => (
                            <article
                                key={project.title}
                                className={`group flex flex-col bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 animate-fade-in ${
                                    project.highlights ? 'md:col-span-2' : ''
                                }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {project.image && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={`Captura del proyecto ${project.title}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                )}

                                <div className="flex flex-col flex-1 p-8">
                                    {project.context && (
                                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">
                                            {project.context}
                                        </p>
                                    )}
                                    <h2 className="text-2xl font-bold text-white mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-200 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {project.highlights && (
                                        <ul className="space-y-3 mb-6 flex-1">
                                            {project.highlights.map((highlight) => (
                                                <li key={highlight} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {!project.highlights && <div className="flex-1"></div>}

                                    {project.diagrams && (
                                        <div className="mb-8">
                                            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                                                Diagramas técnicos
                                            </p>
                                            <div className="grid sm:grid-cols-3 gap-4">
                                                {project.diagrams.map((diagram) => (
                                                    <a
                                                        key={diagram.title}
                                                        href={diagram.image}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title={`Ver ${diagram.title} en tamaño completo`}
                                                        className="group/diagram flex flex-col bg-white rounded-2xl overflow-hidden border border-white/20 hover:border-white/50 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
                                                    >
                                                        <div className="h-44 p-3 overflow-hidden">
                                                            <img
                                                                src={diagram.image}
                                                                alt={`Diagrama: ${diagram.title}`}
                                                                loading="lazy"
                                                                className="w-full h-full object-contain object-top"
                                                            />
                                                        </div>
                                                        <p className="px-3 py-2 bg-black/80 text-gray-200 text-xs font-medium text-center group-hover/diagram:text-white transition-colors duration-300">
                                                            {diagram.title}
                                                        </p>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/10 rounded-xl text-xs text-gray-100 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.privateNote && (
                                        <p className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                                            <span aria-hidden="true">🔒</span>
                                            <span>{project.privateNote}</span>
                                        </p>
                                    )}
                                    <div className="flex gap-4">
                                        {project.repoUrl && (
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center px-4 py-3 bg-white/10 text-white rounded-xl text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-300"
                                            >
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
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                            Estoy documentando más proyectos con sus descripciones detalladas,
                            capturas de pantalla y enlaces a repositorios.
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-2xl text-gray-200 border border-white/20">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span>Actualizando portafolio</span>
                        </div>
                    </div>

                </div>
            </div>
        </PageTransition>
    )
}

export default Projects
