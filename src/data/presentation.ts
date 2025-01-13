type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "adipras606@gmail.com",
  title: "Nice to meet you, I’m Ahmad Adi Prasetyo 👋",
  // profile: "/profile.webp",
  description:
   "Hey there! 👋 I'm a fresh graduate in Informatics Engineering with a strong passion for creating and building interactive experiences. I have 1.5 years of experience in *game development* using Unity and C#, where I specialize in programming and bringing gameplay mechanics to life. Alongside game development, I have 2 years of experience as a *web developer*, focusing primarily on *backend* development with Next.js and TypeScript. In my free time, I enjoy drawing *pixel art*, turning creative ideas into reality!",
  socials: [
    {
      label: "Instagram",
      link: "https://instagram.com/ahmad_adi.p",
    },
    {
      label: "Github",
      link: "https://github.com/ahmadadi1415",
    },
    {
      label: "Itch.io",
      link: "https://envoidpxl.itch.io/",
    },
    {
      label: "Pixel Art Gallery",
      link: "https://pixilart.com/envdpxl"
    }
  ],
};

export default presentation;
