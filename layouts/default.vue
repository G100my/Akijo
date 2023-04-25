<script lang="ts" setup>
import { NuxtLink } from '#components'

const { t: $t } = useI18n()

const { navItems } = useSiteMeta()
const menu = (props: any) =>
  navItems.value.map((i, ii) =>
    h(
      'li',
      { key: ii, ...props },
      h(NuxtLink, { to: { name: i.to }, class: 'bg-slate-300/80 rounded-full' }, () => i.label)
    )
  )

const drawerToggleID = 'navbar_drawer'
</script>

<template>
  <div class="drawer drawer-end">
    <input :id="drawerToggleID" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <nav class="navbar fixed top-0 w-full pl-4 pr-6 pt-3 z-30">
        <h1 class="flex-1 font-black">{{ $t('base.akijo_fullname') }}</h1>

        <div class="hidden flex-none font-medium lg:block">
          <ul class="menu menu-horizontal gap-2">
            <Component :is="menu" />
          </ul>
        </div>

        <div class="flex-none lg:hidden">
          <label :for="drawerToggleID" class="btn-ghost btn-square btn">
            <LRemixIcon name="ri-menu-fill" class="text-2xl" />
          </label>
        </div>
      </nav>
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
