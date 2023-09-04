import animations from './modules/animations'
import mainSlider from './modules/mainSlider'
import showCards from './modules/showCards'
import showPortfolio from './modules/showPortfolio'
import scrollTop from './modules/scrollTop'
import preloader from './modules/preloader'
import showMenu from './modules/showMenu'
import WOW from 'wow.js'

window.addEventListener('load', () => {
  preloader()
  new WOW().init()
})

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  animations('.services__items', '200', '1000', 'wow', 'animate__fadeInUp')
  animations('.work__items', '200', '1000', 'wow', 'animate__fadeInUp')
  animations('.experts__items', '200', '1000', 'wow', 'animate__fadeInUp')
  animations('.experts__items', '200', '1000', 'wow', 'animate__fadeInUp')
  animations('.news__items', '200', '1000', 'wow', 'animate__fadeInUp')

  mainSlider('.promo__wrapper', '.promo__inner', '7000')

  showCards('.work__item.hide', '.btn_center')

  showPortfolio(
    '.work__item',
    '.overlay',
    '.overlay__cross',
    '.overlay__right',
    '.overlay__left'
  )
  scrollTop()
  showMenu('div[data-menu]', '.header__aside', 'header__aside_active')
})
