import { initializeApp } from 'firebase/app'
import { Messaging, getMessaging, getToken } from 'firebase/messaging'
import { SERVICEWORKER_FILE_NAME } from '~/constants'
import ImgAvatar from '@/assets/avatar.jpg'

export const vapidKey = 'BPlCWPfPI5M10xlYqpI-yAkoz8pFhxJf1Pg8b8wAsS7vcAZggn8eOq2vwQ5GW7esycsm5gpvSaLyTvNw9ITtvE8'

const swScript = import.meta.env.MODE === 'production' ? `/${SERVICEWORKER_FILE_NAME}.js` : '/dev-sw.js?dev-sw'
const options: RegistrationOptions = { type: import.meta.env.MODE === 'production' ? 'classic' : 'module' }

async function getRegistration(): Promise<ServiceWorkerRegistration> {
  let registration: ServiceWorkerRegistration | undefined
  registration = await navigator.serviceWorker.getRegistration()
  // registration = await navigator.serviceWorker.register(swScript, options)
  if (!registration) registration = await navigator.serviceWorker.register(swScript, options)
  if (!registration?.pushManager) console.warn(`Not support 'pushManager', `, registration?.pushManager)
  return registration
}

export default defineNuxtPlugin(async (nuxtApp) => {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) return {}
  // https://firebase.google.com/docs/web/setup#available-libraries
  const firebaseConfig = {
    apiKey: 'AIzaSyCFCE3HwDb9hc8jgtSIksyLDFP9avp-_cc',
    authDomain: 'akijo-web-push.firebaseapp.com',
    projectId: 'akijo-web-push',
    storageBucket: 'akijo-web-push.appspot.com',
    messagingSenderId: '1006805117774',
    appId: '1:1006805117774:web:5f42dc166d2b9d4b3a0c1f',
  }
  const app = initializeApp(firebaseConfig)

  // messaging will result in an error under 'http'
  if (window.location.protocol === 'http:') return {}

  let messaging: Messaging, serviceWorkerRegistration: ServiceWorkerRegistration
  try {
    messaging = getMessaging(app)
    serviceWorkerRegistration = await getRegistration()
  } catch (error) {
    console.error(error)
  }

  return {
    provide: {
      firebaseMessagingGetToken: () =>
        getToken(messaging, { vapidKey, serviceWorkerRegistration })
          .then((currentToken) => {
            if (currentToken) {
              // Send the token to your server and update the UI if necessary
              if (import.meta.dev) console.log(currentToken)
              new Notification('萩条集結所', { body: '耶 歡迎成為萩条人！', badge: ImgAvatar })
            } else {
              // Show permission request UI
              console.warn('No registration token available. Request permission to generate one.')
            }
          })
          .catch((err) => {
            console.error('An error occurred while retrieving token. ')
            console.error(err)
          }),
    },
  }
})
