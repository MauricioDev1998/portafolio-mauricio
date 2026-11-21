
import { Link } from "react-router-dom"
import PageTransition from "../components/PageTransition"
import perfilImg from "../assets/perfil.jpg"
import cvFile from "../assets/CV_MAURICIO_REYES.pdf"
import { socialLinks } from "../data/social"
import { projects } from "../data/projects"
import Icon from "../components/Icon"

// Los primeros proyectos de la lista son los que se destacan en el inicio.
const featuredProjects = projects.slice(0, 3)

const Home = () => {
    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-shrink-0 order-1 lg:order-2">
                            <div className="relative">
                                <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                                    <img 
                                        src={perfilImg} 
                                        alt="Mauricio Reyes - Desarrollador Full Stack" 
                                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm animate-pulse delay-500"></div>
                            </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                        <span className="text-gray-200 font-light block">
                                            Hola, soy
                                        </span>
                                        <span className="text-white inline-block tracking-wide">
                                            Mauricio Reyes
                                        </span>
                                    </h1>
                                    
                                    <p className="text-2xl md:text-3xl text-gray-200 font-light max-w-2xl lg:max-w-none tracking-wide">
                                        Desarrollador Full Stack
                                    </p>
                                    
                                    <p className="text-lg text-gray-200 max-w-3xl lg:max-w-2xl leading-relaxed">
                                        Ingeniero en Desarrollo de Software con más de 3 años de experiencia construyendo sistemas para gobierno con Laravel, React y TypeScript.
                                        Actualmente trabajo como Ingeniero de software en CIFO Technologies, construyendo sistemas para entidades públicas con foco en seguridad, escalabilidad y experiencia de usuario.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-8">
                                    <Link
                                        to="/projects"
                                        className="group relative px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
                                    >
                                        <span className="relative z-10">Ver mis proyectos</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </Link>
                                    
                                    <a
                                        href={cvFile}
                                        download="CV_Mauricio_Reyes.pdf"
                                        className="px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-2xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm border border-gray-600 hover:border-gray-500"
                                    >
                                        Descargar CV
                                    </a>
                                </div>

                                <div className="flex gap-4 justify-center lg:justify-start pt-2">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/30 hover:scale-110 transition-all duration-300"
                                        >
                                            <img
                                                src={social.icon}
                                                alt={social.name}
                                                className={`w-6 h-6 object-contain ${social.dark ? 'brightness-0 invert opacity-90' : ''}`}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <p className="text-gray-200 text-sm mb-10 tracking-wider font-medium">STACK PRINCIPAL</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                'PHP', 'Laravel', 'GraphQL', 'Oracle', 'Vue', 'React', 'TypeScript', 'Tailwind'
                            ].map((tech, index) => (
                                <div
                                    key={tech}
                                    className="animate-fade-in px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl text-sm text-gray-100 hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    <section className="mt-24">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                            <div>
                                <p className="text-gray-400 text-xs mb-3 tracking-widest font-semibold uppercase">Trabajo reciente</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Proyectos destacados</h2>
                            </div>
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                Ver todos los proyectos
                                <Icon name="arrowRight" className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {featuredProjects.map((project) => (
                                <Link
                                    key={project.title}
                                    to="/projects"
                                    className="flex flex-col text-left bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors duration-300"
                                >
                                    {project.context && (
                                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">
                                            {project.context}
                                        </p>
                                    )}
                                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-4 mb-6">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 5).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/10 rounded-lg text-xs text-gray-100 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}

export default Home