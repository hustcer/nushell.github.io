import { createContentLoader } from 'vitepress';

interface Post {
  title: string;
  path: string;
  date: string;
  excerpt?: string;
}

declare const data: Post[];
export { data };

export default createContentLoader('blog/*.md', {
  transform(raw): Post[] {
    return raw
      .filter((page) => page.url !== '/blog/')
      .map((page) => {
        const path = page.url.replace('/blog/', '');
        const date = path.substring(0, 10);
        return {
          title: page.frontmatter.title || path,
          path: page.url,
          date,
          excerpt: page.frontmatter.excerpt,
        };
      })
      .sort((a, b) => {
        const dateCompare =
          new Date(b.date).getTime() - new Date(a.date).getTime();
        if (dateCompare !== 0) return dateCompare;
        return b.path.localeCompare(a.path);
      });
  },
});
