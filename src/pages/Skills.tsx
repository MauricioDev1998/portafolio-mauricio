import PageTransition from "../components/PageTransition"

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
import sassIcon from "../assets/icons-tech/icons8-sass-64.png"
import mysqlIcon from "../assets/icons-tech/mysql.svg"
import gitIcon from "../assets/icons-tech/git.svg"
import githubIcon from "../assets/icons-tech/github.svg"
import postmanIcon from "../assets/icons-tech/postman.svg"
import jwtIcon from "../assets/icons-tech/jwt.svg"
import vueIcon from "../assets/icons-tech/vuejs-icon.svg"
import tanstackQueryIcon from "../assets/icons-tech/tanstack-query.svg"
import reactHookFormIcon from "../assets/icons-tech/react-hook-form.svg"
import zodIcon from "../assets/icons-tech/zod.svg"
import viteIcon from "../assets/icons-tech/vite.svg"
import dockerIcon from "../assets/icons-tech/docker.svg"
import npmIcon from "../assets/icons-tech/npm.svg"
import composerIcon from "../assets/icons-tech/composer.svg"
import graphqlIcon from "../assets/icons-tech/graphql.svg"
import oracleIcon from "../assets/icons-tech/oracle.svg"
import nestIcon from "../assets/icons-tech/nestjs.svg"
import postgresIcon from "../assets/icons-tech/postgresql.svg"
import prismaIcon from "../assets/icons-tech/prisma.svg"
import nuxtIcon from "../assets/icons-tech/nuxtdotjs.svg"
import jestIcon from "../assets/icons-tech/jest.svg"
import vitestIcon from "../assets/icons-tech/vitest.svg"
import flutterIcon from "../assets/icons-tech/flutter.svg"
import swaggerIcon from "../assets/icons-tech/swagger.svg"
import githubActionsIcon from "../assets/icons-tech/githubactions.svg"

type Skill = {
    name: string
    icon: string
    /** Icono monocromático oscuro: se pinta en blanco para que se vea sobre el fondo. */
    dark?: boolean
}

// Solo tecnologías que aparecen en los proyectos de src/data/projects.ts.
// Si agregas un proyecto con una tecnología nueva, agrégala también aquí.
const technologies: { category: string; skills: Skill[] }[] = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: reactIcon },
            { name: "TypeScript", icon: typescriptIcon },
            { name: "JavaScript", icon: javascriptIcon },
            { name: "Vue.js", icon: vueIcon },
            { name: "Nuxt", icon: nuxtIcon, dark: true },
            { name: "Tailwind CSS", icon: tailwindIcon },
            { name: "Sass", icon: sassIcon },
            { name: "HTML5", icon: htmlIcon },
            { name: "CSS3", icon: cssIcon },
            { name: "TanStack Query", icon: tanstackQueryIcon },
            { name: "React Hook Form", icon: reactHookFormIcon },
            { name: "Zod", icon: zodIcon },
            { name: "Flutter", icon: flutterIcon, dark: true },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "PHP", icon: phpIcon },
            { name: "Laravel", icon: laravelIcon },
            { name: "Node.js", icon: nodeIcon },
            { name: "NestJS", icon: nestIcon, dark: true },
            { name: "Express.js", icon: expressIcon },
            { name: "GraphQL", icon: graphqlIcon, dark: true },
            { name: "Prisma", icon: prismaIcon, dark: true },
            { name: "JWT", icon: jwtIcon },
            { name: "Swagger", icon: swaggerIcon, dark: true },
        ],
    },
    {
        category: "Bases de Datos",
        skills: [
            { name: "MySQL", icon: mysqlIcon },
            { name: "PostgreSQL", icon: postgresIcon, dark: true },
            { name: "Oracle", icon: oracleIcon, dark: true },
        ],
    },
    {
        category: "Testing y Herramientas",
        skills: [
            { name: "Jest", icon: jestIcon, dark: true },
            { name: "Vitest", icon: vitestIcon, dark: true },
            { name: "Docker", icon: dockerIcon },
            { name: "GitHub Actions", icon: githubActionsIcon, dark: true },
            { name: "Git", icon: gitIcon },
            { name: "GitHub", icon: githubIcon, dark: true },
            { name: "Postman", icon: postmanIcon },
            { name: "Vite", icon: viteIcon },
            { name: "npm", icon: npmIcon },
            { name: "Composer", icon: composerIcon },
        ],
    },
]

const Skills = () => {
    return (
        <PageTransition>
            <div className="min-h-screen px-6 py-20">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Mis <span className="text-gray-300">Skills</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Las tecnologías con las que construí los proyectos de este portafolio
                        </p>
                    </div>

                    <div className="space-y-16">
                        {technologies.map((category, categoryIndex) => (
                            <section key={category.category}>
                                <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 pb-4 border-b border-white/10">
                                    {category.category}
                                </h2>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skill.name}
                                            className="animate-fade-in flex flex-col items-center text-center gap-3 bg-white/5 backdrop-blur-xl rounded-2xl px-4 py-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors duration-300"
                                            style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 40)}ms` }}
                                        >
                                            <img
                                                src={skill.icon}
                                                alt=""
                                                className={`w-10 h-10 object-contain ${skill.dark ? 'brightness-0 invert opacity-90' : ''}`}
                                            />
                                            <span className="text-white font-medium text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default Skills
