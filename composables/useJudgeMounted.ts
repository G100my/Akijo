export const useJudgeMounted = () => {
  const isMounted = ref(false)
  onMounted(() => {
    isMounted.value = true
  })
  return { isMounted }
}
