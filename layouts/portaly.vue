<script setup lang="ts">
import anime from 'animejs'
import ImgBg from 'assets/1696293298652.jpg'
import ImgAvatar from 'assets/avatar.jpg'

const brandKey = 'Akijo 萩条集結所'

onMounted(() => {
  anime({
    targets: '._portaly section',
    autoplay: true,
    loop: false,
    translateY: [80, 0],
    delay: (el, i) => i * 200,
    easing: 'linear',
    duration: 300,
    opacity: [0, 1],
  })
})

useForceRefreshJF()

const showNotificationBlock = ref(false)
onMounted(() => {
  showNotificationBlock.value = 'PushManager' in window && 'serviceWorker' in navigator
  console.log('🚀 ~ showNotificationBlock:', showNotificationBlock)
})
</script>
<template>
  <div class="_portaly h-screen w-screen text-gray-50">
    <img class="h-full w-full object-cover absolute" :src="ImgBg" alt="" />
    <div class="py-6 px-4 backdrop-blur h-full w-full flex flex-col items-center overflow-y-auto">
      <main class="container h-full max-w-md">
        <div class="pt-5 pb-20 space-y-3">
          <section class="_post_block text-center !pt-3">
            <h1 class="text-6xl my-5 burnfont">萩条集結所</h1>
            <div class="flex justify-around mb-10">
              <img class="w-32 h-32 rounded-full" :src="ImgAvatar" :alt="brandKey" />
            </div>

            <MarkdownAbout />

            <hr />

            <nav class="grid grid-cols-2 text-sky-400">
              <a href="https://www.instagram.com/stories/akijo____/" target="_blank">
                <i class="ri-instagram-line text-2xl" />
                <span class="jf-openhuninn text-1xl align-bottom ml-2">akijo____</span>
              </a>
              <a href="tel:073229337">
                <i class="ri-phone-line text-2xl" />
                <span>07-322-9337</span>
                <p class="text-xs">市話僅限特殊情況聯絡，<br />外帶點餐請使用下方外帶線上連結。</p>
              </a>
            </nav>
          </section>

          <!-- <section class="_post-block">
            <div class="overflow-hidden">
              <Post1 class="min-width: auto !important" />
            </div>
            <a
              class="_nav_item heartbeat"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzVicGdkZmgxMGQzOWk2bDQ0dTIxN3ZsNDkgYWtpam8yMDIzQG0&tmsrc=akijo2023%40gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span class="burnfont text-7xl text-red-600">萩</span>
              <p>將 Stay萩 加入行事曆</p>
            </a>
          </section> -->

          <section class="_post_block px-10">
            <MarkdownTopPin />
          </section>

          <section class="space-y-3">
            <MenuLinkBlock />
          </section>

          <section v-if="showNotificationBlock" class="_post_block">
            <NotificationBlock />
          </section>

          <section class="_post_block px-10 text-center">
            <IgFilterInfoBlock />
          </section>

          <section class="_post_block px-10">
            <ParkingBlock />
          </section>

          <section class="rounded-lg overflow-hidden bg-white/80">
            <MapBlock />
          </section>
        </div>
      </main>
    </div>
  </div>
</template>
<style>
._portaly {
  @apply leading-relaxed tracking-wider text-lg;
}

._post_block {
  @apply bg-primary-bg rounded-lg py-8 px-4;
}

.markdown-body h2 {
  @apply text-3xl text-center;
}
.markdown-body ul {
  @apply list-disc pl-10;
}
.markdown-body ol {
  @apply list-decimal pl-8;
}

.heartbeat {
  -webkit-animation: heartbeat 1.5s steps(2, end) 2s infinite both;
  animation: heartbeat 1.5s steps(2, end) 2s infinite both;
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(1.04);
    transform: scale(1.04);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(1.06);
    transform: scale(1.06);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

section hr {
  @apply my-8 w-8/12 mx-auto;
}
section strong {
  font-size: 1.3rem;
}
</style>
