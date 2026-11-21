import PageTransition from "../components/PageTransition"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

const Projects = () => {
    return (
        <PageTransition>
            <div className="min-h-screen px-6 py-20">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Mis <span className="text-gray-300">Proyectos</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Sistemas para gobierno y proyectos personales, con las decisiones técnicas detrás de cada uno
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </PageTransition>
    )
}

export default Projects
