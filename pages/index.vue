<script setup lang="ts">
import Akijo from '@/assets/hero/hero-1.svg'
import Sneeze from '@/assets/hero/hero-2.svg'
import Slogan from '@/assets/hero/hero-3.svg'
import MtfkFlower from '@/assets/hero/hero-4.svg'
import MtfkStar from '@/assets/hero/hero-5.svg'
import AkijoText from '@/assets/hero/hero-6.svg'
import IconArrowRight from '@/assets/arrow_right.svg'
import IconArrowLeft from '@/assets/arrow_left.svg'
import { Pagination, Navigation } from 'swiper/modules'
import anime from 'animejs'
import { theme } from '#tailwind-config'
import IconWrapper from '@/components/IconWrapper.vue'
import { TOP_PRODUCTS, TOP_PRODUCT_MAIN } from '@/constants/siteMeta'

const description =
  '嘿！這裡是萩条集結所的線上空間，有一些些關於我們的資訊，也可以追蹤我們的 IG'
useSeoMeta({
  description,
  ogDescription: description,
})

definePageMeta({
  path: '/',
  isNavbarDark: true,
})

const sloganText = `Today's good mood is sponsored by Akijo`
const modules = [Pagination, Navigation]

const { data } = await useAsyncData('topEvents', () =>
  queryContent('events').sort({ date: -1 }).limit(4).find(),
)

onMounted(() => {
  nextTick(() => {
    const boundingClientRect = document
      .querySelector('.swiper-slide.swiper-slide-active div._event_container')!
      .getBoundingClientRect()
    document
      .querySelector('#next_btn')!
      .setAttribute('style', `right: ${boundingClientRect.x}px`)
    document
      .querySelector('#prev_btn')!
      .setAttribute('style', `left: ${boundingClientRect.x}px`)
  })

  anime({
    targets: '#Akijo',
    keyframes: [
      { color: theme.colors.indigo[200] },
      { color: theme.colors.yellow[300] },
      { color: theme.colors.green[400] },
      { color: theme.colors.red[400] },
      { color: theme.colors.purple[400] },
      { color: theme.colors.orange[500] },
      { color: theme.colors.sky[400] },
    ],
    duration: 3000,
    loop: true,
  })

  anime({
    targets: '#Sneeze',
    scale: [
      { value: 1.15, duration: 800, delay: 800 },
      { value: 1, duration: 100, delay: 500 },
    ],
    easing: 'linear',
    loop: true,
  })

  const offset = 3
  anime({
    targets: '#Slogan',
    translateX: [offset, -offset],
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutBounce',
    duration: 180,
  })

  anime({
    targets: '#MtfkStar',
    translateX: [-20, 20],
    rotate: 360,
    scale: [0.8, 1.2],
    loop: true,
    duration: 3000,
    direction: 'alternate',
    easing: 'easeOutElastic',
  })
})
</script>
<template>
  <section>
    <header
      class="flex flex-col h-[calc(100dvh-56px)] lg:h-[calc(100dvh-94px)]"
    >
      <div
        class="flex-1 lg:h-[680px] bg-design-dark relative flex items-center justify-center"
      >
        <div class="relative scale-50 sm:scale-75 md:scale-100">
          <Akijo id="Akijo" class="z-10 text-gray-400 relative" />
          <Sneeze
            id="Sneeze"
            class="absolute z-20 -top-10 -left-32 origin-bottom-right"
          />
          <Slogan id="Slogan" class="absolute z-0 -right-48 -top-10" />
          <MtfkFlower
            id="MtfkFlower"
            class="absolute z-20 -left-24 bottom-10"
          />
          <MtfkStar id="MtfkStar" class="absolute z-0 -right-32 top-28" />
          <AkijoText
            id="AkijoText"
            class="absolute z-10 bottom-0 left-3 right-0 mx-auto origin-bottom"
          />
        </div>
      </div>

      <div
        class="bg-design-orange text-32 font-black whitespace-nowrap py-7 text-white tracking-wide overflow-hidden"
      >
        <div
          class="marquee -translate-x-10 w-fit animate-[marquee_4s_linear_infinite]"
        >
          <p class="pr-14">{{ sloganText }}</p>
          <p class="pr-14 absolute translate-x-full inset-y-0 my-auto h-fit">
            {{ sloganText }}
          </p>
          <p class="pr-14 absolute translate-x-[200%] inset-y-0 my-auto h-fit">
            {{ sloganText }}
          </p>
          <p class="pr-14 absolute translate-x-[300%] inset-y-0 my-auto h-fit">
            {{ sloganText }}
          </p>
          <p class="pr-14 absolute translate-x-[400%] inset-y-0 my-auto h-fit">
            {{ sloganText }}
          </p>
        </div>
      </div>
    </header>

    <div>
      <section>
        <h2
          class="font-black text-header-design-dark text-40 pt-[60px] pb-9 text-center"
        >
          NEW EVENTS
        </h2>
        <div class="pb-[60px] group">
          <Swiper
            class="!pb-20"
            centeredSlides
            loop
            slideToClickedSlide
            :slidesPerView="1.3"
            :spaceBetween="120"
            :pagination="{
              clickable: true,
              bulletClass: 'bulletClass',
              bulletActiveClass: 'bulletActiveClass',
              horizontalClass: 'horizontalClass',
            }"
            :modules="modules"
            :navigation="{
              nextEl: '#next_btn',
              prevEl: '#prev_btn',
            }"
            :breakpoints="{
              [theme.screens.lg.slice(0, -2)]: {
                slidesPerView: 1.4,
              },
              [theme.screens.xl.slice(0, -2)]: {
                slidesPerView: 1.8,
              },
              [theme.screens['2xl'].slice(0, -2)]: {
                slidesPerView: 2,
              },
            }"
          >
            <SwiperSlide v-for="i in data" v-slot="{ isActive }" :key="i._id">
              <EventShell
                :link="i._path!"
                :title="i.title!"
                :subtitle="i.time"
                :datetime="i.date"
                :description="i.description"
                :coverUrl="`/events/${i.cover}`"
                class="transition-transform _event_container"
                :class="{ 'translate-y-20 grayscale': !isActive }"
                :isActive="isActive"
              />
            </SwiperSlide>
            <button
              id="next_btn"
              type="button"
              class="absolute inset-y-0 z-50 right-0 translate-x-1/2 w-40 -translate-y-4 lg:-translate-y-0 text-design-green hover:text-design-orange"
            >
              <IconArrowRight class="mx-auto" />
            </button>
            <button
              id="prev_btn"
              type="button"
              class="absolute inset-y-0 z-50 left-0 -translate-x-1/2 w-40 -translate-y-4 lg:-translate-y-0 text-design-green hover:text-design-orange"
            >
              <IconArrowLeft class="mx-auto" />
            </button>
          </Swiper>
        </div>
      </section>

      <section class="border-slate-950 border-t-2">
        <h2
          class="font-black text-40 py-12 text-center lg:text-start lg:px-[140px]"
        >
          PRODUCTS
        </h2>
        <div class="grid grid-cols-4 grid-rows-4 xl:grid-cols-9 xl:grid-rows-2">
          <div
            class="row-start-3 col-span-4 row-span-2 xl:col-start-5 xl:col-end-10 xl:row-start-1 xl:row-end-3 group h-full flex flex-col"
          >
            <div class="relative flex-1">
              <img
                :src="TOP_PRODUCT_MAIN.img"
                :alt="TOP_PRODUCT_MAIN.name"
                class="h-full"
              />
              <div
                class="absolute inset-0 bg-design-orange/75 flex items-center justify-center text-center text-white flex-col px-1 lg:px-8 whitespace-pre-line opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <p class="font-bold text-22 lg:text-32">
                  {{ TOP_PRODUCT_MAIN.name }}
                </p>
                <p class="text-14 lg:text-20 mt-5">
                  {{ TOP_PRODUCT_MAIN.description }}
                </p>
              </div>
            </div>
            <a
              href="/service-menu"
              class="text-center text-white tracking-wider cursor-pointer flex items-center justify-center bg-gradient-to-r from-design-orange to-[#F8B62D] h-24 lg:h-40"
              ><span class="font-black font-noto text-32 mr-2"
                >Menu
                <IconWrapper
                  name="ri-arrow-right-line"
                  class="h-7 text-28 animate-[ArrowRight_500ms_infinite_alternate_ease-in-out] inline-block"
              /></span>
            </a>
          </div>

          <div
            v-for="(i, ii) in TOP_PRODUCTS"
            class="aspect-square w-full object-cover col-span-2 relative group h-full"
          >
            <img
              :src="`/top-products/${i.img}`"
              :alt="i.name"
              class="w-full h-full block object-cover"
            />
            <div
              class="absolute inset-0 bg-design-orange/75 flex items-center justify-center text-center text-white flex-col px-1 lg:px-8 whitespace-pre-line opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <p class="font-bold text-16">{{ i.name }}</p>
              <p class="text-14 mt-2">{{ i.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<style>
@keyframes MtfkFlower {
  from {
    rotate: 0;
  }
  to {
    rotate: -360deg;
  }
}
#MtfkFlower {
  animation: MtfkFlower infinite linear 8s;
}

@keyframes AkijoText {
  to {
    scale: 1.1;
  }
}
#AkijoText {
  animation: AkijoText 700ms alternate infinite
    cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

@keyframes ArrowRight {
  to {
    transform: translateX(2px);
  }
}
</style>
