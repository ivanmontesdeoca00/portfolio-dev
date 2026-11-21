export const projectsData = [
  {
    id: "thm-pentesting-lab",
    title: "Cybersecurity & Pentesting Lab",
    category: "security",
    description: "Laboratorio multi-entorno para auditoría web ofensiva (OWASP Top 10), análisis de vulnerabilidades, escaneo de red con Nmap y resolución práctica de vectores de ataque en TryHackMe (eJPT Path).",
    tags: ["Linux", "Nmap", "OWASP", "Bash", "TryHackMe", "Docker"],
    image: "/projects/thm-labs.png",
    github: "https://tryhackme.com/p/ivanmontesdeoca00",
    featured: true,
  },
  {
    id: "java-movie-manager-db",
    title: "Gestor de Películas con Base de Datos SQL",
    category: "development",
    description: "Aplicación de escritorio desarrollada en Java bajo arquitectura MVC y conexión relacional mediante JDBC. Implementa operaciones CRUD completas, manejo de transacciones, prepared statements para prevención de SQL Injection y control robusto de excepciones.",
    tags: ["Java", "JDBC", "SQL", "MVC", "OOP", "DBeaver"],
    image: "/projects/java-movie-manager.png", // Guarda tu captura con este nombre en public/projects/
    github: "https://github.com/ivanmontesdeoca00/managamentMovies",
    featured: true,
  },

  {
    id: "java-oop-arcade",
    title: "Simulaciones & Videojuegos en Java (POO)",
    category: "development",
    description: "Proyectos y aplicaciones gráficas orientadas a objetos implementando lógica de juego, colisiones, modularidad y persistencia local.",
    tags: ["Java", "POO", "Greenfoot", "AWT"],
    image: "/projects/java-projects.png",
    github: "https://github.com/ivanmontesdeoca00/RallyX-proyect",
    featured: false,
  },
  {
    id: "docker-local-infrastructure",
    title: "Infraestructura Local Multi-Contenedor",
    category: "systems",
    description: "Despliegue automatizado de entornos de base de datos aislados (PostgreSQL, MySQL) y herramientas de escaneo en macOS/Linux mediante Docker Compose.",
    tags: ["Docker", "PostgreSQL", "MySQL", "Linux CLI"],
    image: "/projects/docker-lab.png",
    featured: false,
  }
];
