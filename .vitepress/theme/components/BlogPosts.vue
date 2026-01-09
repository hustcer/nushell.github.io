<template>
  <div>
    <div v-for="post in posts" :key="post.path">
      <section class="blog-post">
        <time class="published">{{ post.date }}</time>
        <h2 class="title">
          <a :href="post.path" class="link">{{ post.title }}</a>
        </h2>
        <p v-if="post.excerpt" class="excerpt">
          {{ post.excerpt }}
        </p>
        <a class="read-more" :href="post.path">Read More →</a>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { data as posts } from './posts.data';
</script>

<style scoped>
.blog-post {
  margin-bottom: 2.5rem;
}
.excerpt {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.2rem;
}
.link {
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.link:hover {
  text-decoration: underline;
}
.published {
  font-weight: 400;
  color: var(--vp-c-text-2);
}
.title {
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 24px;
  padding-top: 0;
}
.read-more {
  font-weight: 500;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 4px;
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  box-shadow: 0 0;
  display: inline-block;
}
.read-more:hover {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}
</style>
