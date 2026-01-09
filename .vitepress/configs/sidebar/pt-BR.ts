import type { DefaultTheme } from 'vitepress';

export const sidebarPtBR: DefaultTheme.Sidebar = {
  '/pt-BR/book/': [
    {
      text: 'Nu Livro',
      items: [
        { text: 'Instalação', link: '/pt-BR/book/instalacao' },
        { text: 'Introdução', link: '/pt-BR/book/introducao' },
        { text: 'Explorando', link: '/pt-BR/book/explorando' },
        { text: 'Tipos de dados', link: '/pt-BR/book/tipos_de_dados' },
        { text: 'Carregando dados', link: '/pt-BR/book/carregando_dados' },
        {
          text: 'Trabalhando com tabelas',
          link: '/pt-BR/book/trabalhando_com_tabelas',
        },
        { text: 'Pipeline', link: '/pt-BR/book/pipeline' },
        { text: 'Editor de linha', link: '/pt-BR/book/line_editor' },
        { text: 'Metadados', link: '/pt-BR/book/metadados' },
        { text: 'Shells em shells', link: '/pt-BR/book/shells_em_shells' },
        { text: 'Escapando', link: '/pt-BR/book/escapando' },
        { text: 'Plugins', link: '/pt-BR/book/plugins' },
      ],
    },
  ],
};
