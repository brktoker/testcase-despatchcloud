interface NavbarLink {
  title: string;
}

interface Country {
  flag: string;
  name: string;
  code: string;
  currency: string;
}

interface Language {
  name: string;
  code: string;
}

export const navbarLinks: NavbarLink[] = [
  {
    title: "Ladies",
  },
  {
    title: "Men's",
  },
  {
    title: "Children's",
  },
  {
    title: "Accessories",
  },
  {
    title: "Pets",
  },
  {
    title: "SALE",
  },
];

export const countries: Country[] = [
  {
    flag: "https://www.rydale.com/_nuxt/img/bc9789d.png",
    name: "United Kingdom",
    code: "UK",
    currency: "£",
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Turkey_flag_300.png",
    name: "Turkey",
    code: "TR",
    currency: "₺",
  },
];

export const languages: Language[] = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "Turkish",
    code: "tr",
  },
];
