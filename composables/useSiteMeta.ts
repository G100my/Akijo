import type { ComputedRef } from 'vue'
import mojow from '~/assets/brandLogo/mojow.png'

export function useSiteMeta() {
  return {
    get navItems(): ComputedRef<{ label: string; to: string }[]> {
      const { t: $t } = useI18n()
      return computed(() => [
        { label: $t('index.about'), to: 'About' },
        { label: $t('index.menu'), to: 'ServiceMenu' },
        { label: 'option - 1', to: 'index' },
        { label: 'option - 2', to: 'index' },
        { label: 'option - 3', to: 'index' },
      ])
    },

    get socialMedias(): { label: string; to: string; short?: string; iconName: string }[] {
      return [{ label: 'Instegram', to: 'https://www.instagram.com/akijo____/', iconName: 'ri-instagram-line' }]
    },

    get brands(): { label: string; logo: string; to: string }[] {
      return [
        {
          label: 'Mojow',
          to: 'https://www.gillianspace.com.tw/ImportedFurniture-Mojow.html',
          logo: mojow,
        },
      ]
    },

    get menu(): { label: string; img: string; description: string }[] {
      return ['A coffee', 'B coffee', 'C coffee'].map(i => ({
        label: i,
        img: `https://fakeimg.pl/300?text=${i}`,
        description: `something about ${i}`,
      }))
    },
  }
}
