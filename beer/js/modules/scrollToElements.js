import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin.js'
import { closeMenu } from './toggleMenu'

const scrollToElements = () => {
  const scrollToBtns = document.querySelectorAll('[data-scrollTo]')
  const scrollArrowBtn = document.querySelector('.arrow')
  const scrollCircularText = document.querySelector('.circle')
  const rule = CSSRulePlugin.getRule('.nav__menu:after')
  scrollCircularText.style.opacity = 0

  function toggleArrowUpBtn(trigger) {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= trigger) {
        toggleBtnsStyles(1, 'all', true)
      } else {
        toggleBtnsStyles(0, 'none')
      }
    })
  }

  function toggleBtnsStyles(opacity, events, withOffset) {
    let offset = window.pageYOffset
    offset = withOffset ? offset + 0.004 : 0

    scrollArrowBtn.style.opacity = opacity
    scrollArrowBtn.style.pointerEvents = events
    scrollCircularText.style.opacity = opacity
  }

  function scrollToElementByAttribute(btn) {
    const scrollToElement = document.querySelector(
      btn.getAttribute('data-scrollTo')
    )
    const offset = btn.classList.contains('arrow')
      ? 0
      : scrollToElement.offsetTop

    btn.addEventListener('click', (e) => {
      e.preventDefault()

      if (btn.hasAttribute('data-mobile')) {
        const customTimeLine = closeMenu(rule)
        customTimeLine.to(window, {
          scrollTo: offset,
          ease: 'circ.out',
          duration: 1
        })
      } else {
        gsap.to(window, { scrollTo: offset, ease: 'circ.out', duration: 1 })
      }
    })
  }

  toggleArrowUpBtn(1500, 40)
  scrollToBtns.forEach(scrollToElementByAttribute)
}

export default scrollToElements
