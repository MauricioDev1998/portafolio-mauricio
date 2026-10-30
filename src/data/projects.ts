import type { Project } from "../types";

// Agrega aquí tus proyectos: título, descripción, tecnologías y enlaces.
// Los campos context, highlights, repoUrl, demoUrl, image y privateNote son opcionales.
// Si un proyecto no tiene repo ni demo públicos, usa privateNote para explicarlo.
export const projects: Project[] = [
    {
        title: "GRP Metepec — Recursos Financieros (Egresos)",
        context: "Gobierno municipal · Estado de México",
        description:
            "Rediseño completo del módulo de Egresos del sistema financiero municipal: migración de una aplicación de escritorio Java/Oracle a una plataforma web (Laravel, GraphQL, Vue/Nuxt), reimplementando el ciclo de ejecución del gasto público -Comprometido, Devengado y Pagado- con una arquitectura por capas inspirada en DDD y cumpliendo la normatividad contable gubernamental (CONAC).",
        highlights: [
            "Diseñé el motor de doble partida contable: cada movimiento (comprometido, devengado, pagado y sus reversiones) genera pólizas y asientos balanceados, resolviendo la cuenta contable correcta de forma automática según partida presupuestal y etapa, contra la matriz oficial de cuentas.",
            "Implementé la cadena completa de reversión y cancelación (Comprometido, Devengado, Pagado) con pólizas de contrapartida que invierten cargo/abono, preservando trazabilidad total para auditoría.",
            "Organizo el código en capas Domain / Application / Infrastructure (Laravel) para separar reglas de negocio, casos de uso y acceso a datos, y mantener la lógica de dinero más fácil de testear y auditar.",
            "API GraphQL (Lighthouse) protegida por permisos a nivel de query/mutation, consumida por un frontend Vue/Nuxt con formularios reactivos: captura de clave programática por segmentos, calendarización mensual de partidas y balanceo automático debe/haber.",
            "Integración con Oracle, coexistiendo con paquetes PL/SQL heredados para Transferencias y Modificaciones Presupuestarias (traspasos, recalendarizaciones), delegando ahí donde ya existía lógica de producción probada en vez de reescribir todo desde cero.",
        ],
        technologies: [
            "Laravel",
            "Lighthouse GraphQL",
            "Oracle",
            "PHP",
            "Vue",
            "Nuxt",
            "TypeScript",
            "Tailwind CSS",
        ],
        diagrams: [
            {
                title: "Arquitectura general",
                image: "/images/grp-arquitectura-general.svg",
            },
            {
                title: "Ciclo del gasto y reversiones",
                image: "/images/grp-ciclo-del-gasto.svg",
            },
            {
                title: "Motor de doble partida (pólizas)",
                image: "/images/grp-motor-doble-partida.svg",
            },
        ],
        privateNote:
            "Proyecto para cliente gubernamental: el código y las pantallas son privados. La descripción es de autoría propia, sin datos del cliente ni cifras reales.",
    },
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
