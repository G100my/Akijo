import { SERVICEWORKER_FILE_NAME } from '~/constants'

const swScript = import.meta.env.MODE === 'production' ? `/${SERVICEWORKER_FILE_NAME}.js` : '/dev-sw.js?dev-sw'
const options: RegistrationOptions = { type: import.meta.env.MODE === 'production' ? 'classic' : 'module' }

export function askPermission() {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      resolve(result)
    })

    if (permissionResult) {
      permissionResult.then(resolve, reject)
    }
  }).then(function (permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error(`permissionResult: ${permissionResult}`)
    }
  })
}

export async function getRegistration(): Promise<ServiceWorkerRegistration> {
  let registration: ServiceWorkerRegistration | undefined
  registration = await navigator.serviceWorker.getRegistration()
  // registration = await navigator.serviceWorker.register(swScript, options)
  if (!registration) registration = await navigator.serviceWorker.register(swScript, options)
  if (!registration?.pushManager) console.warn(`Not support 'pushManager', `, registration?.pushManager)
  return registration
}
