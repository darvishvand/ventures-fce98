import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Darvishvand Ventures",
  EMAIL: "darvishvand@protonmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Darvishvand Ventures",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Important updates on projects we are working on.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "What we are working on right now.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Projects being managed by the Darvishvand Organization",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/darvishvand",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/darvishvand"
  }
];
