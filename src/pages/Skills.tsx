import PageTransition from "../components/PageTransition"

// Importar iconos de tecnologías
import reactIcon from "../assets/icons-tech/react.svg"
import typescriptIcon from "../assets/icons-tech/typescript.svg"
import javascriptIcon from "../assets/icons-tech/icons8-javascript.svg"
import phpIcon from "../assets/icons-tech/php.svg"
import laravelIcon from "../assets/icons-tech/laravel.svg"
import nodeIcon from "../assets/icons-tech/icons8-node-js.svg"
import expressIcon from "../assets/icons-tech/express.svg"
import htmlIcon from "../assets/icons-tech/w3_html5-icon.svg"
import cssIcon from "../assets/icons-tech/icons8-css3.svg"
import tailwindIcon from "../assets/icons-tech/icons8-tailwind-css.svg"
import bootstrapIcon from "../assets/icons-tech/icons8-bootstrap.svg"
import sassIcon from "../assets/icons-tech/icons8-sass-64.png"
import mysqlIcon from "../assets/icons-tech/mysql.svg"
import mongoIcon from "../assets/icons-tech/mongo.svg"
import gitIcon from "../assets/icons-tech/git.svg"
import githubIcon from "../assets/icons-tech/github.svg"
import vscIcon from "../assets/icons-tech/vsc.svg"
import postmanIcon from "../assets/icons-tech/postman.svg"
import firebaseIcon from "../assets/icons-tech/firebase.svg"
import jwtIcon from "../assets/icons-tech/jwt.svg"
import reduxIcon from "../assets/icons-tech/redux.svg"
import nextIcon from "../assets/icons-tech/next-js.svg"
import vueIcon from "../assets/icons-tech/vuejs-icon.svg"
import jqueryIcon from "../assets/icons-tech/jquery-icon.svg"
import materialUiIcon from "../assets/icons-tech/material-ui-1.svg"
import sequelizeIcon from "../assets/icons-tech/sequelize.svg"
import javaIcon from "../assets/icons-tech/java.svg"
import springIcon from "../assets/icons-tech/spring.svg"
import pythonIcon from "../assets/icons-tech/python.svg"
import djangoIcon from "../assets/icons-tech/django.svg"

const Skills = () => {
    const technologies = [
        // Frontend
        {
            category: "Frontend",
            skills: [
                { name: "React", icon: reactIcon, level: "Avanzado", color: "from-blue-500 to-cyan-500" },
                { name: "TypeScript", icon: typescriptIcon, level: "Avanzado", color: "from-blue-600 to-blue-700" },
                { name: "JavaScript", icon: javascriptIcon, level: "Avanzado", color: "from-yellow-400 to-yellow-500" },
                { name: "HTML5", icon: htmlIcon, level: "Avanzado", color: "from-orange-500 to-red-500" },
                { name: "CSS3", icon: cssIcon, level: "Avanzado", color: "from-blue-500 to-blue-600" },
                { name: "Tailwind CSS", icon: tailwindIcon, level: "Avanzado", color: "from-cyan-400 to-cyan-500" },
                { name: "Bootstrap", icon: bootstrapIcon, level: "Intermedio", color: "from-purple-500 to-purple-600" },
                { name: "Sass", icon: sassIcon, level: "Intermedio", color: "from-pink-500 to-pink-600" },
                { name: "Next.js", icon: nextIcon, level: "Intermedio", color: "from-gray-700 to-gray-800" },
                { name: "Vue.js", icon: vueIcon, level: "Básico", color: "from-green-400 to-green-500" },
                { name: "Redux", icon: reduxIcon, level: "Intermedio", color: "from-purple-600 to-purple-700" },
                { name: "Material-UI", icon: materialUiIcon, level: "Intermedio", color: "from-blue-400 to-blue-500" },
                { name: "jQuery", icon: jqueryIcon, level: "Intermedio", color: "from-blue-600 to-indigo-600" }
            ]
        },
        // Backend
        {
            category: "Backend",
            skills: [
                { name: "PHP", icon: phpIcon, level: "Avanzado", color: "from-purple-600 to-indigo-600" },
                { name: "Laravel", icon: laravelIcon, level: "Avanzado", color: "from-red-500 to-red-600" },
                { name: "Node.js", icon: nodeIcon, level: "Avanzado", color: "from-green-500 to-green-600" },
                { name: "Express.js", icon: expressIcon, level: "Avanzado", color: "from-gray-600 to-gray-700" },
                { name: "Java", icon: javaIcon, level: "Intermedio", color: "from-orange-600 to-red-600" },
                { name: "Spring", icon: springIcon, level: "Básico", color: "from-green-600 to-green-700" },
                { name: "Python", icon: pythonIcon, level: "Básico", color: "from-yellow-500 to-blue-500" },
                { name: "Django", icon: djangoIcon, level: "Básico", color: "from-green-700 to-green-800" },
                { name: "JWT", icon: jwtIcon, level: "Intermedio", color: "from-pink-500 to-rose-500" },
                { name: "Sequelize", icon: sequelizeIcon, level: "Intermedio", color: "from-blue-500 to-indigo-500" }
            ]
        },
        // Bases de Datos
        {
            category: "Bases de Datos",
            skills: [
                { name: "MySQL", icon: mysqlIcon, level: "Avanzado", color: "from-blue-600 to-orange-500" },
                { name: "MongoDB", icon: mongoIcon, level: "Intermedio", color: "from-green-500 to-green-600" },
                { name: "Firebase", icon: firebaseIcon, level: "Intermedio", color: "from-yellow-500 to-orange-500" }
            ]
        },
        // Herramientas
        {
            category: "Herramientas",
            skills: [
                { name: "Git", icon: gitIcon, level: "Avanzado", color: "from-orange-500 to-red-500" },
                { name: "GitHub", icon: githubIcon, level: "Avanzado", color: "from-gray-700 to-gray-900" },
                { name: "VS Code", icon: vscIcon, level: "Avanzado", color: "from-blue-500 to-blue-600" },
                { name: "Postman", icon: postmanIcon, level: "Avanzado", color: "from-orange-500 to-orange-600" }
            ]
        }
    ]

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Avanzado":
                return "text-green-400"
            case "Intermedio":
                return "text-yellow-400"
            case "Básico":
                return "text-blue-400"
            default:
                return "text-gray-400"
        }
    }

    return (
        <PageTransition>
            <div className="min-h-screen px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                            Mis <span className="text-gray-300">Skills</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
                            Stack tecnológico con el que trabajo y mi nivel de experiencia en cada una
                        </p>
                    </div>

                    {/* Tecnologías que domino */}
                    <div className="mb-20">
                        {technologies.map((category, categoryIndex) => (
                            <div key={category.category} className="mb-16">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                                    {category.category}
                                </h3>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skill.name}
                                            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                            style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                                        >
                                            {/* Gradient background on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                            
                                            {/* Content */}
                                            <div className="relative z-10 flex flex-col items-center text-center">
                                                {/* Icon */}
                                                <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-500"
                                                    />
                                                </div>
                                                
                                                {/* Name */}
                                                <h4 className="text-white font-semibold text-xs mb-1 group-hover:text-white transition-colors duration-300">
                                                    {skill.name}
                                                </h4>
                                                
                                                {/* Level */}
                                                <span className={`text-xs font-medium ${getLevelColor(skill.level)} group-hover:text-white transition-colors duration-300`}>
                                                    {skill.level}
                                                </span>
                                                
                                                {/* Floating effect particles */}
                                                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                                                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                                            </div>
                                            
                                            {/* Tooltip */}
                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                                {skill.name} - {skill.level}
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default Skills
