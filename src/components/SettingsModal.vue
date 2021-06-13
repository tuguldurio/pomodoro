<template>
  <TransitionRoot appear :show="settingsOpen" as="template">
    <Dialog :open="settingsOpen" @close="closeSettings">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <TransitionChild
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div class="w-full max-w-md relative left-1/2 transform -translate-x-1/2 p-6 my-8 overflow-hidden text-left transition-all bg-white shadow-xl rounded-xl">
              <div @click="closeSettings" class="absolute right-0 top-0 mt-3 mr-3 text-gray-400 hover:text-gray-900 transition-colors duration-100 cursor-pointer">✕</div>
              <div class="inline-flex flex-col divide-y w-full overflow-hidden text-left">
                <p class="pb-4 text-xl font-medium leading-6 text-gray-900">Settings</p>

                <div class="py-4">
                  <div class="">
                    <p class="text-lg text-gray-900">Time (minutes)</p>
                    <div class="grid grid-cols-3 gap-x-2 sm:gap-x-8">
                      <div v-for="mode in modes" class="flex flex-col">
                        <label class="my-1 flex-1 text-sm font-light text-gray-700">{{mode.title}}</label>
                        
                        <input type="number" min="1" step="1" :value="state.durations[mode.id]" @change="changed($event, mode.id)"
                          class="w-full box-border p-2 bg-gray-200 rounded-lg focus:outline-none"
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-4">
                  <button
                    class="inline float-right px-4 py-2 text-sm font-medium text-red-900 bg-red-100 hover:bg-red-200 transition border border-transparent rounded-md duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    @click="apply"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'
import cookies from 'js-cookie'

import useModes from '../composables/mode'
import useSettings from '../composables/settings'

const { modes, selectedMode } = useModes()
const { settingsOpen, closeSettings } = useSettings()

const state = reactive({
  durations: {
    pomodoro: parseInt(modes.pomodoro.duration / 60),
    short: parseInt(modes.short.duration / 60),
    long: parseInt(modes.long.duration / 60)
  }
})

function changed(event, modeId) {
  state.durations[modeId] = event.target.value
}

function apply() {
  settingsOpen.value = false
  
  modes.pomodoro.duration = state.durations.pomodoro * 60
  modes.short.duration = state.durations.short * 60
  modes.long.duration = state.durations.long * 60

  cookies.set('durations', {
    pomodoro: modes.pomodoro.duration,
    short: modes.short.duration,
    long: modes.long.duration
  })
}
</script>

<style>
</style>