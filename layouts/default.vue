<script lang="ts" setup>
import { NuxtLink } from '#components'

const { t: $t } = useI18n()
const menu = (props: any) =>
  [
    { label: $t('index.about'), to: 'About' },
    { label: $t('index.menu'), to: 'ServiceMenu' },
    { label: 'option - 1', to: 'index' },
    { label: 'option - 2', to: 'index' },
    { label: 'option - 3', to: 'index' },
  ].map((i, ii) =>
    h(
      'li',
      { key: ii, ...props },
      h(NuxtLink, { to: { name: i.to } }, () => i.label)
    )
  )

const drawerToggleID = 'navbar_drawer'
</script>

<template>
  <div class="drawer drawer-end">
    <input :id="drawerToggleID" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col">
      <header class="navbar fixed w-full bg-base-300/50">
        <h1 class="mx-2 flex-1 px-2">Akijo</h1>

        <nav class="hidden flex-none lg:block">
          <ul class="menu menu-horizontal">
            <Component :is="menu" />
          </ul>
        </nav>

        <div class="flex-none lg:hidden">
          <label :for="drawerToggleID" class="btn-ghost btn-square btn">
            <LRemixIcon name="ri-menu-fill" class="text-2xl" />
          </label>
        </div>
      </header>
      <!-- Page content here -->
      <slot />

      <GlobalFooter>
        <Component :is="menu" class="link-hover link" />
      </GlobalFooter>
    </div>

    <aside class="drawer-side">
      <label :for="drawerToggleID" class="drawer-overlay" />
      <ul class="menu w-80 bg-base-100 p-4">
        <Component :is="menu" />
      </ul>
    </aside>
  </div>
</template>

<style scoped></style>
