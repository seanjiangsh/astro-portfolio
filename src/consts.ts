import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Sean Jiang",
  DESCRIPTION: "Welcome to Sean's portfolio.",
  AUTHOR: "Sean Jiang",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

export const ABOUT: Page = {
  TITLE: "About",
  DESCRIPTION: "About me.",
};

// Blog Page
// export const BLOG: Page = {
//   TITLE: "Blog",
//   DESCRIPTION: "Writing on topics I am passionate about.",
// }

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "About",
    HREF: "/about",
  },
  // {
  //   TEXT: "Blog",
  //   HREF: "/blog",
  // },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "Sean Jiang",
    HREF: "mailto:seanjiangsh@gmail.com",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Sean Jiang",
    HREF: "https://www.linkedin.com/in/sean-jiang-77b091160",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Sean Jiang",
    HREF: "https://github.com/seanjiangsh",
  },
];
