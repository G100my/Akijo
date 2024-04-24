<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
<template>
  <i :class="name" />
</template>
