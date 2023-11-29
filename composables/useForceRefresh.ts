export function useForceRefreshJF() {
  onMounted(() => {
    nextTick(() => {
      if (window._jf) {
        window._jf.flush()
        console.log('flush')
      }
    })
  })
}
export function useForceRefreshIG() {
  onMounted(() => {
    nextTick(() => {
      // @ts-ignore
      if (window.instgrm) {
        // @ts-ignore
        window.instgrm.Embeds.process()
        console.log('process')
      } else console.log('Can not process')
    })
  })
}
