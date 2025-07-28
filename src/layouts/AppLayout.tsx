import { Outlet, useLocation, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import bgHeader from "../assets/bg-header.jpg"

const AppLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre mí', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Proyectos', path: '/projects' },
        { name: 'Contacto', path: '/contact' }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: `url(${bgHeader})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-white/5 to-gray-300/10 rounded-full backdrop-blur-3xl border border-white/10 animate-pulse"></div>
                <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-tr from-gray-400/10 to-white/5 rounded-full backdrop-blur-2xl border border-white/5 animate-pulse delay-1000"></div>
                
                <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-gray-300/40 rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 left-3/5 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1200"></div>
                
                <div className="absolute top-0 left-1/3 w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-30"></div>
                <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-gray-300/30 to-transparent opacity-20"></div>
                <div className="absolute top-1/2 left-10 h-px w-40 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-25"></div>
            </div>

            <header className={`fixed w-full z-50 transition-all duration-700 ${
                scrolled 
                    ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' 
                    : 'bg-transparent'
            }`}>
                <nav className="container mx-auto px-6 py-5">
                    <div className="flex items-center justify-between">
                        <Link 
                            to="/" 
                            className="text-3xl font-bold text-white hover:text-gray-300 transition-all duration-300 relative group"
                        >
                            <span className="relative z-10 tracking-wider">Mauricio Reyes</span>
                            <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110 backdrop-blur-sm"></div>
                        </Link>

                        <div className="hidden md:flex space-x-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 group rounded-xl ${
                                        location.pathname === item.path 
                                            ? 'text-white bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg' 
                                            : 'text-gray-300 hover:text-white hover:bg-white/5 backdrop-blur-sm'
                                    }`}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full transition-all duration-300 ${
                                        location.pathname === item.path 
                                            ? 'opacity-100 scale-100 shadow-md shadow-white/50' 
                                            : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                                    }`}></span>
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden relative w-12 h-12 flex items-center justify-center focus:outline-none bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}></span>
                                <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}></span>
                            </div>
                        </button>
                    </div>

                    <div className={`md:hidden overflow-hidden transition-all duration-300 ${
                        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="pt-6 pb-4 space-y-2 bg-black/80 backdrop-blur-xl rounded-2xl mt-6 border border-white/10 shadow-2xl">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`block px-6 py-3 text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-xl ${
                                        location.pathname === item.path 
                                            ? 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg' 
                                            : 'hover:bg-white/5 backdrop-blur-sm'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            <main className="relative z-10 pt-20 min-h-screen">
                <div className="animate-fade-in">
                    <Outlet />
                </div>
            </main>

            <footer className="relative z-10 bg-black/60 backdrop-blur-xl border-t border-white/10">
                <p className="text-gray-400 text-sm leading-relaxed text-center py-4">
                    Desarrollado por Mauricio Reyes - Todos los derechos reservados © {new Date().getFullYear()}
                </p>
            </footer>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl shadow-black/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 z-50 border border-white/20 ${
                    scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    )
}

export default AppLayout