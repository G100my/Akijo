<template>
  <h2 class="text-4xl">Akijo IG filter</h2>
  <ul class="_ig_filters mt-10">
    <li>
      <NuxtLink
        class="text-sky-400"
        to="https://www.instagram.com/ar/755147199774107/"
        external
        target="_blank"
      >
        <h3>Hello, Akijo</h3>
        <i class="ri-external-link-line"></i>
      </NuxtLink>
      <p class="text-sm">
        讓 Akijo 出現在畫面中的平面跟你打招呼（？）<br />可以旋轉、拖曳、縮放
        <br />以後說不定還會加入更多動作！(說不定啦，好忙...)
      </p>
    </li>
    <li>
      <NuxtLink
        class="text-sky-400"
        to="https://www.instagram.com/ar/1159867144973553/"
        external
        target="_blank"
      >
        <h3>Akijo sticker</h3>
        <i class="ri-external-link-line"></i>
      </NuxtLink>
      <p class="text-sm">
        用繽紛的“A”次元符號充滿你的限時動態！<br />自拍/拍景皆適用<br />給你滿滿滿的萩条元素
      </p>
    </li>
  </ul>
</template>
<style>
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
