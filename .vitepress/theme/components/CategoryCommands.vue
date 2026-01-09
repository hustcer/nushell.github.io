<template>
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="command in filteredCommands" :key="command.path">
        <td>
          <a :href="command.path">{{ command.title }}</a>
        </td>
        <td style="white-space: pre-wrap">{{ command.usage }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { data as commandsData } from './commands.data';

const props = defineProps<{
  category: string;
}>();

const filteredCommands = computed(() =>
  commandsData.filter((cmd) => cmd.categories.includes(props.category)),
);
</script>
