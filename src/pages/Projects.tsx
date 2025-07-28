
import PageTransition from "../components/PageTransition"

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

                    <div className="text-center bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                            Estoy trabajando en documentar y mostrar proyectos con sus respectivas 
                            descripciones detalladas, capturas de pantalla y enlaces a repositorios.
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-2xl text-gray-200 border border-white/20">
                            <span>Actualizando portafolio</span>
                        </div>
                    </div>

                </div>
            </div>
        </PageTransition>
    )
}

export default Projects