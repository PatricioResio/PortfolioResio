// Todos los textos del sitio, por idioma. Los nombres propios (empresas, proyectos,
// tecnologías) viven en constants/index.js porque no se traducen.
export const translations = {
  en: {
    meta: { title: "Patricio Resio | Frontend Developer" },
    nav: {
      work: "Experience",
      projects: "Projects",
      tech: "Tech",
      education: "Education",
      contact: "Contact",
      role: "Frontend Developer",
      cv: "CV",
      viewCv: "View CV",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchTo: "Switch language",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Junior Frontend Developer",
      tagline:
        "I build fast, responsive interfaces with React, TypeScript and Tailwind, and I'm currently learning backend. Looking to join a development team where I can keep growing.",
      scroll: "Scroll to experience",
    },
    experience: {
      sub: "What I have done so far",
      title: "My experience.",
      items: {
        casa: {
          title: "Frontend Developer",
          date: "2026",
          points: [
            "Built a mobile-first landing page for an inn in Salta, Argentina.",
            "Implemented a gallery, room views, availability and contact features.",
            "Delivered the website in four languages.",
          ],
        },
        adopta: {
          title: "Frontend Contributor",
          date: "May 2024 – June 2024",
          points: [
            "Contributed components and sections to a web application within a shared team project.",
            "Worked on the science outreach website Ciencia Cerca (a brand from Spain): built the navbar, buttons and cards following the brand’s aesthetic.",
          ],
        },
        trashumar: {
          title: "Frontend Developer",
          date: "2023",
          points: [
            "Built a web platform for an independent publisher, including authentication, user profiles, a book catalog and project management.",
            "Integrated Firebase for authentication, database and storage.",
            "Built responsive components and improved performance, including image loading.",
          ],
        },
        escuela: {
          title: "Enrollment System (internship project)",
          date: "2013",
          points: [
            "Built a CRUD program for student registration.",
            "Developed independently with Visual Basic, C++ and SQL as internship work for a technical degree.",
          ],
        },
      },
    },
    works: {
      sub: "My work",
      title: "Projects.",
      intro:
        "These projects reflect my skills and experience in real-world work. Each one has a short description, a link to the code repository and, where available, a demo.",
      code: "Code",
      demo: "Demo",
      items: {
        casa: {
          description:
            "Mobile-first landing page for an inn in Salta, Argentina, with a gallery, room views, availability and contact, available in four languages. Built together with AleMot94.",
        },
        trashumar: {
          description:
            "Web platform for an independent publisher with authentication, user profiles, a book catalog and project management, using Firebase for auth, database and storage.",
        },
        ciencia: {
          description:
            "Science outreach website for a brand from Spain, whose owner publishes news and papers. I collaborated on the navbar, buttons and cards, following the brand's aesthetic.",
        },
      },
    },
    tech: { sub: "What I work with", title: "Tech stack." },
    education: {
      sub: "My background",
      title: "Education.",
      inProgress: "In progress",
      languagesTitle: "Languages",
      items: {
        unla: {
          degree: "Bachelor’s degree in Systems (Licenciatura en Sistemas)",
          date: "Since 2026",
        },
        coderhouse: {
          degree: "Web Development, JavaScript and React training",
          date: "2022 – 2023",
        },
        eet: {
          degree: "Technical high school diploma, networking and programming track",
          date: "2008 – 2013",
        },
      },
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "C1 · EF SET certified" },
      ],
    },
    contact: {
      sub: "Get in touch",
      title: "Contact",
      name: "Your name",
      namePh: "What's your name?",
      email: "Your email",
      emailPh: "What's your email?",
      message: "Your message",
      messagePh: "What do you want to say?",
      send: "Send",
      sending: "Sending...",
      success: "Thank you! I'll get back to you as soon as possible.",
      error: "Something went wrong. Please try again or write me directly by email.",
    },
    footer: {
      tagline:
        "Frontend Developer focused on creating modern, interactive and responsive web experiences.",
      rights: "All rights reserved.",
    },
  },

  es: {
    meta: { title: "Patricio Resio | Desarrollador Frontend" },
    nav: {
      work: "Experiencia",
      projects: "Proyectos",
      tech: "Tecnologías",
      education: "Educación",
      contact: "Contacto",
      role: "Desarrollador Frontend",
      cv: "CV",
      viewCv: "Ver CV",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      switchTo: "Cambiar idioma",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Frontend Jr.",
      tagline:
        "Construyo interfaces rápidas y responsive con React, TypeScript y Tailwind, y estoy aprendiendo backend. Busco sumarme a un equipo de desarrollo donde pueda seguir creciendo.",
      scroll: "Ir a experiencia",
    },
    experience: {
      sub: "Lo que hice hasta ahora",
      title: "Mi experiencia.",
      items: {
        casa: {
          title: "Desarrollador Frontend",
          date: "2026",
          points: [
            "Desarrollo de una landing page mobile-first para una hostería en Salta.",
            "Implementación de galería, visualización de habitaciones, disponibilidad y contacto.",
            "Desarrollo de una experiencia web en cuatro idiomas.",
          ],
        },
        adopta: {
          title: "Colaborador Frontend",
          date: "mayo 2024 – junio 2024",
          points: [
            "Colaboración en el desarrollo de componentes y secciones de una aplicación web dentro de un proyecto compartido.",
            "Participación en el sitio de divulgación científica Ciencia Cerca (marca de España): desarrollo de navbar, botones y cards siguiendo la estética de la marca.",
          ],
        },
        trashumar: {
          title: "Desarrollador Frontend",
          date: "2023",
          points: [
            "Desarrollo de una plataforma web para una editorial independiente, con autenticación, perfiles de usuario, catálogo de libros y gestión de proyectos.",
            "Integración de Firebase para autenticación, base de datos y almacenamiento.",
            "Trabajo en componentes responsive y mejoras de rendimiento, incluida la carga de imágenes.",
          ],
        },
        escuela: {
          title: "Sistema de inscripciones (proyecto de prácticas)",
          date: "2013",
          points: [
            "Desarrollo de un programa CRUD para el registro de alumnos.",
            "Desarrollo individual con Visual Basic, C++ y SQL, como trabajo de prácticas de la carrera técnica.",
          ],
        },
      },
    },
    works: {
      sub: "Mi trabajo",
      title: "Proyectos.",
      intro:
        "Estos proyectos reflejan mis habilidades y mi experiencia en trabajos reales. Cada uno tiene una breve descripción, el link al repositorio y, cuando hay, una demo.",
      code: "Código",
      demo: "Demo",
      items: {
        casa: {
          description:
            "Landing page mobile-first para una hostería en Salta, con galería, visualización de habitaciones, disponibilidad y contacto, disponible en cuatro idiomas. Desarrollada junto a AleMot94.",
        },
        trashumar: {
          description:
            "Plataforma web para una editorial independiente con autenticación, perfiles de usuario, catálogo de libros y gestión de proyectos, usando Firebase para autenticación, base de datos y almacenamiento.",
        },
        ciencia: {
          description:
            "Sitio de divulgación científica para una marca de España, cuyo dueño publica noticias y papers. Colaboré en la navbar, los botones y las cards, siguiendo la estética de la marca.",
        },
      },
    },
    tech: { sub: "Con qué trabajo", title: "Tecnologías." },
    education: {
      sub: "Mi formación",
      title: "Educación.",
      inProgress: "En curso",
      languagesTitle: "Idiomas",
      items: {
        unla: {
          degree: "Licenciatura en Sistemas",
          date: "Desde 2026",
        },
        coderhouse: {
          degree: "Formación en Desarrollo Web, JavaScript y React",
          date: "2022 – 2023",
        },
        eet: {
          degree: "Bachiller técnico con orientación en redes y programación",
          date: "2008 – 2013",
        },
      },
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "C1 · certificado por EF SET" },
      ],
    },
    contact: {
      sub: "Hablemos",
      title: "Contacto",
      name: "Tu nombre",
      namePh: "¿Cómo te llamás?",
      email: "Tu email",
      emailPh: "¿Cuál es tu email?",
      message: "Tu mensaje",
      messagePh: "¿Qué querés contarme?",
      send: "Enviar",
      sending: "Enviando...",
      success: "¡Gracias! Te respondo a la brevedad.",
      error: "Algo salió mal. Probá de nuevo o escribime directamente por email.",
    },
    footer: {
      tagline:
        "Desarrollador Frontend enfocado en crear experiencias web modernas, interactivas y responsive.",
      rights: "Todos los derechos reservados.",
    },
  },
};
