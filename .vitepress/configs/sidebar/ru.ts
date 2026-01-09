import type { DefaultTheme } from 'vitepress';

export const sidebarRU: DefaultTheme.Sidebar = {
  '/ru/book/': [
    {
      text: 'Введение',
      link: '/ru/book/',
    },
    {
      text: 'Установка',
      link: '/ru/book/installation',
      items: [
        { text: 'Установка по умолчанию', link: '/ru/book/default_shell' },
      ],
    },
  ],
};
