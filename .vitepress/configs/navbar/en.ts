import type { DefaultTheme } from 'vitepress';

export const navbarEn: DefaultTheme.NavItem[] = [
  { text: 'Get Nu!', link: '/book/installation' },
  { text: 'Getting Started', link: '/book/getting_started' },
  {
    text: 'Documentation',
    items: [
      { text: 'The Nushell Book', link: '/book/' },
      { text: 'Command Reference', link: '/commands/' },
      { text: 'Cookbook', link: '/cookbook/' },
      { text: 'Language Reference Guide', link: '/lang-guide/' },
      { text: 'Contributing Guide', link: '/contributor-book/' },
    ],
  },
  { text: 'Blog', link: '/blog/' },
];
