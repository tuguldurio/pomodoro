<template>
  <div class="w-full h-auto max-h-20N pt-12 inline-flex space-x-2 sm:space-x-6">
    <button v-for="mode in modes" :key="mode.id" @click="change_(mode)" class="flex-1 px-4 py-2 border-2 text-sm sm:text-base focus:outline-none transition" :class="selectedClass(mode)">{{mode.title}}</button>
  </div>
</template>

<script setup>
import { defineEmit } from 'vue'
import useModes from '../composables/mode'

const { modes, selectedMode, changeMode } = useModes()

const emit = defineEmit()

function selectedClass(mode) {
  if (selectedMode.value.id == mode.id) {
    switch (selectedMode.value.id) {
      case modes.pomodoro.id:
        return ['bg-red-500 font-bold']
      case modes.short.id:
        return ['bg-green-500 font-bold']
      case modes.long.id:
        return ['bg-blue-500 font-bold']
    }
  }
}

function change_(mode) {
  changeMode(mode)
  emit('change', mode)
}
</script>

<style>

</style>