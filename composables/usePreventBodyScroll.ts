const preventClass = 'prevent-scroll'
export const usePreventBodyScroll = (prevent: any) => {
  if(process.server) return;

  watch(prevent, (active: boolean) => {
    window.document.body.classList.toggle('!overflow-hidden', active)
  }, { immediate: true })

  onUnmounted(() => {
    window.document.body.classList.remove('!overflow-hidden')
  })
}