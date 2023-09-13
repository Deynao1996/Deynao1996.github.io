import { gsap } from "gsap"
import { CSSRulePlugin } from "gsap/CSSRulePlugin.js";

export function closeMenu(rule) {
  const tl = gsap.timeline() 
    tl.to('.menu__close', { opacity: 0 })
      .to('.menu__items li', { opacity: 0, stagger: 0.1, onComplete: () => toggleMenuState('.menu')}, '<')
      .to(rule, { duration: 0.5, cssRule: { scale: 1 }})
      .to('.nav__lines', { opacity: 1}, "<")
  return tl
}

export function toggleMenuState(menuClass) {
  const menu = document.querySelector(menuClass)

  menu.classList.toggle('menu_hide')
  if (menu.classList.contains('menu_hide')) {
    document.body.style.overflow = ''
  } else {
    document.body.style.overflow = 'hidden'
  }
}

const toggleMenu = () => {
  const openBtn = document.querySelector('.nav__menu'),
        closeBtn = document.querySelector('.menu__close'),
        rule = CSSRulePlugin.getRule(".nav__menu:after")

  function openMenu() {
    const tl = gsap.timeline() 
  
    tl.to(rule, { duration: 1, cssRule: { scale: 50 }})
      .to('.nav__lines', { 
        opacity: 0, 
        onComplete: () => toggleMenuState('.menu')
      })
      .to('.menu__items li', { opacity: 1, stagger: 0.5 } )
      .to('.menu__close', { opacity: 1 }, "<")
  }
  
  openBtn.addEventListener('click', openMenu)
  closeBtn.addEventListener('click', () => closeMenu(rule))
}

export default toggleMenu