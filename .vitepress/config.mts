import { defineConfig } from 'vitepress';
import path from 'node:path';

import {
  navbarDe,
  navbarEn,
  navbarEs,
  navbarFr,
  navbarJa,
  navbarPtBR,
  navbarRU,
  navbarZhCN,
  navbarKo,
  sidebarDe,
  sidebarEn,
  sidebarFr,
  sidebarEs,
  sidebarJa,
  sidebarPtBR,
  sidebarRU,
  sidebarZhCN,
  sidebarKo,
} from './configs/index';

// default env from the deploy GitHub action
// e.g. ciUser = nushell and ciRepo = nushell.github.io
// both default to undefined if the env is undefined
const [ciUser, ciRepo] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];

export default defineConfig({
  // set the base URL to ciRepo dir if it's a fork
  // keep the default root if not
  base: ciRepo && ciUser !== 'nushell' ? `/${ciRepo}/` : '/',
  title: 'Nushell',
  description: 'A new type of shell.',
  lastUpdated: false,
  cleanUrls: true,

  head: [
    [
      'link',
      {
        rel: 'preload',
        href: '/fonts/FiraCode-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    ],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'icon', href: '/icon.png' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Nushell',
      description: 'A new type of shell.',
      themeConfig: {
        nav: navbarEn,
        sidebar: sidebarEn,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: 'Edit this page on GitHub',
        },
      },
    },
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      title: 'Nushell',
      description: '一种新型的Shell',
      themeConfig: {
        nav: navbarZhCN,
        sidebar: sidebarZhCN,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: '在GitHub上编辑此页面',
        },
      },
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      title: 'Nushell',
      description: 'Eine neue Art von Shell.',
      themeConfig: {
        nav: navbarDe,
        sidebar: sidebarDe,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: 'Diese Seite auf GitHub bearbeiten',
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      title: 'Nushell',
      description: 'Un nouveau type de shell.',
      themeConfig: {
        nav: navbarFr,
        sidebar: sidebarFr,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: 'Modifier la page sur GitHub',
        },
      },
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      title: 'Nushell',
      description: 'Un nuevo tipo de shell.',
      themeConfig: {
        nav: navbarEs,
        sidebar: sidebarEs,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: 'Edita esta página en GitHub',
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'Nushell',
      description: '新しいタイプのシェル',
      themeConfig: {
        nav: navbarJa,
        sidebar: sidebarJa,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: 'GitHubでこのページを編集する',
        },
      },
    },
    'pt-BR': {
      label: 'Português do Brasil',
      lang: 'pt-BR',
      title: 'Nushell',
      description: 'Um novo tipo de shell.',
      themeConfig: {
        nav: navbarPtBR,
        sidebar: sidebarPtBR,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: 'Edite esta página no GitHub',
        },
      },
    },
    ru: {
      label: 'Русский язык',
      lang: 'ru-RU',
      title: 'Nushell',
      description: 'Новый тип оболочки.',
      themeConfig: {
        nav: navbarRU,
        sidebar: sidebarRU,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: 'Отредактируйте эту страницу на GitHub',
        },
      },
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      title: 'Nushell',
      description: '새로운 유형의 셸',
      themeConfig: {
        nav: navbarKo,
        sidebar: sidebarKo,
        editLink: {
          pattern:
            'https://github.com/nushell/nushell.github.io/edit/main/:path',
          text: 'GitHub에서 수정하기',
        },
      },
    },
  },

  themeConfig: {
    logo: '/icon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nushell/nushell' },
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'GHCTOYCW6T',
        indexName: 'nushell',
        apiKey: 'dd6a8f770a42efaed5befa429d167232',
      },
    },
  },

  markdown: {
    theme: {
      light: 'dark-plus',
      dark: 'dark-plus',
    },
    lineNumbers: true,
    codeTransformers: [
      {
        preprocess(code, options) {
          if (options.lang === 'ansi') {
            // @ts-ignore
            this.options.theme = 'one-dark-pro';
          }
          return code;
        },
      },
    ],
    languages: [
      'csv',
      'rust',
      'bash',
      'shell',
      'sh',
      'ansi',
      'toml',
      'json',
      'javascript',
      'python',
      'cpp',
      'powershell',
    ],
  },

  sitemap: {
    hostname: 'https://www.nushell.sh/',
  },

  vite: {
    resolve: {
      alias: {
        '@snippets': path.resolve(__dirname, '../snippets'),
      },
    },
  },

  vue: {
    template: {
      compilerOptions: {
        // Treat tags with spaces or special chars as custom elements (they're not real HTML)
        isCustomElement: (tag) => tag.includes(' ') || tag.includes('-'),
      },
    },
  },
});
