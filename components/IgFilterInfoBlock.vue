<template>
  <h2 class="text-4xl">Akijo IG filter</h2>
  <p class="text-xs mt-3">嗯...我就不上圖了，點進去看效果吧！</p>
  <ul class="_ig_filters mt-10">
    <li>
      <a class="text-sky-400" href="https://www.instagram.com/ar/755147199774107/" target="_blank">
        <h3>Hello, Akijo</h3>
        <i class="ri-external-link-line"></i>
      </a>
      <p class="text-sm">讓 Akijo 出現在畫面中的平面跟你打招呼（？）<br />可以旋轉、拖曳、縮放 <br />以後還會加入更多動作！</p>
    </li>
    <li>
      <a class="text-sky-400" href="https://www.instagram.com/ar/1159867144973553/" target="_blank">
        <h3>Akijo sticker</h3>
        <i class="ri-external-link-line"></i>
      </a>
      <p class="text-sm">用繽紛的“A”次元符號充滿你的限時動態！<br />自拍/拍景皆適用</p>
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
