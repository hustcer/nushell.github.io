import type { DefaultTheme } from 'vitepress';

export const sidebarFr: DefaultTheme.Sidebar = {
  '/fr/book/': [
    {
      text: 'Introduction',
      link: '/fr/book/',
    },
    {
      text: 'Installation',
      link: '/fr/book/installation',
      items: [
        {
          text: 'Définir comme shell par défaut',
          link: '/fr/book/default_shell',
        },
      ],
    },
    {
      text: 'Prise en main',
      link: '/fr/book/getting_started',
      items: [
        { text: 'Visite rapide', link: '/fr/book/quick_tour' },
        { text: 'Se déplacer', link: '/fr/book/moving_around' },
        { text: 'Penser en Nu', link: '/fr/book/thinking_in_nu' },
        { text: 'Aide-mémoire', link: '/fr/book/cheat_sheet' },
      ],
    },
  ],
};
