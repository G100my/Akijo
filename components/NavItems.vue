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

const drawerToggleID = 'navbar_drawer'
</script>

<template>
  <input :id="drawerToggleID" type="checkbox" class="drawer-toggle" />

  <Teleport to=".drawer > .drawer-content">
    <header class="navbar fixed w-full bg-base-300/50">
      <h1 class="mx-2 flex-1 px-2">Akijo</h1>

      <nav class="hidden flex-none lg:block">
        <ul class="menu menu-horizontal">
          <li v-for="(i, index) in menu" :key="index">
            <NuxtLink :to="i.to">{{ i.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex-none lg:hidden">
        <label :for="drawerToggleID" class="btn-ghost btn-square btn">
          <LGoogleIcon name="menu" />
        </label>
      </div>
    </header>
  </Teleport>

  <aside class="drawer-side">
    <label :for="drawerToggleID" class="drawer-overlay" />
    <ul class="menu w-80 bg-base-100 p-4">
      <li v-for="(i, index) in menu" :key="index">
        <NuxtLink :to="i.to">{{ i.label }}</NuxtLink>
      </li>
    </ul>
  </aside>
</template>
