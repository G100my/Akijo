<script setup lang="ts">
import ImgBlackAkijo from '@/assets/icon/rich_black.png'
import ImgUberEats from '@/assets/icon/uber_iOS.svg?url'
import ImgShopee from '@/assets/icon/shopee.svg?url'
import { BASE_INFO } from '@/constants/siteMeta'
</script>
<template>
  <NuxtLink
    class="_nav_item heartbeat"
    :to="BASE_INFO.dudu_take_away_url"
    external
    target="_blank"
  >
    <img :src="ImgBlackAkijo" alt="外帶用線上菜單" />
    <p>外帶用線上菜單</p>
  </NuxtLink>
  <NuxtLink
    class="_nav_item"
    :to="BASE_INFO.ubereat_url"
    external
    target="_blank"
  >
    <img :src="ImgUberEats" alt="Akijo - UberEats order link" />
    <p>Uber Eats 幫你送</p>
  </NuxtLink>
  <NuxtLink
    class="_nav_item"
    :to="BASE_INFO.shopee_url"
    external
    target="_blank"
  >
    <img :src="ImgShopee" alt="Akijo - shopee" />
    <div class="text-center flex-1">
      <p>萩条賣場</p>
      <p class="text-sm">
        Olend 包包這裡有<br />也可以在上面的線上菜單裡看喔！
      </p>
    </div>
  </NuxtLink>
</template>
<style>
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
</style>
