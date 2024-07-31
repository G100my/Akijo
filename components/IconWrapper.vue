<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
<template>
  <i :class="'ri-' + name" />
</template>
