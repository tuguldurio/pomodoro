import { ref, reactive, watch } from 'vue'
import cookies from 'js-cookie'

if (cookies.get('durations') == null) {
  cookies.set('durations', {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 20 * 60
  })
}

const modes = reactive({
  pomodoro: {
    id: 'pomodoro',
    title: 'Pomodoro',
    duration: JSON.parse(cookies.get('durations')).pomodoro
  },
  short: {
    id: 'short',
    title: 'Short Break',
    duration: JSON.parse(cookies.get('durations')).short
  },
  long: {
    id: 'long',
    title: 'Long Break',
    duration: JSON.parse(cookies.get('durations')).long
  },
})

const selectedMode = ref(modes.pomodoro)

export default function useModes() {
  function changeMode(mode) {
    if (!mode.id in modes) {
      throw 'Parameter is not mode!'
    }
    selectedMode.value = mode
    // const favicon = document.getElementById("favicon");
    // favicon.href = "https://www.google.com/favicon.ico";
    // favicon.
  }

  return {
    modes,
    selectedMode,
    changeMode
  }
}