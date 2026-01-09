import { createContentLoader } from 'vitepress';

interface Command {
  title: string;
  path: string;
  categories: string;
  usage: string;
}

declare const data: Command[];
export { data };

export default createContentLoader('commands/docs/*.md', {
  transform(raw): Command[] {
    return raw
      .map((page) => ({
        title:
          page.frontmatter.title ||
          page.url.split('/').pop()?.replace('.html', '') ||
          '',
        path: page.url,
        categories: page.frontmatter.categories || '',
        usage: page.frontmatter.usage || '',
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  },
});
