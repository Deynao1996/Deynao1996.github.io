import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splide from '@splidejs/splide'
import videojs from 'video.js'

import Accordion from './modules/accordion'
import Dropdown from './modules/dropdown'
import Menu from './modules/menu'
import PageNavigate from './modules/pageNavigate'
import StickyNavbar from './modules/stickyNavbar'
import Modal from './modules/modal'
import FakeHandleSubmit from './modules/fakeHandleSubmit'
import AnimateIt from './modules/animateIt'
import Intro from './modules/intro'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

window.paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
}

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  new Intro().init()

  const menu = new Menu({
    dataSelector: '[data-trigger]',
    menuSelector: '.menu'
  })
  menu.init()

  const signupModal = new Modal({
    attribute: 'signup',
    title: 'Sign up to our platform',
    buttonContent: 'create an account'
  })
  signupModal.init()

  const loginModal = new Modal({
    attribute: 'login',
    title: 'Sign in to our platform',
    buttonContent: 'login to your account'
  })
  loginModal.init()

  new PageNavigate({ menu, signupModal, loginModal }).init()

  new Dropdown('custom-select').init()
  new StickyNavbar().init()
  new FakeHandleSubmit({ signupModal, loginModal }).init()
  new AnimateIt().init()

  new Accordion({
    mainSelector: '.questions__item',
    contentSelector: '.questions__hide',
    activeClass: 'questions__item_active'
  }).init()

  new Splide('#image-carousel', {
    type: 'loop',
    perPage: 5,
    focus: 'center',
    fixedHeight: '650px',
    fixedWidth: '327px',
    start: 2,
    autoplay: true,
    pauseOnHover: true
  }).mount()

  new Splide('#customer-carousel', {
    type: 'slide',
    perPage: 1,
    pagination: false
  }).mount()

  videojs('my-video', {
    controls: true,
    autoplay: false,
    preload: 'auto'
  })
})
