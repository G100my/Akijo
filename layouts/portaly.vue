<script setup lang="ts">
import anime from 'animejs'
import ImgBg from 'assets/1696293298652.jpg'
import ImgAvatar from 'assets/avatar.jpg'
import ImgBlackAkijo from '@/assets/icon/rich_black.png'
import ImgUberEats from '@/assets/icon/uber_iOS.svg'

const brandKey = 'Akijo 萩条集結所'
const addressText = '807高雄市三民區合江街27號'

function handleCopyAddress() {
  navigator.clipboard.writeText(addressText)
}

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
  nextTick(() => {
    window._jf.flush()
    console.log('flush')
    // @ts-ignore
    if (window.instgrm) {
      // @ts-ignore
      window.instgrm.Embeds.process()
      console.log('process')
    } else console.log('Can not process')
  })
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

            <nav>
              <a href="https://www.instagram.com/stories/akijo____/" target="_blank">
                <i class="ri-instagram-line text-2xl" />
                <span class="jf-openhuninn text-1xl align-bottom ml-2">akijo____</span>
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
            <a
              class="_nav_item heartbeat"
              href="https://store.dudooeat.com/order/store/8df9f38a903c442b9f8c1589445256ca"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img :src="ImgBlackAkijo" alt="外帶用線上菜單" />
              <p>外帶用線上菜單</p>
            </a>
            <a
              class="_nav_item"
              href="https://www.ubereats.com/tw/store/%E8%90%A9%E6%9D%A1%E9%9B%86%E7%B5%90%E6%89%80/2N4lhohxXcupRMYrMvwCHg"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img :src="ImgUberEats" alt="Akijo - UberEats order link" />
              <p>Uber Eats 幫你送</p>
            </a>
          </section>

          <section class="_post_block px-10 text-center">
            <h2 class="text-4xl">Akijo IG filter</h2>
            <p class="text-xs mt-3">嗯...我就不上圖了，點進去看效果吧！</p>
            <ul class="_ig_filters mt-10">
              <li>
                <a href="https://www.instagram.com/ar/755147199774107/" target="_blank">
                  <h3>Hello, Akijo</h3>
                  <i class="ri-external-link-line"></i>
                </a>
                <p class="text-sm">讓 Akijo 出現在畫面中的平面跟你打招呼（？）<br />可以旋轉、拖曳、縮放 <br />以後還會加入更多動作！</p>
              </li>
              <li>
                <a href="https://www.instagram.com/ar/1159867144973553/" target="_blank">
                  <h3>Akijo sticker</h3>
                  <i class="ri-external-link-line"></i>
                </a>
                <p class="text-sm">用繽紛的“A”次元符號充滿你的限時動態！<br />自拍/拍景皆適用</p>
              </li>
            </ul>
          </section>

          <section class="rounded-lg overflow-hidden bg-white/80">
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

._nav_item {
  @apply flex p-4 text-3xl items-center text-center bg-sky-400/70 rounded-lg;
}
._nav_item > img {
  @apply w-20 h-20;
}
._nav_item > p {
  @apply flex-1;
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

._ig_filters {
  @apply space-y-6;
}
._ig_filters li {
  @apply flex flex-col items-center px-5;
}
._ig_filters a {
  @apply text-3xl mb-2 flex items-center relative;
}
._ig_filters i {
  @apply text-xl  absolute -right-8;
}
</style>
