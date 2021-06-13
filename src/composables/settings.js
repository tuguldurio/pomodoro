import { ref } from 'vue'

const settingsOpen = ref(false)

export default function useSetting() {
  function closeSettings() {
    settingsOpen.value = false
  }

  function openSettings() {
    settingsOpen.value = true
  }
  
  return {
    settingsOpen, 
    closeSettings,
    openSettings
  }
}