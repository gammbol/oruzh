import './external/keen-slider.js'
import {Slider} from './local/slider.mjs'
import {MobileMenu} from './local/menu.mjs'

document.addEventListener('DOMContentLoaded', () => {
  MobileMenu()
  Slider()
})
