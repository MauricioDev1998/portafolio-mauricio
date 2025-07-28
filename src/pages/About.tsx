
import PageTransition from "../components/PageTransition"
import perfilImg from "../assets/perfil.jpg"

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
                            Conoce más sobre mi trayectoria, pasiones y lo que me motiva como desarrollador
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-16 mb-20">
                        <div className="lg:col-span-1">
                            <div className="sticky top-8">
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
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                            <span className="text-gray-200">📍 Toluca, México</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                            <span className="text-gray-200">💼 Desarrollador Full Stack en Gob-TI</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                            <span className="text-gray-200">📧 mauricio.gobti@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-12">
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-4xl">👋</span>
                                    ¿Quién soy?
                                </h2>
                                <div className="space-y-4 text-gray-200 leading-relaxed">
                                    <p>
                                        Soy Ingeniero en Desarrollo y Gestión de Software con más de 2 años de experiencia desarrollando soluciones web con tecnologías modernas como Laravel, React, Node.js y TypeScript. 
                                        Me especializo en construir aplicaciones eficientes, escalables y enfocadas en la experiencia del usuario.
                                    </p>
                                    <p>
                                        Me apasiona la mejora continua, la colaboración y el uso de buenas prácticas de desarrollo. 
                                        Actualmente estoy expandiendo mis habilidades hacia el uso de Docker para proyectos robustos y productivos.

                                        Estoy abierto a colaborar en proyectos desafiantes, ya sea en desarrollo backend o frontend.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-4xl">💻</span>
                                    ¿Qué hago?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-white">Frontend</h3>
                                        <p className="text-gray-200 text-sm">
                                            Desarrollo interfaces modernas y responsivas con React, TypeScript y Tailwind CSS. 
                                            Me enfoco en crear experiencias de usuario intuitivas y accesibles.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-white">Backend</h3>
                                        <p className="text-gray-200 text-sm">
                                            Construyo APIs robustas y escalables con Laravel, Node.js y Express. 
                                            Manejo bases de datos y arquitecturas eficientes.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-4xl">🎓</span>
                                    Educación
                                </h2>
                                <div className="space-y-6">
                                    <div className="border-l-4 border-white/20 pl-6">
                                        <h3 className="text-xl font-semibold text-white">Universidad Tecnologica del Valle de Toluca</h3>
                                        <p className="text-gray-300 mb-2">Ingeniero en Desarrollo y Gestión de Software</p>
                                        <p className="text-gray-200 text-sm">
                                            Mi formación combina teoría y práctica, enfocándose en el desarrollo de software ágil y la gestión de proyectos tecnológicos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-4xl">📚</span>
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
                                            key={index}
                                            className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <h4 className="font-semibold text-white mb-2">{course.title}</h4>
                                            <p className="text-gray-200 text-sm">{course.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-4xl">❤️</span>
                                    Lo que me gusta
                                </h2>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: "🚀", text: "Nuevas tecnologías" },
                                        { icon: "⚡", text: "Optimización" },
                                        { icon: "🔧", text: "Resolución de problemas" },
                                        { icon: "📖", text: "Aprendizaje continuo" },
                                        { icon: "🤝", text: "Trabajo en equipo" },
                                        { icon: "🎮", text: "Videojuegos" },
                                        { icon: "⚽", text: "Fútbol" },
                                        { icon: "🎬", text: "Cine" },
                                        { icon: "🎵", text: "Música" }
                                    ].map((interest, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <span className="text-2xl">{interest.icon}</span>
                                            <span className="text-gray-200 font-medium">{interest.text}</span>
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