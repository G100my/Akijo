<script setup lang="ts">
import ImgMenuBtn2 from '@/assets/btn_menu02.svg'
import { Pagination, Navigation } from 'swiper/modules'
import type { Swiper } from 'swiper'
import AkijoWithSneeze from '@/assets/akijo.svg'
import menu from '@/assets/menu.json'

definePageMeta({
  isNavbarDark: true,
})

const modules = [Pagination, Navigation]

const swiper = ref<Swiper>()

const currentCategory = ref(
  menu.find((i) => i.name === '萩•浪漫基因特調') ?? menu[0],
)

const currentItemsWithPhoto = computed(() =>
  currentCategory.value.items.filter((i) => i.photo_id),
)

function jumpTo(id: string | number) {
  const index = currentItemsWithPhoto.value.findIndex((i) => i.id === id)
  if (index !== -1) swiper.value?.slideTo(index)
}
</script>
<template>
  <section>
    <!-- <section class="h-[680px] bg-design-dark">
      旋轉外帶杯
    </section> -->
    <div>
      <section>
        <div class="flex items-center">
          <h2 class="px-[140px] font-black text-40 py-12">MENU</h2>
          <div
            class="ml-auto flex flex-wrap gap-8 items-center justify-end no-scrollbar pr-20"
          >
            <button
              v-for="i in menu"
              type="button"
              class="ml-4 relative"
              @click="currentCategory = i"
            >
              <ImgMenuBtn2
                class="transition-colors"
                :class="
                  currentCategory.id === i.id
                    ? 'text-design-orange'
                    : 'text-white'
                "
              />
              <span
                class="font-bold font-noto text-14 absolute inset-0 m-auto z-10 h-fit"
                :class="
                  currentCategory.id === i.id ? 'text-white' : 'text-slate-950'
                "
                >{{ i.name }}</span
              >
            </button>
          </div>
        </div>
      </section>

      <section class="border-t-2 border-t-slate-950 border-l-2">
        <div class="flex w-full h-[660px]">
          <div class="flex-1 w-1/2 border-r-2 border-r-slate-950">
            <Swiper
              class="w-full h-full"
              :slidesPerView="1"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
                bulletClass: 'bulletClass',
                bulletActiveClass: 'bulletActiveClass',
                horizontalClass: 'horizontalClass_offset',
              }"
              :modules="modules"
              :navigation="{
                nextEl: '#next_btn',
                prevEl: '#prev_btn',
              }"
              @swiper="swiper = $event"
            >
              <SwiperSlide
                v-for="i in currentItemsWithPhoto"
                v-slot="{ isActive }"
              >
                <div class="bg-black w-full h-full">
                  <img
                    :src="i.photo_url"
                    :alt="i.name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div class="flex-1 w-1/2 relative flex flex-col">
            <div
              class="menu-content px-8 pt-12 pb-4 overflow-auto w-full flex-1 relative z-10"
            >
              <div
                class="ml-auto vertical-lr grid gap-6 grid-cols-[min-content,min-content,1fr] items-center min-w-[70%]"
              >
                <div
                  v-for="i in currentCategory.items"
                  class="contents"
                  :class="{
                    'hover:text-design-orange cursor-pointer': i.photo_id,
                  }"
                  @click="jumpTo(i.id)"
                >
                  <p class="whitespace-pre">
                    {{ i.name.replaceAll(' ', '\n') }}
                  </p>
                  <hr v-if="i.intro" class="h-10 bg-current w-px" />
                  <span v-else />
                  <p class="whitespace-pre-wrap text-12">{{ i.intro }}</p>
                </div>
              </div>
            </div>

            <div class="relative">
              <AkijoWithSneeze
                class="absolute bottom-5 left-3 drop-shadow-lg"
              />
            </div>

            <div
              class="flex overflow-auto no-scrollbar h-40 border-t-2 border-slate-950"
            >
              <template v-for="(i, index) in currentItemsWithPhoto" :key="i.id">
                <img
                  v-if="i.photo_id"
                  :src="i.photo_url"
                  :alt="i.name"
                  class="h-full aspect-square object-cover cursor-pointer"
                  @click="swiper?.slideTo(index)"
                />
              </template>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<style>
.vertical-lr {
  writing-mode: vertical-lr;
}

.menu-content::-webkit-scrollbar-track {
  @apply bg-design-lightgray/40;
}

.menu-content::-webkit-scrollbar {
  @apply h-2;
}

.menu-content::-webkit-scrollbar-thumb {
  @apply bg-design-orange;
}
</style>
