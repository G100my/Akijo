<script setup lang="ts">
const addressText = '807高雄市三民區合江街27號'
function handleCopyAddress() {
  navigator.clipboard.writeText(addressText)
}
</script>
<template>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.1536021635866!2d120.30514907606808!3d22.648060979438075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05e1267625c7%3A0xb44bde9622dc34cb!2z6JCp5p2h6ZuG57WQ5omAIEFraWpv!5e0!3m2!1szh-TW!2stw!4v1696409483954!5m2!1szh-TW!2stw"
    height="400px"
    width="100%"
    style="border: 0"
    allowfullscreen="false"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />
  <button
    ref="ref"
    type="button"
    class="mt-3 w-full text-black relative flex justify-center items-center gap-3 active:scale-110 transition-transform"
    @click="handleCopyAddress"
  >
    <address class="not-italic">{{ addressText }}</address>
    <i class="ri-file-copy-line"></i>
  </button>
</template>
