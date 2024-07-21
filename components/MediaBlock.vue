<script setup lang="ts">
defineProps<{
  src: string
  title?: string
}>()
</script>
<template>
  <template v-if="src.endsWith('.jpg') || src.endsWith('.jpeg')">
    <img :src="src" :alt="title" class="w-full h-full object-cover" />
  </template>
  <template v-else>
    <video :src="src" class="w-full h-full object-cover" autoplay loop muted />
  </template>
</template>
