<script lang="ts" setup>
import { NuxtLink } from '#components'
import { BASE_INFO, QUICK_LINKS, ROUTES } from '~/constants/siteMeta'
import AkijoSlogan from '@/assets/AkijoSlogan.svg'
import AkijoH1 from '@/assets/h1.svg'
import SidebarSun from '@/assets/sun.png'
import anime from 'animejs'

const showSidenav = ref(false)

let animeLinks: anime.AnimeInstance
onMounted(() => {
  anime({
    targets: '#SidebarSun',
    rotateX: [0, 15, 0],
    rotateY: [0, 15, 0],
    loop: true,
    direction: 'alternate',
    easing: 'linear',
    delay: 1000,
  })

  animeLinks = anime({
    targets: '#sidenav_links > a',
    translateX: ['-100%', 0],
    autoplay: false,
    duration: 700,
    delay: () => anime.random(100, 500),
  })
})
function startSidenavAnimation() {
  animeLinks.play()
}
function handleCloseSidenav() {
  animeLinks.reverse()
  animeLinks.play()
  animeLinks.finished.then(() => {
    animeLinks.reverse()
    showSidenav.value = false
  })
}
</script>
<template>
  <div class="min-h-dvh flex flex-col">
    <aside
      class="flex fixed inset-x-0 top-0 h-14 lg:h-24 border-b-2 items-stretch z-40 transition-colors font-bold"
      :class="
        $route.meta.isNavbarDark
          ? 'bg-design-dark text-white border-design-light'
          : 'bg-design-light text-slate-950 border-slate-950'
      "
    >
      <h1
        class="flex-[320] flex items-center justify-between px-5 lg:justify-center"
      >
        <AkijoH1
          class="h-1/2 lg:h-auto lg:w-[180px]"
          @click="$router.push('/index')"
        />
      </h1>

      <nav class="hidden lg:contents">
        <ul
          class="w-full flex-[845] flex items-center justify-center border-x-2 border-inherit"
        >
          <li v-for="i in ROUTES.pages" class="py-3 px-4 whitespace-nowrap">
            <NuxtLink :to="i.to" :target="i.target">{{ i.label }}</NuxtLink>
          </li>
        </ul>
        <ul class="flex-[320] flex items-center justify-center">
          <li v-for="i in QUICK_LINKS">
            <a
              :href="i.to"
              target="_blank"
              class="px-4 aspect-square flex items-center justify-center"
            >
              <component :is="i.icon" class="h-8 w-8" />
            </a>
          </li>
        </ul>
      </nav>

      <button
        class="lg:hidden h-full aspect-square"
        @click="showSidenav = true"
      >
        <img :src="SidebarSun" id="SidebarSun" class="h-full w-full" />
      </button>
    </aside>
    <Transition
      :duration="200"
      enterToClass="opacity-100"
      enterFromClass="opacity-0"
      leaveFromClass="opacity-100"
      leaveToClass="opacity-0"
      enterActiveClass="transition-opacity"
      leaveActiveClass="transition-opacity"
      @afterEnter="startSidenavAnimation"
    >
      <nav
        v-show="showSidenav"
        class="fixed inset-0 bg-slate-900/50 backdrop-blur grid grid-rows-12 z-40"
        @click="handleCloseSidenav"
      >
        <ul
          id="sidenav_links"
          class="row-start-4 row-span-6 flex flex-col justify-around gap-1 text-slate-950 font-black text-36"
        >
          <NuxtLink
            :to="ROUTES.index.to"
            class="flex items-center justify-center w-full h-full bg-design-orange"
          >
            <p class="text-center">{{ ROUTES.index.label }}</p>
          </NuxtLink>
          <NuxtLink
            v-for="(i, ii) in ROUTES.pages"
            :to="i.to"
            class="flex items-center justify-center w-full h-full bg-design-orange"
          >
            <p class="text-center">{{ i.label }}</p>
          </NuxtLink>
        </ul>

        <!-- <div class="absolute inset-0 m-auto"></div> -->
      </nav>
    </Transition>

    <main class="pt-14 lg:pt-24 flex-1 bg-design-light overflow-hidden">
      <slot />
    </main>

    <footer class="bg-slate-950/80 text-white bg-[url(@/assets/bg_footer.jpg)]">
      <div
        class="flex flex-col-reverse lg:flex-row gap-14 lg:h-96 items-center justify-around py-14 lg:py-0"
      >
        <section>
          <AkijoSlogan class="h-48 w-48" :fontControlled="false" />
        </section>
        <section class="text-center">
          <h4 class="font-bold">⊹ ADDRESS ⊹</h4>
          <p>高雄市三民區合江街 27 號</p>
        </section>
        <section class="text-center">
          <h4 class="font-bold">⊹ OPENING HOURS ⊹</h4>
          <p v-for="i in BASE_INFO.opening_time">{{ i }}</p>
        </section>
        <section class="text-center">
          <h4 class="font-bold">⊹ SOCIAL ⊹</h4>
          <ul class="flex justify-center text-white gap-2 mt-1">
            <li v-for="i in QUICK_LINKS">
              <NuxtLink
                :to="i.to"
                target="_blank"
                class="aspect-square flex items-center justify-center px-3"
              >
                <component :is="i.icon" class="w-8" />
              </NuxtLink>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <p class="mx-auto w-fit">
          <span>AKIJO</span>@ 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  </div>
</template>
