import { Link } from "react-router-dom"
import PageTransition from "../components/PageTransition"

const NotFound = () => {
    return (
        <PageTransition>
            <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-8xl md:text-9xl font-bold text-white/10 mb-4 select-none">404</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Página no <span className="text-gray-300">encontrada</span>
                    </h1>
                    <p className="text-lg text-gray-200 mb-10 leading-relaxed">
                        La página que buscas no existe o fue movida. Regresa al inicio para seguir explorando mi portafolio.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </PageTransition>
    )
}

export default NotFound
