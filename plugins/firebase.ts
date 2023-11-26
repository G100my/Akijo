import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

export const vapidKey = 'BPlCWPfPI5M10xlYqpI-yAkoz8pFhxJf1Pg8b8wAsS7vcAZggn8eOq2vwQ5GW7esycsm5gpvSaLyTvNw9ITtvE8'

export default defineNuxtPlugin(async (nuxtApp) => {
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
  const messaging = getMessaging(app)
  const serviceWorkerRegistration = await getRegistration()
  getToken(messaging, { vapidKey, serviceWorkerRegistration })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        if (import.meta.dev) console.log(currentToken)
      } else {
        // Show permission request UI
        console.warn('No registration token available. Request permission to generate one.')
      }
    })
    .catch((err) => {
      console.error('An error occurred while retrieving token. ')
      console.error(err)
    })
})
