<script lang="ts" setup>
const { isMounted } = useJudgeMounted()
</script>

<template>
  <div class="drawer drawer-end">
    <div class="drawer-content fixed top-0 flex flex-col">
      <!-- Page content here -->
      <slot />
    </div>

    <Navbar v-if="isMounted" />
  </div>
</template>

<style scoped></style>
