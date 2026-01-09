import type { DefaultTheme } from 'vitepress';

export const sidebarDe: DefaultTheme.Sidebar = {
  '/de/book/': [
    {
      text: 'Einleitung',
      link: '/de/book/',
    },
    {
      text: 'Erste Schritte',
      link: '/de/book/getting_started',
      items: [
        { text: 'Installation', link: '/de/book/installation' },
        { text: 'Navigation', link: '/de/book/moving_around' },
        { text: 'Denken in Nushell', link: '/de/book/thinking_in_nushell' },
      ],
    },
    {
      text: 'Nu Grundlagen',
      link: '/de/book/nu_fundamentals',
      items: [
        { text: 'Datentypen', link: '/de/book/types_of_data' },
        { text: 'Daten laden', link: '/de/book/loading_data' },
        { text: 'Pipeline', link: '/de/book/pipeline' },
        { text: 'Mit Strings arbeiten', link: '/de/book/working_with_strings' },
        { text: 'Mit Listen arbeiten', link: '/de/book/working_with_lists' },
        { text: 'Mit Tabellen arbeiten', link: '/de/book/working_with_tables' },
      ],
    },
    {
      text: 'Programmieren in Nu',
      link: '/de/book/programming_in_nu',
      items: [
        { text: 'Eigene Befehle', link: '/de/book/custom_commands' },
        { text: 'Aliase', link: '/de/book/aliases' },
        { text: 'Operatoren', link: '/de/book/operators' },
        {
          text: 'Variablen und Unterausdrücke',
          link: '/de/book/variables_and_subexpressions',
        },
        { text: 'Skripte', link: '/de/book/scripts' },
        { text: 'Overlays', link: '/de/book/overlays' },
        { text: 'Befehlssignatur', link: '/de/book/command_signature' },
      ],
    },
    {
      text: 'Nu als Shell',
      link: '/de/book/nu_as_a_shell',
      items: [
        { text: 'Konfiguration', link: '/de/book/configuration' },
        { text: 'Umgebung', link: '/de/book/environment' },
        { text: 'Escaping', link: '/de/book/escaping' },
        { text: 'Drittanbieter Prompts', link: '/de/book/3rdpartyprompts' },
        {
          text: 'Eigene Vervollständigungen',
          link: '/de/book/custom_completions',
        },
        { text: 'Farben und Themes', link: '/de/book/coloring_and_theming' },
        { text: 'Hooks', link: '/de/book/hooks' },
        { text: 'Hintergrundjobs', link: '/de/book/background_jobs' },
      ],
    },
    {
      text: 'Wechsel zu Nu',
      link: '/de/book/coming_to_nu',
      items: [
        { text: 'Von Bash', link: '/de/book/coming_from_bash' },
        { text: 'Befehlsreferenz', link: '/de/book/command_reference' },
      ],
    },
    {
      text: '(Nicht nur für) Fortgeschrittene',
      link: '/de/book/advanced',
      items: [
        { text: 'Plugins', link: '/de/book/plugins' },
        { text: 'Metadaten', link: '/de/book/metadata' },
      ],
    },
  ],
};
