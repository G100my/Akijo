<script setup lang="ts">
import ImgBlackAkijo from '@/assets/icon/rich_black.png'
import ImgUberEats from '@/assets/icon/uber_iOS.svg'
</script>
<template>
  <a class="_nav_item heartbeat" href="https://store.dudooeat.com/order/store/8df9f38a903c442b9f8c1589445256ca" rel="noreferrer noopener" target="_blank">
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
</style>
