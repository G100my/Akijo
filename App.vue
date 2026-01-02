<script setup lang="ts">
const showModal = ref(true)
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Transition
    enterActiveClass="transition-opacity"
    leaveActiveClass="transition-opacity"
    enterFromClass="opacity-0"
    leaveToClass="opacity-0"
    enterToClass="opacity-100"
    leaveFromClass="opacity-100"
  >
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-design-orange/50"
      @click="showModal = false"
    >
      <div class="max-w-sm bg-design-light/80 space-y-2 p-4 rounded-lg">
        <p>Hi, 我是萩条的隱藏工作人員，過去是負責做這個網頁的。</p>
        <p>
          從萩条關閉後發現這個網站居然還有人在光顧，有點小感動也覺得有點抱歉，因為萩条的關閉，我沒有再繼續維護這個網站，導致近日還是有人看了網站跑來合江街想喝杯咖啡卻撲了空。
        </p>
        <p>抱歉，萩条已經關了。</p>
        <p>謝謝你們曾經來萩条</p>
        <p>後續將由 Sui-sui 接手，在同一地址的六樓，也會是一個很萩的地方</p>
      </div>
    </div>
  </Transition>
</template>
<style>
body {
  font-family:
    'Noto Sans TC',
    Sora,
    Arial,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    'Helvetica Neue',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
}
</style>
