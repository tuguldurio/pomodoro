<template>
  <div class="min-h-screen transition" :class="bgClass">
    <div class="container mx-auto text-white text-center">
      <Modes @change="stopTimer" />
      
      <Progress @click="toggleTimer" :running="state.running" :duration="state.duration" />

      <div class="pb-24">
        <CogIcon @click="openSettings" class="w-8 mx-auto cursor-pointer"/>
        <SettingsModal />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { CogIcon } from '@heroicons/vue/solid'

import audio from './utils/audio'

// composables
import useModes from './composables/mode'
import useSettings from './composables/settings'

// components
import Modes from './components/Modes.vue'
import Progress from './components/Progress/index.vue'
import SettingsModal from './components/SettingsModal.vue'

const { modes, selectedMode, changeMode } = useModes()
const { settingsOpen, openSettings } = useSettings()

const state = reactive({
  running: false,
  duration: selectedMode.value.duration,
  timerId: null,
})

// update current duration based on selected mode
watch(selectedMode, () => {
  state.duration = selectedMode.value.duration
})


// update duration when settings to duration applied
watch(modes, (modes, prevModes) => {
  stopTimer()
  state.duration = selectedMode.value.duration
})

// background color based on selected mode
const bgClass = computed(() => {
  switch (selectedMode.value.id) {
    case (modes.pomodoro.id):
      return ['bg-red-400']
    case (modes.short.id):
      return ['bg-green-400']
    case (modes.long.id):
      return ['bg-blue-400']
  }
})

function toggleTimer() {
  if (!state.running) 
    startTimer()
  else 
    stopTimer()
}

function startTimer() {
  state.running = true
  state.timerId = setTimer()
}

function stopTimer() {
  state.running = false
  clearInterval(state.timerId)
}

function setTimer() {
  return setInterval(() => {
    if (state.duration <= 0) { // if timer ends
      stopTimer()
      audio.bell.play()

      switch (selectedMode.value.id) {
        case (modes.short.id):
          changeMode(modes.pomodoro)
          break
        case (modes.pomodoro.id):
          changeMode(modes.short)
          break
        case (modes.long.id):
          changeMode(modes.pomodoro)
          break
      }
    }
    else {
      state.duration -= 1
    }
  }, 1000)
}
</script>

<style>

</style>