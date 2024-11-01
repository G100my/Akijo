import Markdown from 'unplugin-vue-markdown/vite'
import { SERVICEWORKER_FILE_NAME } from './constants'

const isDev = process.env.NODE_ENV === 'development' ? true : undefined
const isProd = process.env.NODE_ENV === 'production' ? true : undefined

const metaTitle = '萩条集結所 Akijo'
const metaDescription = 'Hi, 這裡是 萩条集結所Akijo，一起來過萩条生活吧'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devServer: {
    port: 2304,
  },
  modules: [
    '@nuxt/content',
    'nuxt-typed-router',
    '@nuxtjs/tailwindcss',
    'nuxt-typed-router',
    'nuxt-simple-sitemap',
    '@vite-pwa/nuxt',
    'nuxt-svgo-loader',
    'nuxt-swiper',
    'dayjs-nuxt',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: metaTitle,

      meta: [
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: metaTitle },
        { property: 'og:locale', content: 'zh-TW' },
        { property: 'og:description', content: metaDescription },
        { property: 'og:image', content: 'https://akijo.space/avatar.jpg' },
        { property: 'og:url', content: 'https://akijo.space' },
      ],

      link: [
        { rel: 'icon', href: './favicon.png' },
        // remix icon
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css',
        },
        // google font
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Noto+Sans+TC:wght@100..900&display=swap',
        },
      ],
      script: [
        // justfont
        isDev
          ? {
              src: '//s3-ap-northeast-1.amazonaws.com/justfont-user-script/jf-64974.js',
            }
          : {
              async: true,
              type: 'text/javascript',
              // '\' must be replace as '\\'
              innerHTML: `var _jf = _jf || [];_jf.push(['p','64974']);_jf.push(['initAction',true]);_jf.push(['_setFont','jf-openhuninn','css','.jf-openhuninn']);_jf.push(['_setFont','jf-openhuninn','alias','jf-openhuninn']);_jf.push(['_setFont','jf-openhuninn','weight',400]);_jf.push(['_setFont','burnfont','css','.burnfont']);_jf.push(['_setFont','burnfont','css','h1.burnfont']);_jf.push(['_setFont','burnfont','alias','burnfont']);_jf.push(['_setFont','burnfont','weight',900]);(function(A,p,c,m,l,q,r,h,B,D){var b=A._jf;if(b.constructor!==Object){var t=!0,u=function(a){var f=!0,e;for(e in b)b[e][0]==a&&(f&&(f=f&&!1!==b[e][1].call(b)),b[e]=null,delete b[e])},v=/\S+/g,w=/[\t\r\n\f]/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,n="".trim,x=n&&!n.call("\ufeff\u00a0")?function(a){return null==a?"":n.call(a)}:function(a){return null==a?"":(a+"").replace(C,"")},k=function(a){var f,b,g;if("string"===typeof a&&a&&(a=(a||"").match(v)||[],f=h[c]?(" "+h[c]+" ").replace(w," "):" ")){for(g=0;b=a[g++];)0>f.indexOf(" "+b+" ")&&(f+=b+" ");h[c]=x(f)}},d=function(a){var b,e,g;if(0===arguments.length||"string"===typeof a&&a){var d=(a||"").match(v)||[];if(b=h[c]?(" "+h[c]+" ").replace(w," "):""){for(g=0;e=d[g++];)for(;0<=b.indexOf(" "+e+" ");)b=b.replace(" "+e+" "," ");h[c]=a?x(b):""}}},y;b.addScript=y=function(b,f,e,g,d,c){d=d||function(){};c=c||function(){};var a=p.createElement("script"),h=p.getElementsByTagName("script")[0],k,m=!1,l=function(){a.src="";a.parentNode.removeChild(a);a=a.onerror=a.onload=a.onreadystatechange=null};g&&(k=setTimeout(function(){l();c()},g));a.type=f||"text/javascript";a.async=e;a.onload=a.onreadystatechange=function(b,c){m||a.readyState&&!/loaded|complete/.test(a.readyState)||(m=!0,g&&clearTimeout(k),l(),c||d())};a.onerror=function(a,b,d){g&&clearTimeout(k);l();c();return!0};a.src=b;h.parentNode.insertBefore(a,h)};for(var z in b)"initAction"==b[z][0]&&(t=b[z][1]);b.push(["_eventPreload",function(){1==t&&k(m);y(B,null,!1,3E3,null,function(){u("_eventInactived")})}]);b.push(["_eventReload",function(){d(r);d(q);k(l)}]);b.push(["_eventActived",function(){d(m);d(l);k(q)}]);b.push(["_eventInactived",function(){d(m);d(l);k(r)}]);u("_eventPreload")}})(this,this.document,"className","jf-loading","jf-reloading","jf-active","jf-inactive",this.document.getElementsByTagName("html")[0],"//ds.justfont.com/js/stable/v/6.1/id/411254790256");`,
            },
        // GA
        isProd && {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-5W9ZMDZJ7B',
          async: true,
        },
        isProd && {
          innerHTML: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5W9ZMDZJ7B');`,
        },
        // instagram embed
        {
          src: '//www.instagram.com/embed.js',
          async: true,
          onload: `window.instgrm.Embeds.process()`,
        },
      ],
    },
  },
  components: [
    { path: '~/content', extensions: ['.md'], prefix: 'Markdown' },
    '~/components',
  ],
  vite: {
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
    plugins: [
      Markdown({
        wrapperClasses: 'markdown-body',
      }),
    ],
  },
  site: {
    url: 'https://akijo.space',
  },
  pwa: {
    srcDir: './',
    filename: `${SERVICEWORKER_FILE_NAME}.ts`,
    strategies: 'injectManifest',
    injectRegister: false,
    injectManifest: {
      injectionPoint: undefined,
    },
    manifest: false,
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  // https://tailwindcss.nuxtjs.org/getting-started/options#viewer
  tailwindcss: {
    cssPath: './assets/index.css',
    configPath: './tailwind.config.js',
    exposeConfig: true,
    // injectPosition: 'first',
    viewer: true,
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    navigation: false,
  },
})
