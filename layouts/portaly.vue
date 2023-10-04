<script setup>
import anime from 'animejs'
import ImgBg from 'assets/1696293298652.jpg'
import ImgAvatar from 'assets/avatar.jpg'
import ImgBlackAkijo from '@/assets/icon/rich_black.png'
import ImgUberEats from '@/assets/icon/uber_iOS.svg'

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
  _jf.flush()
})
</script>
<template>
  <div class="_portaly h-screen w-screen text-gray-50">
    <img class="h-full w-full object-cover absolute" :src="ImgBg" alt="" />
    <div class="py-6 px-4 backdrop-blur h-full w-full flex flex-col items-center overflow-y-auto">
      <main class="container h-full max-w-md">
        <div class="pt-5 pb-20 space-y-3">
          <section class="_post-block text-center space-y-3 !pt-3">
            <h1 class="text-6xl my-5 burnfont">萩条集結所</h1>
            <div class="flex justify-around mb-10">
              <img class="w-32 h-32 rounded-full" :src="ImgAvatar" :alt="brandKey" />
            </div>
            <MDAbout />
          </section>

          <section class="_post-block px-10">
            <MDTopPin />
          </section>

          <section class="_post-block">
            <InstagramEmbed />
          </section>

          <section class="space-y-3">
            <a
              class="_nav-item heartbeat"
              href="https://store.dudooeat.com/order/store/8df9f38a903c442b9f8c1589445256ca"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img :src="ImgBlackAkijo" alt="外帶用線上菜單" />
              <p>外帶用線上菜單</p>
            </a>
            <a
              class="_nav-item"
              href="https://www.ubereats.com/tw/store/%E8%90%A9%E6%9D%A1%E9%9B%86%E7%B5%90%E6%89%80/2N4lhohxXcupRMYrMvwCHg"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img :src="ImgUberEats" alt="Akijo - UberEats order link" />
              <p>Uber Eats 幫你送</p>
            </a>
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

._post-block {
  @apply bg-primary-bg rounded-lg py-8 px-4;
}

.markdown-body h2 {
  @apply text-3xl text-center;
}
.markdown-body ul {
  @apply list-disc pl-10;
}

._nav-item {
  @apply flex p-4 text-3xl items-center text-center bg-sky-400/70 rounded-lg;
}
._nav-item > img {
  @apply w-20 h-20;
}
._nav-item > p {
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
</style>
