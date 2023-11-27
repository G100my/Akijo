<script setup lang="ts">
const status = ref(Notification.permission)
function handleActive() {
  const { $firebaseMessagingGetToken } = useNuxtApp()
  $firebaseMessagingGetToken().finally(() => {
    status.value = Notification.permission
  })
}
</script>
<template>
  <div class="text-center space-y-4">
    <h2 class="text-3xl"><i class="ri-notification-2-fill" /><span class="mx-2">活動通知小鈴鐺</span><i class="ri-notification-2-fill" /></h2>
    <template v-if="status === 'default'">
      <div>
        <p>如果不想錯過萩条生活，<br />除了可以關注我們的ＩＧ之外，<br />也可以啟用這個網頁瀏覽器的通知。</p>
        <p class="mt-1">我們絕對不會三不五時就打擾你，<br />只會傳送萩条生活活動通知給你。</p>
      </div>
      <div class="flex flex-col mt-4">
        <p>你隨時可以把Akijo的瀏覽器通知關閉</p>
        <div class="text-sm mx-auto">
          <p class="space-x-5">
            <span>操作說明連結：</span>
            <a class="text-sky-400" target="_blank" href="https://support.google.com/chrome/answer/3220216?hl=zh-Hant&co=GENIE.Platform%3DAndroid"
              >Google chrome</a
            >
            <a class="text-sky-400" target="_blank" href="https://support.apple.com/zh-tw/guide/safari/sfri40734/mac">Safari</a>
          </p>
        </div>
      </div>
      <button type="button" @click="handleActive" class="heartbeat bg-sky-400 py-2 px-4 rounded">
        <i class="ri-notification-2-fill" />
        <span class="ml-3">啟用網頁通知</span>
      </button>
    </template>
    <template v-else-if="status === 'granted'">
      <p>如果萩条生活的通知太過打擾你的話，<br />你可以參考以下連結操作。</p>
      <div class="text-sm mx-auto">
        <p class="space-x-5">
          <span>操作說明連結：</span>
          <a class="text-sky-400" target="_blank" href="https://support.google.com/chrome/answer/3220216?hl=zh-Hant&co=GENIE.Platform%3DAndroid"
            >Google chrome</a
          >
          <a class="text-sky-400" target="_blank" href="https://support.apple.com/zh-tw/guide/safari/sfri40734/mac">Safari</a>
        </p>
      </div>
    </template>
    <template v-else-if="status === 'denied'">
      <p>咦？你把我們的活動通知禁止了？<br />我們真的不會太常打擾你，<br />只會在有趣的萩条生活將要發生的時候通知你，<br />一起來過萩条生活</p>
      <p class="text-base">現在瀏覽器把使用者保護的很好，<br />我們無法直接幫你再次開啟通知，<br />你可以參考以下連結重新設定。</p>
      <p class="space-x-5">
        <span>操作說明連結：</span>
        <a class="text-sky-400" target="_blank" href="https://support.google.com/chrome/answer/3220216?hl=zh-Hant&co=GENIE.Platform%3DAndroid">Google chrome</a>
        <a class="text-sky-400" target="_blank" href="https://support.apple.com/zh-tw/guide/safari/sfri40734/mac">Safari</a>
      </p>
    </template>
  </div>
</template>
