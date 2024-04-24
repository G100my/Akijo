<script setup lang="ts">
import ImgHeart from '@/assets/heart_green.svg'
import { useDayjs } from '#dayjs'

const props = defineProps<{
  coverUrl: string
  title: string
  datetime: Date | number | ReturnType<typeof dayjs>
  subtitle?: string
  description: string
  link: string
  isActive: boolean
}>()

const dayjs = useDayjs()
const datetimeString = computed(() => {
  const t = dayjs(props.datetime)
  return {
    year: t.year(),
    date: t.format('MMM.DD'),
  }
})
</script>
<template>
  <div class="px-6 pt-9 relative">
    <div
      class="absolute right-2 top-3 transition-transform"
      :class="[
        isActive
          ? 'animate-[heart-wiggle_2s_ease-in-out_infinite_alternate]'
          : 'rotate-12',
      ]"
    >
      <ImgHeart />
      <div
        class="absolute inset-0 m-auto w-fit h-fit whitespace-nowrap text-center"
      >
        <p class="font-black text-26">{{ datetimeString.date }}</p>
        <p class="font-black text-12">{{ datetimeString.year }}</p>
      </div>
    </div>
    <div class="_event_container flex h-[380px] border-2 border-black">
      <div class="w-1/2 flex-1 aspect-square">
        <img :src="coverUrl" :alt="title" class="h-full w-full" />
      </div>
      <div class="w-1/2 flex-1 border-l-2 border-black relative">
        <div class="pt-8 flex flex-col h-[328px]">
          <div class="px-12">
            <h3 class="text-32 font-black">{{ title }}</h3>
            <h4 v-if="subtitle" class="text-20 text-design-lightgray">
              {{ subtitle }}
            </h4>
          </div>

          <hr class="w-full my-4 border-black border-t-2" />

          <div class="px-12 overflow-auto flex-1 pb-2">
            <p>{{ description }}</p>
          </div>
        </div>
        <button
          type="button"
          class="bg-design-orange mt-auto h-[52px] text-center border-t-2 border-black font-jost font-bold w-full"
        >
          MORE INFO
        </button>
      </div>
    </div>
  </div>
</template>
<style>
@keyframes heart-wiggle {
  from {
    transform: rotate(9deg);
  }
  to {
    transform: rotate(18deg);
  }
}
</style>
