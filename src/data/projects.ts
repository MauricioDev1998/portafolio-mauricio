import type { Project } from "../types";

// Agrega aquí tus proyectos: título, descripción, tecnologías y enlaces.
// Los campos context, highlights, repoUrl, demoUrl, image y privateNote son opcionales.
// Si un proyecto no tiene repo ni demo públicos, usa privateNote para explicarlo.
// Los tres primeros se muestran como destacados en el inicio.
// Si usas una tecnología nueva, agrégala también en src/pages/Skills.tsx.
export const projects: Project[] = [
    {
        title: "GRP — Recursos Financieros (Egresos)",
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
            "Plataforma full stack para digitalizar trámites de desarrollo urbano (constancias de alineamiento y número oficial, cédulas de zonificación, licencias de uso de suelo y de publicidad). Sustituye un flujo en papel por un workflow con control de roles, firma digital y trazabilidad completa del expediente, desde el ingreso ciudadano sin registro (folio + token de seguimiento) hasta el archivo, cumpliendo requisitos de auditoría ISO 9001/37001.",
        highlights: [
            "21 trámites con su flujo completo, eliminando el uso de hojas de Excel y la recaptura manual de información que el contribuyente ya había proporcionado.",
            "Motor de workflow configurable por base de datos: estados, transiciones, roles y áreas se definen por catálogo — agregar un trámite nuevo no requiere programar su flujo.",
            "Firma con e.firma del SAT en el navegador dentro de una cadena de autorización de tres niveles; el PDF se regenera acumulando firmas sin perder datos.",
            "Generación de documentos oficiales en PDF (constancias, cédulas, licencias, oficios y órdenes de pago) con folio y código QR de verificación.",
            "Cálculo de derechos (UMA y Código Financiero) y de plazos en días hábiles, con reportes de cumplimiento por trámite y por técnico.",
            "Mapa de zonificación: al marcar el predio, el sistema propone su clave y normas a partir de unos 4,900 polígonos del plan municipal importados de QGIS a MySQL espacial.",
            "Avisos en tiempo real con WebSockets (campanita, bandejas y detalle del expediente), resueltos desde el propio workflow, y correos al ciudadano con adjuntos generados dinámicamente.",
            "Endurecimiento de seguridad: archivos sensibles en almacenamiento privado servidos solo por endpoints autenticados, rate limiting y revocación de tokens.",
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
            "Leaflet",
            "Pusher",
            "Vitest",
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
        title: "NORTE — Tienda en línea de ropa",
        context: "Proyecto personal · E-commerce full stack",
        description:
            "Tienda en línea de ropa para hombre y mujer con catálogo, carrito, checkout con Mercado Pago y panel de administración. Está dividida en una API REST (NestJS, Prisma y PostgreSQL), organizada por módulos con capas de dominio, aplicación e infraestructura, y un frontend en React + TypeScript instalable como PWA.",
        highlights: [
            "Catálogo con variantes por talla y color (cada una con su SKU y stock), filtros por categoría, talla, color y rango de precio, además de ofertas, novedades y búsqueda.",
            "Checkout con Mercado Pago: el stock se descuenta dentro de una transacción que solo procede si hay existencias, para evitar sobreventa. El webhook confirma el pago consultándolo al proveedor en lugar de confiar en la notificación, y si el pago se rechaza o el pedido se cancela, el stock regresa al inventario.",
            "Pedidos con envío a domicilio o recoger en tienda, seguimiento de estatus (pendiente, pagado, enviado, entregado) con historial y guía de paquetería, y correos al cliente.",
            "Cupones (porcentaje, monto fijo y envío gratis), favoritos, reseñas y avisos por correo cuando una talla agotada vuelve a tener stock.",
            "Panel de administración con dashboard de ventas, gestión de productos (edición en lote, duplicado y carga de imágenes), pedidos con exportación a CSV, clientes y categorías.",
            "Listados preparados para catálogos grandes: paginación con orden estable, consultas que traen solo lo que se muestra e índices compuestos y de trigramas (pg_trgm) para buscar por nombre o SKU sin recorrer toda la tabla.",
            "Seguridad con JWT, roles de cliente y administrador, recuperación de contraseña, rate limiting y cabeceras con Helmet. API documentada con Swagger, pruebas con Jest y Vitest, Docker Compose para levantar todo el stack y CI en GitHub Actions.",
        ],
        technologies: [
            "NestJS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "React",
            "TanStack Query",
            "Zustand",
            "Tailwind CSS",
            "Vite",
            "Mercado Pago",
            "JWT",
            "Swagger",
            "Jest",
            "Vitest",
            "Docker",
            "GitHub Actions",
        ],
        links: [
            { label: "Código frontend", url: "https://github.com/MauReyes1998/ecommerce-norte-front" },
            { label: "Código backend", url: "https://github.com/MauReyes1998/ecommerce-norte-back" },
        ],
        image: "/images/norte-ecommerce.png",
    },
    {
        title: "Punto de venta para abarrotes",
        context: "Proyecto personal · Sistema POS full stack",
        description:
            "Sistema de punto de venta para una tienda de abarrotes: cobro en caja, control de turnos con corte, inventario, clientes con crédito (fiado) y reportes. Está dividido en un frontend web (React + TypeScript, instalable como PWA), una API REST (Node.js, Express, Prisma y MySQL) y una app en Flutter que forma parte del mismo sistema.",
        highlights: [
            "Turnos de caja con corte: cada cajero abre y cierra su turno y el sistema calcula el efectivo esperado (fondo inicial, ventas en efectivo y abonos de clientes, sin contar las ventas canceladas), mostrando el faltante o sobrante junto con el desglose de tarjeta, transferencia y fiado.",
            "Ventas con pagos mixtos (efectivo, tarjeta, transferencia, vale y fiado), cambio, descuentos que requieren el PIN de un supervisor y cancelaciones que regresan el stock al inventario.",
            "Venta a granel por monto (por ejemplo $20 de queso se registra como 0.25 kg al precio del catálogo) y presentaciones con equivalencia en inventario: un six-pack descuenta 6 piezas.",
            "Consistencia del dinero: las operaciones críticas corren en transacciones con bloqueo de filas para evitar sobreventa, cancelaciones dobles o dos turnos abiertos al mismo tiempo; los cálculos se hacen en centavos y los pagos deben sumar exactamente el total.",
            "Crédito a clientes con abonos ligados al turno de quien los cobra; el saldo lo mantiene un trigger de MySQL a partir del historial de movimientos.",
            "Seguridad: roles (administrador, cajero y almacén), autenticación con JWT, contraseñas con hash, límite de intentos en login y PIN, y respuestas de la API sin datos sensibles.",
            "Interfaz pensada para la caja: lector de código de barras, modo claro y oscuro, aviso al perder la conexión e instalación como PWA. Pruebas unitarias con Vitest para los cálculos de venta, corte y abonos.",
        ],
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "TanStack Query",
            "React Hook Form",
            "Zod",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "Prisma",
            "MySQL",
            "JWT",
            "Vitest",
            "Flutter",
        ],
        image: "/images/pos-abarrotes.png",
    },
    {
        title: "Citas y reservaciones — Agenda en línea para negocios",
        context: "Proyecto personal · Sistema de citas full stack",
        description:
            "Sistema de reservaciones para negocios que trabajan con citas (barberías, consultorios, salones de uñas, talleres): el cliente reserva en línea sin crear cuenta y el dueño administra su agenda desde un panel. Está dividido en una API REST (NestJS, Prisma y PostgreSQL) y un frontend en React + TypeScript. La marca de ejemplo es una barbería, pero nombre, WhatsApp y dirección se cambian desde un solo archivo de configuración.",
        highlights: [
            "Reserva en tres pasos: servicio, día y hora (con quién, si hay más de una persona) y datos de contacto. Al confirmar, el cliente recibe un código para ver o cancelar su cita, puede guardarla en Google Calendar y avisar por WhatsApp.",
            "Sin citas dobles: antes de guardar, los horarios libres se recalculan dentro de una transacción Serializable de PostgreSQL. Si dos personas reservan el mismo horario al mismo tiempo, la segunda recibe un aviso para elegir otro.",
            "El cálculo de horarios libres es una función pura, sin base de datos ni reloj propio, cubierta con pruebas unitarias en Jest. Considera el horario del negocio, la duración del servicio, las citas de cada persona y la anticipación mínima.",
            "Reglas de agenda configurables por entorno: cada cuántos minutos arranca un horario, anticipación mínima, días hacia adelante y horas límite para cancelar en línea.",
            "Panel del dueño con la agenda del día, filtro por persona, resumen de citas e ingreso, cambio de estatus (completada, no asistió, cancelada) y contacto directo con el cliente por WhatsApp o llamada. También administra servicios, equipo y horario del negocio.",
            "Seguridad: autenticación con JWT para el panel, validación de entradas con class-validator, rate limiting en reservas y login, y cabeceras con Helmet.",
        ],
        technologies: [
            "NestJS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "React",
            "TanStack Query",
            "React Router",
            "Tailwind CSS",
            "Vite",
            "JWT",
            "Jest",
        ],
        image: "/images/citas-barberia.png",
    },
    {
        title: "PULSO Gym — Landing page para gimnasio",
        context: "Proyecto personal · Landing page",
        description:
            "Landing page de una sola página para un gimnasio: hero, beneficios, galería de instalaciones, planes, horarios con mapa, preguntas frecuentes y un formulario que arma el mensaje y abre WhatsApp, sin backend. Pensada como plantilla para vender: nombre, WhatsApp, planes, horarios, preguntas y fotos se cambian desde un solo archivo de configuración.",
        highlights: [
            "Animaciones escritas en Sass con variables, mixins y loops: el título entra línea por línea, la foto del hero hace un zoom lento, hay franjas de texto en movimiento continuo y el plan destacado tiene un borde de luz que gira.",
            "Las secciones aparecen al hacer scroll con un IntersectionObserver, y las tarjetas entran escalonadas con delays que genera un @for de Sass.",
            "Detalles de interacción: un brillo en las tarjetas que sigue al cursor, contadores que suben al aparecer, header que pasa de transparente a sólido con barra de progreso de lectura, y un acordeón con transición suave.",
            "Accesible y responsive: respeta la preferencia de reducir movimiento, el menú y el acordeón usan atributos ARIA, y el diseño se adapta de celular a escritorio.",
        ],
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Sass"],
        image: "/images/pulso-gym.png",
    },
    {
        title: "Portafolio personal",
        description:
            "Sitio personal para mostrar mi experiencia, skills y proyectos. SPA con diseño glassmorphism, navegación con React Router y formulario de contacto conectado a una API.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        repoUrl: "https://github.com/MauricioDev1998/portafolio-mauricio",
    },
];
