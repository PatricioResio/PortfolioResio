import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  ecommerce,
  tailwind,
  git,
  intership,
  threejs,
  inprogress,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer in progres..",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "First app created",
    company_name: "My Highschool",
    icon: intership,
    iconBg: "#E6DEDD",
    date: "Agu 2013 - Dec 2013",
    points: [
      "Create a CRUD program for students registrations",
      "Developing by my own, using Visual Basic code processor, C++, SQL",
      "Back in my Highschool formation",
      "This was 'my internship work' for my technical title.",
    ],
  },
  {
    title: "Front-end developer",
    company_name: "Trashumar ediciones",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 2023 - Actualy",
    points: [
      "Developing and maintaining web application using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Front end react js",
    company_name: "Coderhouse",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "At this point I had already been studying on my own for 6 months",
      "This was my first 'carreer' named front-end react developer ",
      "Consist in 3 bootscamps, Web Developer, Javascript and React js",
    ],
  },
  {
    title: "Front-end developer",
    company_name: "La Casa de los vientos",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Actualy",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with a partner who develops backend",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Final project Ecommerce",
    description:
      "Web-based platform that allows users to search, select and buy products",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/PatricioResio/ProyectoFinalReactResio",
  },
  {
    name: "Trashumar Ediciones",
    description:
      "Web application for a editorial that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: inprogress,
    source_code_link: "https://github.com/PatricioResio/TrashumarEdiciones",
  },
  {
    name: "La casa de los vientos",
    description:
      "A comprehensive single page app, for a inn, who works with many nations travelers, that enables users to see the place, take reservs, do pays and contact with owners, developing with AleMot94.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "React TS",
        color: "pink-text-gradient",
      },
    ],
    image: inprogress,
    source_code_link: "https://github.com/AleMot94/Hostal-CDLV-Beta",
  },
];

export { services, technologies, experiences, projects };
