import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    jquery,
    angular,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Front-end development",
      icon: backend,
    },
    {
      title: "Back-end Developer",
      icon: backend,
    },
    {
      title: "Database Constructor Webmaster",
      icon: creator,
    }
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
      name: "Jquery",
      icon: jquery,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "PHP Developer",
      company_name: "Change Networks",
      icon: meta,
      iconBg: "#383E56",
      date: "Aug 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Development System Partner Panel (Codeigniter)",
        "Development Modules Broadcast, Product Management, Order Management, Channel Partners Management, Partners Panel Profile, Quote Tools, Sells Analytics",
        "Development Partner Panel Mobile API, Other Native Application API ",
      ],
    },
    {
      title: "Senior Angular / PHP Developer",
      company_name: "Emaginationz Technologies",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2019 - Aug 2021",
      points: [
        "Developement Ionic Cordova App Following:",
        "Discount Bucket App (Angular 8)",
        "Review App (Angular 8)",
        "Development TIffin Management (Codeigniter)",
        "Development Insyncshopfittings.com (WordPress)",
        "Many More Web Application and Android App",
      ],
    },
    {
      title: "PHP Developer",
      company_name: "G-ordinateur",
      icon: meta,
      iconBg: "#383E56",
      date: "Sep 2017 - Oct 2019",
      points: [
        "Hapag-lloyd - Token Management (Vue JS)",
        "Restaurant POS (Angular 8)",
        "SVS Crew Management (Codeigniter)",
        "Hikal.com Portal (Codeigniter)",
        "iastands.com Software (Codeigniter)",
        "Autonism.com Portal (Codeigniter)",
        "Rdccbank.com (Codeigniter)",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Webgoalz",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Apr 2019 - May 2017",
      points: [
        "Development CMS Websites (Core PHP Framework)",
      ],
    },
    {
      title: "Web Designer",
      company_name: "Ayodhya Web Buzzer",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Feb 2015 - Aug 2015",
      points: [
        "Development template base websites designer as per customer requirement",
        "SEO Rank improvement of websites",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };