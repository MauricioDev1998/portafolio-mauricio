const paths = {
    mail: ["M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"],
    location: [
        "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
        "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    ],
    briefcase: ["M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"],
    lock: ["M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"],
    check: ["M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"],
    chevronDown: ["M19 9l-7 7-7-7"],
    arrowRight: ["M14 5l7 7m0 0l-7 7m7-7H3"],
}

export type IconName = keyof typeof paths

interface IconProps {
    name: IconName
    className?: string
}

const Icon = ({ name, className = "w-5 h-5" }: IconProps) => (
    <svg
        className={`flex-shrink-0 ${className}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        {paths[name].map((d) => (
            <path key={d} strokeLinecap="round" strokeLinejoin="round" d={d} />
        ))}
    </svg>
)

export default Icon
