import type { DefaultTheme } from 'vitepress';

export const sidebarEs: DefaultTheme.Sidebar = {
  '/es/book/': [
    {
      text: 'Nu Libro',
      items: [
        { text: 'Introducción', link: '/es/book/' },
        { text: 'Instalación', link: '/es/book/instalacion' },
        { text: 'Explorando', link: '/es/book/explorando' },
        { text: 'Tipos de datos', link: '/es/book/tipos_de_datos' },
        { text: 'Cargando datos', link: '/es/book/cargando_datos' },
        {
          text: 'Trabajando con tablas',
          link: '/es/book/trabajando_con_tablas',
        },
        { text: 'Pipeline', link: '/es/book/pipeline' },
        { text: 'Configuración', link: '/es/book/configuracion' },
        { text: 'Aliases', link: '/es/book/aliases' },
        { text: 'Matemáticas', link: '/es/book/matematicas' },
        { text: 'Entorno', link: '/es/book/entorno' },
        { text: 'Metadatos', link: '/es/book/metadatos' },
        { text: 'Shells en shells', link: '/es/book/shells_en_shells' },
        { text: 'Escapando', link: '/es/book/escapando' },
        { text: 'Plugins', link: '/es/book/plugins' },
        { text: 'Llegando de Bash', link: '/es/book/llegando_de_bash' },
        { text: 'Mapa Nushell', link: '/es/book/mapa_nushell' },
        { text: 'Mapa imperativo', link: '/es/book/mapa_imperativo_nushell' },
        { text: 'Mapa funcional', link: '/es/book/mapa_funcional_nushell' },
        { text: 'Mapa de operadores', link: '/es/book/mapa_operador_nushell' },
      ],
    },
  ],
};
