import { sample, createEffect, createStore } from 'effector'
import { createEvent, restore } from 'effector'

export type Theme = 'light' | 'dark'

export const changeTheme = createEvent()
export const changeThemeButtonClick = createEvent()

export const switchThemeFx = createEffect(async () => {
  if (!window) return

  //   const theme = localStorage.getItem('theme')
  const theme = $theme.getState()

  console.log(theme)

  if (theme && theme === 'light') {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    return
  }

  if (theme && theme === 'dark') {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    return
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
})

export const $theme = createStore('').on(switchThemeFx.done, (theme) => {
  if (theme === 'dark') return 'light'
  if (theme === 'light') return 'dark'
})

sample({
  clock: changeTheme,
  target: switchThemeFx
})
