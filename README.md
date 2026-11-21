<div align="center">

# 🛡️ Iván Montes de Oca | Personal Portfolio & Labs

[![Status](https://img.shields.io/badge/Status-Active%20Development-10b981?style=for-the-badge&logo=statuspage&logoColor=white)](#)
[![Stack](https://img.shields.io/badge/React%2018-Vite%20%7C%20TailwindCSS-06b6d4?style=for-the-badge&logo=react&logoColor=white)](#)
[![Target](https://img.shields.io/badge/Domain-ivanmontesdeoca.dev-8b5cf6?style=for-the-badge&logo=googlechrome&logoColor=white)](#)
[![Deployment](https://img.shields.io/badge/Deployed%20with-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](#)

<p align="center">
  <b>Portafolio personal interactivo y de alto rendimiento orientado a Seguridad Ofensiva (Pentesting), Administración de Infraestructura Linux/Docker y Desarrollo de Software.</b>
</p>

[Ver Demo en Vivo](https://ivanmontesdeoca.dev) • [Reportar Bug](https://github.com/ivanmontesdeoca00/portfolio-dev/issues) • [Contacto Directo](mailto:Ivanmontesdeoca00@icloud.com)

</div>

---

## ⚡ Descripción General

Este proyecto representa el código fuente de mi portafolio profesional e interactivo (`ivanmontesdeoca.dev`). Diseñado con una estética técnica inmersiva (*dark-mode*, interfaces HUD, simulación de terminal Unix interactiva y arquitectura *Bento Grid* inspirada en plataformas modernas de diseño).

El objetivo principal es concentrar y documentar:
* **Prácticas Hands-on de Ciberseguridad:** Retos de explotación web (OWASP Top 10), escaneo y enumeración con Nmap, entornos vulnerables en Docker y preparación orientada a la certificación **eJPT**.
* **Ingeniería de Software & Sistemas:** Aplicaciones de escritorio modulares en Python con SQLite, software orientado a objetos en Java y despliegue multi-servicio en Linux/Docker.

---

## 🧰 Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Estilos & UI** | [Tailwind CSS v4](https://tailwindcss.com/) (Paleta personalizada *Cyber Obsidian*) |
| **Iconografía** | [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/) |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) (Continuous Deployment sincronizado con rama `main`) |
| **Gestión DNS & SSL** | Dominio de primer nivel `.dev` con HSTS obligatorio y proxy TLS |

---

## 📂 Arquitectura del Proyecto

```text
ivan-portfolio/
├── public/
│   ├── projects/                  # Capturas de pantalla y visuales de laboratorios
│   └── cv-ivan-montes-de-oca.pdf  # Curriculum técnico descargable
│
├── src/
│   ├── components/
│   │   ├── layout/                # Navbar flotante y Footer con canales de contacto
│   │   ├── sections/              # Hero (Terminal), BentoAbout, ProjectsGrid, Experience
│   │   └── ui/                    # Componentes modulares y reutilizables
│   │
│   ├── data/                      # Base de datos local desacoplada
│   │   ├── projectsData.js        # Repositorios, descripciones y tags
│   │   ├── skillsData.js          # Capacidades ofensivas, de sistemas y código
│   │   └── experienceData.js      # Trayectoria técnica y formación académica
│   │
│   ├── App.jsx                    # Ensamblador principal de vistas
│   ├── index.css                  # Directivas de tema y variables Tailwind v4
│   └── main.jsx                   # Punto de entrada del bundle React
│
├── postcss.config.js              # Configuración de procesado CSS
└── vite.config.js                 # Configuración de empaquetado y build
```

---

## 🚀 Instalación y Ejecución Local

Para clonar y correr este entorno en tu máquina local:

```bash
# 1. Clonar el repositorio
git clone https://github.com/ivanmontesdeoca00/portfolio-dev.git

# 2. Ingresar al directorio
cd portfolio-dev

# 3. Instalar dependencias
npm install

# 4. Levantar el servidor de desarrollo
npm run dev
```

El servidor estará disponible por defecto en `http://localhost:5173`.

---

## 🛠️ Build de Producción

Para compilar el proyecto antes de desplegar a producción:

```bash
npm run build
```

Generará el directorio optimizado `/dist` listo para servir en cualquier CDN o plataforma de edge hosting.

---

## 🌐 Conectar con el Desarrollador

* **LinkedIn:** [Iván Montes de Oca](https://www.linkedin.com/in/iv%C3%A1n-kevin-montes-de-oca-74986a24b/)
* **GitHub:** [@ivanmontesdeoca00](https://github.com/ivanmontesdeoca00)
* **Correo:** [Ivanmontesdeoca00@icloud.com](mailto:Ivanmontesdeoca00@icloud.com)

---

<div align="center">
  <sub>Diseñado y desarrollado por Iván Montes de Oca • 2026</sub>
</div>
