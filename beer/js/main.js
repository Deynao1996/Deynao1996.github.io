import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin.js'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import setPreloader from './modules/setPreloader'
import toggleMenu from './modules/toggleMenu'
import customCursor from './modules/customCursor'
import scrollToElements from './modules/scrollToElements'
import animateStuff from './modules/animateStuff'
import fakeHandleSubmit from './modules/fakeHandleSubmit'

gsap.registerPlugin(ScrollToPlugin, CSSRulePlugin, Flip, ScrollTrigger)

window.paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
}

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  toggleMenu()
  setPreloader()
  scrollToElements()
  customCursor()
  animateStuff()
  fakeHandleSubmit()
})
