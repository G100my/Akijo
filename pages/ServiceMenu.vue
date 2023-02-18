<script lang="ts" setup></script>

<template>
  <header class="flex h-96 flex-shrink-0 items-center justify-center bg-gray-100">???</header>
  <main class="space-y-10 p-5">
    <div class="text-center">
      <h3>消費規則？？</h3>
      <ul class="mx-auto w-2/3 list-decimal">
        <li>禁帶外食</li>
        <li>免服務費</li>
        <li>不給水</li>
        <li></li>
        <li>禁帶外食</li>
      </ul>
    </div>

    <div>
      <ul class="flex flex-col gap-4">
        <li v-for="i in menu" class="flex">
          <img :src="i.img" :alt="i.label" class="w-24" />
          <div class="flex flex-1 flex-col justify-center p-6">
            <p>{{ i.label }}</p>
            <p>{{ i.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped></style>
