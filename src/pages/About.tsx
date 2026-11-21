
import PageTransition from "../components/PageTransition"
import perfilImg from "../assets/perfil.jpg"
import cvFile from "../assets/CV_MAURICIO_REYES.pdf"
import { socialLinks } from "../data/social"
import Icon from "../components/Icon"

const experience = [
    {
        company: "CIFO Technologies",
        role: "Ingeniero de software",
        period: "Sep 2025 — Hoy",
        current: true,
        description:
            "Desarrollé el sistema de trámites de Desarrollo Urbano de un gobierno municipal (Laravel, React, TypeScript): flujos configurables por trámite, bandejas por área, firma con e.firma del SAT en el navegador, licencias y oficios en PDF con formatos oficiales, y cálculo de derechos y plazos en días hábiles. También desarrollé el módulo de Egresos de un GRP (GraphQL/Lighthouse, Vue/Nuxt, Oracle): el ciclo Comprometido, Devengado, Pagado con pólizas contables automáticas y cancelaciones conforme a la normatividad CONAC.",
    },
    {
        company: "Gob-TI",
        role: "Líder de Desarrollo / Full Stack",
        period: "Ago 2023 — Sep 2025",
        description:
            "Coordiné un equipo de 4 desarrolladores en sistemas para procesos gubernamentales. Implementé Clean Architecture en Laravel en tres sistemas (Gestor Documental, Adquisiciones y Programas Sociales) y lideré la adopción de React, Node.js y TypeScript en el equipo.",
    },
    {
        company: "Núcleos Electro Magnéticos AVE",
        role: "Desarrollador",
        period: "Ene 2023 — Jul 2023",
        description:
            "Mantuve y mejoré el sistema administrativo en Laravel y desarrollé nuevos módulos para la gestión de ventas y el control de inventario.",
    },
    {
        company: "Facultad de Ciencias de la Conducta",
        role: "Desarrollador",
        period: "Ene 2022 — Jul 2022",
        description:
            "Sistema web de inventario y préstamo de insumos de los centros de cómputo (Vue.js, Laravel), con notificaciones en tiempo real para asegurar su devolución.",
    },
]

const About = () => {
    return (
        <PageTransition>
            <div className="min-h-screen px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                            Sobre <span className="text-gray-300">Mí</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Mi trayectoria, experiencia y formación como desarrollador
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-16 mb-20">
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                    <div className="text-center mb-8">
                                        <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 mb-6">
                                            <img 
                                                src={perfilImg} 
                                                alt="Mauricio Reyes" 
                                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Alan Mauricio Reyes Telesforo</h3>
                                        <p className="text-gray-300 text-lg">Desarrollador Full Stack</p>
                                    </div>
                                    
                                    <div className="space-y-4 text-sm">
                                        <div className="flex items-center gap-3 text-gray-200">
                                            <Icon name="location" className="w-5 h-5 text-gray-400" />
                                            <span>Toluca, México</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-200">
                                            <Icon name="briefcase" className="w-5 h-5 text-gray-400" />
                                            <span>Ingeniero de software en CIFO Technologies</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-200">
                                            <Icon name="mail" className="w-5 h-5 text-gray-400" />
                                            <a
                                                href="mailto:idgsmauricioreyes@gmail.com"
                                                className="break-all hover:text-white transition-colors duration-300"
                                            >
                                                idgsmauricioreyes@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                                        <a
                                            href={cvFile}
                                            download="CV_Mauricio_Reyes.pdf"
                                            className="block w-full text-center px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                                        >
                                            Descargar CV
                                        </a>
                                        <div className="flex justify-center gap-4">
                                            {socialLinks.map((social) => (
                                                <a
                                                    key={social.name}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={social.name}
                                                    className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/30 hover:scale-110 transition-all duration-300"
                                                >
                                                    <img
                                                        src={social.icon}
                                                        alt={social.name}
                                                        className={`w-5 h-5 object-contain ${social.dark ? 'brightness-0 invert opacity-90' : ''}`}
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-12">
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    ¿Quién soy?
                                </h2>
                                <div className="space-y-4 text-gray-200 leading-relaxed">
                                    <p>
                                        Soy Ingeniero en Desarrollo y Gestión de Software con más de 3 años de experiencia construyendo sistemas web,
                                        principalmente para gobierno: trámites, finanzas públicas y gestión documental.
                                        Trabajo sobre todo con Laravel, React y TypeScript, y también con Vue/Nuxt, NestJS y GraphQL.
                                    </p>
                                    <p>
                                        Me interesa que el software sea correcto donde más importa: dinero, firmas y auditoría.
                                        Por eso cuido la arquitectura por capas, las transacciones y las pruebas.
                                        Estoy abierto a colaborar en proyectos desafiantes, tanto de backend como de frontend.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    ¿Qué hago?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-white">Frontend</h3>
                                        <p className="text-gray-200 text-sm">
                                            Desarrollo interfaces responsivas con React, Vue/Nuxt, TypeScript y Tailwind CSS,
                                            con formularios validados y manejo de datos con TanStack Query.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-white">Backend</h3>
                                        <p className="text-gray-200 text-sm">
                                            Construyo APIs REST y GraphQL con Laravel, NestJS y Express,
                                            sobre MySQL, PostgreSQL y Oracle, con arquitectura por capas y pruebas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Experiencia
                                </h2>
                                <div className="divide-y divide-white/10">
                                    {experience.map((job) => (
                                        <div
                                            key={job.company}
                                            className="py-5 first:pt-0 last:pb-0"
                                        >
                                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                                                <h3 className="text-lg font-semibold text-white">
                                                    {job.role}
                                                    <span className="font-normal text-gray-300"> · {job.company}</span>
                                                </h3>
                                                <p className={`text-xs uppercase tracking-widest font-semibold whitespace-nowrap ${job.current ? 'text-white' : 'text-gray-400'}`}>
                                                    {job.period}
                                                </p>
                                            </div>
                                            <p className="text-gray-200 text-sm leading-relaxed">{job.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Educación
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Universidad Tecnológica del Valle de Toluca</h3>
                                        <p className="text-gray-300 mb-2">Ingeniero en Desarrollo y Gestión de Software</p>
                                        <p className="text-gray-200 text-sm">
                                            Mi formación combina teoría y práctica, enfocándose en el desarrollo de software ágil y la gestión de proyectos tecnológicos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Cursos
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "React & TypeScript",
                                            description: "Desarrollo de aplicaciones modernas con React y TypeScript",
                                            from: "Udemy"
                                        },
                                        {
                                            title: "Laravel Framework",
                                            description: "Desarrollo backend robusto con Laravel e integración con Vue.js",
                                            from: "Udemy"
                                        },
                                        {
                                            title: "Node.js & Express",
                                            description: "Full Stack con Node.js, React, Typescript, NestJS y Next.js",
                                            from: "Udemy"
                                        },
                                        {
                                            title: "JavaScript Moderno",
                                            description: "Fundamentos y técnicas avanzadas de JavaScript",
                                            from: "Udemy"
                                        }
                                    ].map((course, index) => (
                                        <div
                                            key={course.title}
                                            className="animate-fade-in p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <h4 className="font-semibold text-white mb-2">{course.title}</h4>
                                            <p className="text-gray-200 text-sm mb-2">{course.description}</p>
                                            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{course.from}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default About