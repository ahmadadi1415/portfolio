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
    "Hey there! 👋 I'm a *web developer* with a year of experience in Next.js and TypeScript. Aside from that, I also dive into *game development* using Unity and C#, where I've got about a year of experience. Oh, and I love spending my free time *drawing pixel art* and creating assets for my games!",
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
