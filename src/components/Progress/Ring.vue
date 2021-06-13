<template>
  <svg
    class="relative mx-auto z-10" 
    :height="radius * 2"
    :width="radius * 2"
    :key="radius"
  >
    <circle
      class="text-white stroke-current"
      fill="transparent"
      :stroke-width="stroke-2"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
    <circle
      @click="click"
      class="circle w-full h-full stroke-current"
      :class="{'text-red-500': selectedMode.id==modes.pomodoro.id, 'text-green-500': selectedMode.id==modes.short.id, 'text-blue-500': selectedMode.id==modes.long.id}"
      fill="transparent"
      :stroke-dasharray="circumference + ' ' + circumference"
      stroke-linecap="round"
      :style="{ strokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
import useModes from '../../composables/mode'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)

const { modes, selectedMode, changeMode } = useModes()

const props = defineProps({
  progress: Number,
})

const radius = ref(parseInt(fullConfig.theme.screens.sm.slice(0, -2)) < window.screen.width ? 200 : 150)
window.addEventListener('resize', () => {
  radius.value = parseInt(fullConfig.theme.screens.sm.slice(0, -2)) < window.screen.width ? 200 : 150
})

const stroke = ref(6)

const normalizedRadius = computed(() => radius.value - stroke.value * 2)
const circumference = computed(() => normalizedRadius.value * 2 * Math.PI)
const strokeDashoffset = computed(() => circumference.value - props.progress / 100 * circumference.value)
</script>

<style scoped>
circle {
  transition: stroke-dashoffset 0.05s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.circle:hover {
  cursor: pointer;
}
</style>