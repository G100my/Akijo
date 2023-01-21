<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
<template>
  <span class="material-symbols-rounded">{{ name }}</span>
</template>
