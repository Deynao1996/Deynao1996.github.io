import gsap from 'gsap'

export default class Menu {
  constructor({
    dataSelector = '[data-trigger]',
    menuSelector = '.menu'
  } = {}) {
    this.triggers = document.querySelectorAll(dataSelector)
    this.menu = document.querySelector(menuSelector)
  }

  closeMenu(cb) {
    const tl = gsap.timeline()
    tl.to('.menu__item', {
      opacity: 0,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      stagger: 0.2
    }).to('.menu', {
      top: '-150%',
      onComplete: () => {
        this.menu.classList.toggle('menu_active')
        cb?.()
      }
    })
  }

  openMenu() {
    const tl = gsap.timeline()
    tl.to('.menu', {
      top: '0%',
      ease: 'power4.out'
    })
      .to('.menu__item', {
        opacity: 1,
        clipPath: 'polygon(0 0, 99% 0, 99% 100%, 0 100%)',
        stagger: 0.2
      })
      .to('.menu__cross', {
        opacity: 1,
        rotate: 90,
        onComplete: () => this.menu.classList.toggle('menu_active')
      })
  }

  toggleMenu() {
    if (!this.menu.classList.contains('menu_active')) {
      this.openMenu()
    } else {
      this.closeMenu()
    }
  }

  init() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => this.toggleMenu())
    })
  }
}
