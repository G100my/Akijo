import mojow from '@/assets/brand/mojow.png'
import mojowCover from '@/assets/brand/mojow-cover.png'
import olend from '@/assets/brand/olend.avif'
import olendCover from '@/assets/brand/olend-cover.jpeg'

import IconShopee from '@/assets/icon/icon_shopee.svg?component'
import IconIG from '@/assets/icon/icon_ig.svg?component'
import type { NuxtLinkProps } from '#app'
import IconWrapper from '~/components/IconWrapper.vue'

export const BASE_INFO = {
  address: '高雄市三民區合江街27號',
  google_navigation_url: 'https://maps.app.goo.gl/Ljc6r3oH5kshpEdRA',
  opening_time: [`日一二三四｜14:00-22:00`, `五六｜14:00-23:00`],
  tel: '073229337',
  tel_display: '07-322-9337',
  ig_url: 'https://www.instagram.com/akijo____/',
  shopee_url: 'https://shopee.tw/sh910904',
  dudu_take_away_url:
    'https://store.dudooeat.com/orderv2/menu/8df9f38a903c442b9f8c1589445256ca',
  ubereat_url:
    'https://www.ubereats.com/tw/store/%E8%90%A9%E6%9D%A1%E9%9B%86%E7%B5%90%E6%89%80/2N4lhohxXcupRMYrMvwCHg',
  seven_myship_url: 'https://myship.7-11.com.tw/general/detail/GM2405156314315',
}

interface RouteItem {
  label: string
  to: string
  target?: NuxtLinkProps['target']
}
export const ROUTES: {
  index: RouteItem
  pages: RouteItem[]
} = {
  index: { label: 'AKIJO', to: '/' },
  pages: [
    { label: 'Menu', to: '/service-menu' },
    { label: 'Partner', to: '/partner' },
    { label: 'Events', to: '/events' },
    { label: 'Contacts', to: '/contacts' },
    { label: 'Portaly', to: '/portaly' },
  ],
}

export const QUICK_LINKS = [
  {
    label: 'Instagram',
    to: BASE_INFO.ig_url,
    icon: () => h(IconIG),
  },
  {
    label: 'Shopee For Sale',
    to: BASE_INFO.shopee_url,
    icon: () => h(IconShopee),
  },
  {
    label: '7-11 On Sale',
    to: BASE_INFO.seven_myship_url,
    icon: () => h(IconWrapper, { name: 'truck-line', class: 'text-3xl' }),
  },
  {
    label: 'DuDu online menu',
    to: BASE_INFO.dudu_take_away_url,
    icon: () =>
      h(
        'span',
        {
          class:
            'whitespace-break-spaces leading-none text-sm text-center font-black !w-fit flex h-full items-center',
        },
        'Take\nout',
      ),
  },
]

interface Brand {
  name: string
  link: string
  logo?: string
  cover: string
  description: string
}

export const BRANDS: Brand[] = [
  {
    name: 'Mojow',
    link: 'https://mojow-design.com',
    logo: mojow,
    cover: mojowCover,
    description: `法國頂級充氣沙發品牌，多次獲得設計大獎，
    由法國設計師 Olivier Santini 將大膽的美學、材料、形狀、顏色結合而成。
    超高耐用性的ＴＰＵ材質在都市室內、郊區戶外
    都能讓你 Chill ~`,
  },
  {
    name: 'Ölend',
    link: 'https://www.olend.net/',
    logo: olend,
    cover: olendCover,
    description: `來自西班牙品牌｜Ölend
      高飽和色彩、防水輕質尼龍材質
      不同的顏色在穿搭上有著截然不同的風格
      一件兼具實用型與品牌個性的日常單品。\n
      Akijo 萩条集結所 是 Olend 官方授權的台灣經銷
      不信可以自己去網站上查`,
  },
]

interface TopProduct {
  name: string
  description: string
  img: string
}
export const TOP_PRODUCT_MAIN: TopProduct = {
  name: '✤萩豆✤',
  img: '/top-products/bean.jpeg',
  description: `✤衣索比亞 科契爾 雪冽圖 G1 水洗
    焙度｜淺焙
    風味｜橙花 水蜜桃 伯爵茶 葡萄柚

    ✤哥斯大黎加 卡內特 蕭邦 F1 葡萄乾蜜處理
    焙度｜淺中焙
    風味｜玫瑰 藍莓 鳳梨 芒果 焦糖

    ✤哥斯大黎加 帶刺玫瑰 雙重厭氧熱衝擊蜜處理
    焙度｜淺中焙
    風味｜玫瑰 荔枝 柑橘 可可
  `,
}
export const TOP_PRODUCTS: TopProduct[] = [
  {
    name: '𓈒𓏸 玫荔新世界𓈒𓏸',
    img: 'rose-lychee-beauty-new-world.jpeg',
    description: `玫瑰與荔枝的結合總有著說不出的吸引力
      是帶著紅粉泡泡的 是給人一抹清新的
      ✿浪漫從來都可以自己給自己
      或是跟我們一起✿`,
  },
  {
    name: '✤荼蘼✤',
    description: `冰滴的哥倫比亞因為低溫長時間的萃取，
      將豆子沈穩的萃出細緻酒酵香氣，
      與桂花鐵觀音茶糖這樣，
      沈沈悠悠地，喝到荼蘼。`,
    img: 'misty-osmanthus.jpeg',
  },
  {
    name: '草莓黑咖啡',
    img: 'strawberry-black-coffee.jpeg',
    description: `法國草莓果泥製造的幸福好滋味
      甜度固定、含微量酒精`,
  },
  {
    name: '琴桑',
    description: `誰沒有一點琴桑
      小農自釀桑椹醋與琴酒、氣泡水的合奏
      誰沒有啦！誰！
      不說了......再說就要哭了......`,
    img: 'gin-sad.jpeg',
  },
]
