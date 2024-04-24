<script lang="ts" setup>
import { NuxtLink } from '#components'
import { QUICK_LINKS, ROUTES } from '~/constants/siteMeta'
import AkijoSlogan from '@/assets/AkijoSlogan.svg'
import AkijoH1 from '@/assets/h1.svg'
</script>
<template>
  <div class="min-h-dvh flex flex-col">
    <div>{{ console.log($route.meta.isNavbarDark) }}</div>
    <nav
      class="fixed inset-x-0 top-0 flex h-24 border-b-2 divide-x-2 items-stretch z-40 transition-colors"
      :class="
        $route.meta.isNavbarDark
          ? 'bg-design-dark text-white divide-design-light border-design-light'
          : 'bg-design-light divide-slate-950 text-slate-950 border-slate-950'
      "
    >
      <div class="flex-[320] flex items-center justify-center">
        <AkijoH1 class="w-[180px]" />
      </div>
      <ul class="w-full flex-[845] flex items-center justify-center">
        <li v-for="i in ROUTES" class="py-3 px-4 whitespace-nowrap">
          <NuxtLink :to="i.to">{{ i.label }}</NuxtLink>
        </li>
      </ul>
      <ul class="flex-[320] flex items-center justify-center">
        <li v-for="i in QUICK_LINKS">
          <NuxtLink
            :to="i.to"
            class="px-4 aspect-square flex items-center justify-center"
          >
            <component :is="i.icon" class="h-6 w-6" />
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <main class="pt-24 flex-1 bg-design-light">
      <slot />
    </main>

    <footer class="bg-slate-950/80 text-white bg-[url(@/assets/bg_footer.jpg)]">
      <div class="flex h-96 items-center justify-around">
        <section>
          <AkijoSlogan class="h-48 w-48" :fontControlled="false" />
        </section>
        <section class="text-center">
          <h4>⊹ ADDRESS ⊹</h4>
          <p>高雄市三民區合江街 27 號</p>
        </section>
        <section class="text-center">
          <h4>⊹ OPENING HOURS ⊹</h4>
          <p>週日 - 週四 | 14:00 - 22:00</p>
          <p>週日 - 週四 | 14:00 - 23:00</p>
        </section>
        <section class="text-center">
          <h4>⊹ SOCIAL ⊹</h4>
          <ul class="flex justify-center">
            <li v-for="i in QUICK_LINKS">
              <NuxtLink
                :to="i.to"
                class="px-4 aspect-square flex items-center justify-center"
              >
                <component :is="i.icon" />
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
