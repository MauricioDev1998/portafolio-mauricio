
import PageTransition from "../components/PageTransition"

const Projects = () => {
    return (
        <PageTransition>
            <div className="min-h-screen px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                            Mis <span className="text-gray-300">Proyectos</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
                            Explora los proyectos que he desarrollado con pasión y dedicación
                        </p>
                    </div>

                    {/* Proyectos destacados - En construcción */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        
                        {/* Proyecto placeholder 1 */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 flex items-center justify-center">
                                <span className="text-4xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Proyecto Web Full Stack</h3>
                            <p className="text-gray-200 text-sm mb-4">
                                Aplicación completa desarrollada con React, Laravel y MySQL. 
                                Próximamente más detalles...
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">React</span>
                                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Laravel</span>
                                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">MySQL</span>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 py-2 bg-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/20 transition-colors duration-300">
                                    Ver Demo
                                </button>
                                <button className="flex-1 py-2 border border-white/20 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors duration-300">
                                    Ver Código
                                </button>
                            </div>
                        </div>

                        {/* Proyecto placeholder 2 */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                            <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl mb-6 flex items-center justify-center">
                                <span className="text-4xl">📱</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">App Móvil API</h3>
                            <p className="text-gray-200 text-sm mb-4">
                                API REST desarrollada con Node.js y Express para aplicación móvil. 
                                Próximamente más detalles...
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Node.js</span>
                                <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">Express</span>
                                <span className="px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">MongoDB</span>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 py-2 bg-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/20 transition-colors duration-300">
                                    Ver Demo
                                </button>
                                <button className="flex-1 py-2 border border-white/20 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors duration-300">
                                    Ver Código
                                </button>
                            </div>
                        </div>

                        {/* Proyecto placeholder 3 */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6 flex items-center justify-center">
                                <span className="text-4xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Dashboard Administrativo</h3>
                            <p className="text-gray-200 text-sm mb-4">
                                Panel de administración con TypeScript y Tailwind CSS. 
                                Próximamente más detalles...
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">TypeScript</span>
                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">Tailwind</span>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">React</span>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 py-2 bg-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/20 transition-colors duration-300">
                                    Ver Demo
                                </button>
                                <button className="flex-1 py-2 border border-white/20 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors duration-300">
                                    Ver Código
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Mensaje de construcción */}
                    <div className="text-center bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Más proyectos <span className="text-gray-300">en camino</span>
                        </h2>
                        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                            Estoy trabajando en documentar y mostrar más proyectos con sus respectivas 
                            descripciones detalladas, capturas de pantalla y enlaces a repositorios.
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-2xl text-gray-200 border border-white/20">
                            <span className="animate-pulse">🚧</span>
                            <span>Actualizando portafolio</span>
                            <span className="animate-pulse">🚧</span>
                        </div>
                    </div>

                </div>
            </div>
        </PageTransition>
    )
}

export default Projects