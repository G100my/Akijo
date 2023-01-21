<script lang="ts" setup>
import { TypedRouteList } from '@typed-router'

const { t: $t } = useI18n()
const menu: { label: string; to: TypedRouteList }[] = [
  {
    label: $t('index.about'),
    to: 'About',
  },
  {
    label: $t('index.menu'),
    to: 'ServiceMenu',
  },
  {
    label: 'option - 1',
    to: 'index',
  },
  {
    label: 'option - 2',
    to: 'index',
  },
  {
    label: 'option - 3',
    to: 'index',
  },
]
</script>

<template>
  <nav class="navbar fixed top-0">
    <div class="flex-1">
      <NuxtLink to="index" class="btn btn-ghost normal-case text-xl">Akijo</NuxtLink>
    </div>

    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li v-for="(i, index) in menu" :key="index">
          <NuxtLink :to="i.to">{{ i.label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
