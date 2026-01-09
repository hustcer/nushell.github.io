import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import BlogPosts from './components/BlogPosts.vue';
import CommandList from './components/CommandList.vue';
import CategoryCommands from './components/CategoryCommands.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app }) {
    app.component('BlogPosts', BlogPosts);
    app.component('CommandList', CommandList);
    app.component('CategoryCommands', CategoryCommands);
  },
} satisfies Theme;
