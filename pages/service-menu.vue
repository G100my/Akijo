<script setup lang="ts">
import ImgMenuBtn1 from '@/assets/btn_menu01.svg'
import ImgMenuBtn2 from '@/assets/btn_menu02.svg'
import { Pagination, Navigation } from 'swiper/modules'
import type { Swiper } from 'swiper'
import AkijoWithSneeze from '@/assets/akijo.svg'

definePageMeta({
  isNavbarDark: true,
})

const modules = [Pagination, Navigation]

const swiper = ref<Swiper>()
</script>
<template>
  <section>
    <section class="h-[680px] bg-design-dark">
      <!-- 旋轉外帶杯 -->
    </section>
    <div>
      <section>
        <div class="flex px-[140px] items-center">
          <h2 class="font-black text-40 py-12">MENU</h2>
          <button type="button" class="ml-auto relative">
            <ImgMenuBtn1 />
            <span class="font-bold font-noto absolute inset-0 m-auto z-10 h-fit"
              >飲品</span
            >
          </button>
          <button type="button" class="ml-8 relative">
            <ImgMenuBtn2 />
            <span class="font-bold font-noto absolute inset-0 m-auto z-10 h-fit"
              >甜點</span
            >
          </button>
        </div>
      </section>

      <section class="border-t-2 border-t-slate-950 border-l-2">
        <div class="flex w-full">
          <div class="flex-1 w-1/2 border-r-2 border-r-slate-950">
            <Swiper
              class="w-full pb-20 h-[664px]"
              :slidesPerView="'auto'"
              :spaceBetween="30"
              :centeredSlides="true"
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
                v-for="i in 10"
                v-slot="{ isActive }"
                class="!w-[1012px]"
              >
                <div>{{ i }}</div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="flex-1 w-1/2 flex flex-col">
            <div class="flex-[2] flex px-36 pt-12">
              <div class="vertical-lr ml-auto flex flex-col gap-8">
                <p>產品名稱<span>-----</span>產品簡介產品簡介</p>
                <p>產品名稱<span>-----</span>產品簡介產品簡介</p>
                <p>產品名稱<span>-----</span>產品簡介產品簡介</p>
                <p>產品名稱<span>-----</span>產品簡介產品簡介</p>
                <p>產品名稱<span>-----</span>產品簡介產品簡介</p>
              </div>
            </div>
            <div class="flex-1">
              <AkijoWithSneeze />
            </div>
            <div class="flex-1">
              <!-- 產品圖片 -->
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
</style>
