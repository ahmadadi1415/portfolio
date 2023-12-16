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
];

export default projects;
