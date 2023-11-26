<script setup lang="ts">
nextTick(() => {
  if (window._jf) {
    window._jf.flush()
    console.log('flush')
  }
  // @ts-ignore
  if (window.instgrm) {
    // @ts-ignore
    window.instgrm.Embeds.process()
    console.log('process')
  } else console.log('Can not process')
})
</script>
<template>
  <NuxtLayout name="portaly">
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
body {
  font-family:
    Sora,
    'Noto Sans TC',
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
}
</style>
