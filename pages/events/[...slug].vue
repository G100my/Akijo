<script setup lang="ts">
import { Autoplay, EffectCube } from 'swiper/modules'
const modules = [Autoplay, EffectCube]
</script>
<template>
  <section>
    <ContentDoc v-slot="{ doc }">
      <div>
        <h2 class="_page_title !px-0 xl:!px-[140px] !text-28 xl:!text-40">
          {{ doc.title }}
        </h2>
      </div>

      <hr class="border-t-2 border-slate-950" />

      <article
        class="mx-auto container my-12 border-2 border-slate-950 py-10 px-4 lg:p-12 bg-[#E5E4DE]"
      >
        <div
          v-if="doc.media?.length"
          class="float-left mr-12 mb-10 max-w-[480px] min-h-80 w-full"
        >
          <Swiper
            :effect="'cube'"
            grabCursor
            :slidesPerView="'auto'"
            :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
            :loop="true"
            :modules="modules"
          >
            <SwiperSlide v-for="i in doc.media" :key="i._id">
              <MediaBlock
                :src="i"
                :title="doc.title"
                class="border-2 border-slate-950"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <ContentRenderer
          :value="doc"
          class="prose prose-xl max-w-none lg:text-center ml-auto text-14"
        />

        <div class="clear-both"></div>

        <div v-if="doc.records" class="grid grid-cols-3">
          <!-- <img v-for="i in doc.pictureRecords" :src="" alt="" /> -->
        </div>
      </article>

      <div class="my-12 mb-16">
        <a
          class="font-bold py-2 px-12 border-2 border-slate-950 mx-auto block w-fit cursor-pointer"
          @click="$router.back()"
          >BACK</a
        >
      </div>
    </ContentDoc>
  </section>
</template>
