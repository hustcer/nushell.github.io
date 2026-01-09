<template>
  <table>
    <tr>
      <th>Command</th>
      <th>Categories</th>
      <th>Description</th>
    </tr>
    <tr v-for="command in commands" :key="command.path">
      <td>
        <a :href="command.path">{{ command.title }}</a>
      </td>
      <td style="white-space: pre-wrap">{{ command.categories }}</td>
      <td style="white-space: pre-wrap">{{ command.usage }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { data as commandsData } from './commands.data';

const commands = computed(() => commandsData);
</script>
