<template>
  <div class="relative inline-block my-24 text-red-500 select-none">
    <ProgressRing @click="emit('click')" :progress="progress" />
    
    <div class="absolute top-0 left-0 w-full h-full flex flex-col space-y-2N justify-center items-center">
      <p class="text-7xl sm:text-8xl text-white" >{{minRepr}}</p>
      <div class="relative top-4" :class="[props.running ? 'pause' : 'play']"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmit, computed, watch } from 'vue'
import useModes from '../../composables/mode'

import ProgressRing from './Ring.vue'

const { modes, selectedMode, changeMode } = useModes()

const props = defineProps({
  running: Boolean,
  duration: Number,
})

const emit = defineEmit(['click'])

// representation of time on ui
const minRepr = computed(() => {
  return parseInt(props.duration / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':' + (props.duration % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
})

// for progress bar
const progress = computed(() => {
  return 100 - props.duration / selectedMode.value.duration * 100
})

// change title of page based on the diration
document.title = minRepr.value + ' - Pomodoro'
watch(minRepr, () => {
  document.title = minRepr.value + ' - Pomodoro'
})
</script>

<style>
.play {
  border-color: transparent transparent transparent #fff;
  border-style: solid;
  border-width: 1rem 0 1rem 1.5rem;
}

.pause {
  width: 1.5rem;
  height: 2rem;
  border-style: double;
  border-width: 0px 0px 0px 1.25rem;
  border-color: #fff;
}
</style>