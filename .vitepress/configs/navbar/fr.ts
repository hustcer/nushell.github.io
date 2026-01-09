import type { DefaultTheme } from 'vitepress';

export const navbarFr: DefaultTheme.NavItem[] = [
  { text: 'Installez Nu !', link: '/fr/book/installation' },
  { text: 'Prise en main', link: '/fr/book/getting_started' },
  {
    text: 'Documentation',
    items: [{ text: 'Le Livre Nushell', link: '/fr/book/' }],
  },
];
