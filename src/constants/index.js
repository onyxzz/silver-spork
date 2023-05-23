import {
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
} from "../assets"

export const navLinks = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
]

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Programming Languages",
    content:
      "I primarily utilize JavaScript as my core programming language in most of my development endeavors.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Frameworks | Platforms",
    content:
      "I use ReactJS, NextJS and TailwindCSS on the front-end. On the backend, I use NodeJS and ExpressJS with Web API.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Database Management Systems",
    content:
      "I proficiently utilize both MongoDB and MySQL as my preferred database management systems to handle data storage and retrieval for various projects.",
  },
]

export const feedback = [
  {
    id: "feedback-1",
    title: "Haltain (FI)",
    content: "Realtime Air Quality Monitoring",
    date: "Mar 2023 - June 2023",
    description:
      "Retrieve and display realtime data from Haltian Thingsee Air and Environment Sensor to a website",
    technologies: "ReactJS, NodeJS, Web Socket, MQTT, MongoDB",
  },
  {
    id: "feedback-2",
    title: "Polar (FI-DE)",
    content: "Vital Stats Monitoring",
    date: "Oct 2022 - Dec 2022",
    description:
      "Retrieve and display realtime data from Polar H10 and Verity Sense sensorst to a website",
    technologies: "ReactJS, Bluetooth API, Docker",
  },
  {
    id: "feedback-3",
    title: "Personal",
    date: "All of my projects can be found on the github pages: https://www.github.com/onyxzz/",
  },
]

export const stats = [
  {
    id: "stats-1",
    title: "Frontend",
    value: "Development",
  },
  {
    id: "stats-2",
    title: "Backend",
    value: "Development",
  },
  {
    id: "stats-3",
    title: "Database",
    value: "Management",
  },
]

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/duongphtr",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100029787248899",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/trieu-duong-pham-48682b277/",
  },
]
