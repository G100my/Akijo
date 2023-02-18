<script setup lang="ts">
const { socialMedias, brands } = useSiteMeta()
const { t: $t } = useI18n()
</script>
<template>
  <section id="index">
    <header class="hero min-h-screen" style="background-image: url(https://fakeimg.pl/300?text=hero_image)">
      <div class="hero-overlay bg-opacity-60" />

      <div class="hero-content flex-col text-center text-neutral-content">
        <h1 class="mb-5 text-5xl font-bold">{{ $t('base.akijo') }}</h1>

        <ul class="w-full rounded bg-black/50 py-2 pl-4 md:hidden">
          <li v-for="i in socialMedias">
            <a :href="i.to" class="flex items-center">
              <LRemixIcon :name="i.iconName" class="text-2xl" />
              <span class="mx-auto">{{ i.label }}</span>
            </a>
          </li>
        </ul>

        <div class="hidden max-w-md md:block">
          <p class="mb-5">Akijō is a carrier like amoeba We gather mtfk talented badass</p>
          <button class="btn-primary btn">Get Started</button>
        </div>
      </div>
    </header>
    <main>
      <div class="p-10">
        <h2 class="text-center text-5xl">brands title</h2>
        <ul class="flex justify-center">
          <li v-for="i in brands">
            <img class="w-60" :src="i.logo" :alt="i.label" />
          </li>
        </ul>
      </div>
    </main>
    <footer></footer>
  </section>
</template>
