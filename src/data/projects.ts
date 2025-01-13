export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "NextFindPark 🌐 (Backend Developer)",
    techs: ["NextJS", "Typescript"],
    link: "https://nextfindpark.vercel.app",
  },
  {
    title: "Etnomedicine Finder 🌐(Fullstack Developer)",
    techs: ["NextJS", "NextUI", "TypeScript"],
    link: "https://etnomedicine-finder.vercel.app/",
  },
  {
    title: "RSA Encryption Project 🌐 (Fullstack Developer)",
    techs: ["NextJS", "TypeScript"],
    link: "https://cryptography-with-encrypt-rsa.vercel.app",
  },
  {
    title: "NU BIM 🌐 (Backend Developer)",
    techs: ["NextJS", "TypeScript"],
    link: "https://nu-bim.vercel.app",
  },
  {
    title: "SINUPI 🌐 (Backend Developer)",
    techs: ["NextJS", "TypeScript"],
    link: "https://sinupi.com",
  },
  {
    title: "SINUMI 🌐 (Backend Developer)",
    techs: ["NextJS", "TypeScript"],
    link: "https://sinumi.com",
  },
  {
    title: "At Least 🎮",
    techs: ["Unity", "C#"],
    link: "https://envoidpxl.itch.io/at-least",
  },
  {
    title: "Faint Star 🎮",
    techs: ["Unity", "C#"],
    link: "https://envoidpxl.itch.io/faint-star",
  },
  {
    title: "Rogue of Logic 🎮",
    techs: ["Unity", "C#"],
    link: "https://envoidpxl.itch.io/rogue-of-logic",
  },
  {
    title: "Project Dilemma 🎮",
    techs: ["Unity", "C#"],
    link: "https://jeremy-wowiling.itch.io/project-dilemma",
  },
  {
    title: "Rescuter 🎮",
    techs: ["Unity", "C#"],
    link: "https://ajiana01.itch.io/rescuter",
  },
  {
    title: "Project Provoke 🎮",
    techs: ["Unity", "C#"],
    link: "",
    isComingSoon: true
  },
];

export default projects;
