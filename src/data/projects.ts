import type { Project } from "../types";

// Agrega aquí tus proyectos: título, descripción, tecnologías y enlaces.
// Los campos context, highlights, repoUrl, demoUrl, image y privateNote son opcionales.
// Si un proyecto no tiene repo ni demo públicos, usa privateNote para explicarlo.
export const projects: Project[] = [
    {
        title: "Sistema de Gestión de Trámites Urbanos",
        context: "Gobierno municipal · Estado de México",
        description:
            "Plataforma full stack para digitalizar trámites de desarrollo urbano (constancias de alineamiento, número oficial, licencias). Sustituye un flujo en papel por un workflow con control de roles, firma digital y trazabilidad completa del expediente, desde el ingreso ciudadano sin registro (folio + token de seguimiento) hasta el archivo, cumpliendo requisitos de auditoría ISO 9001/37001.",
        highlights: [
            "Digitalizó más de 18 trámites distintos, eliminando el uso de hojas de Excel y la recaptura manual de información que el contribuyente ya había proporcionado.",
            "Lideré el equipo de 3 desarrolladores que construyó el sistema, bajo principios de Clean Architecture.",
            "Motor de workflow configurable por base de datos: estados, transiciones, roles y áreas se definen por catálogo — agregar un trámite nuevo no requiere programar su flujo.",
            "Cadena de autorización de tres niveles con firma digital embebida en los documentos: re-validación de contraseña, imágenes de firma cifradas en reposo (AES) y regeneración del PDF acumulando firmas sin perder datos.",
            "Endurecimiento de seguridad: archivos sensibles en almacenamiento privado servidos solo por endpoints autenticados, rate limiting y revocación de tokens.",
            "Generación de documentos oficiales en PDF (constancias, oficios, órdenes de pago) con folio y código QR de verificación.",
            "Notificaciones casi en tiempo real resueltas desde el propio workflow (a quién le toca actuar) y correos al ciudadano con adjuntos generados dinámicamente.",
            "Historial de movimientos por expediente con generación automática de minutas para auditorías.",
        ],
        technologies: [
            "Laravel",
            "MySQL",
            "React",
            "TypeScript",
            "TanStack Query",
            "React Hook Form",
            "Zod",
            "Tailwind CSS",
        ],
        diagrams: [
            {
                title: "Ciclo de vida del expediente",
                image: "/images/ciclo-de-vida-expediente.svg",
            },
            {
                title: "Autorización con firma digital embebida",
                image: "/images/autorizacion-firma-digital.svg",
            },
            {
                title: "Arquitectura general",
                image: "/images/arquitectura-general.svg",
            },
        ],
        privateNote:
            "Proyecto para cliente gubernamental: el código y las pantallas son privados. Los diagramas y descripciones son de autoría propia, sin datos del cliente.",
    },
    {
        title: "Portafolio personal",
        description:
            "Sitio personal para mostrar mi experiencia, skills y proyectos. SPA con diseño glassmorphism, navegación con React Router y formulario de contacto conectado a una API.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        repoUrl: "https://github.com/MauricioDev1998/portafolio-mauricio",
    },
];
