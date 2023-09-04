import { scrollTo } from '../utils/scrollTo'

export default class PageNavigate {
  constructor({ menu, loginModal, signupModal }) {
    this.desktopLinks = document.querySelectorAll('.scroll-to')
    this.mobileLinks = document.querySelectorAll('.menu__item a[data-scroll]')
    this.mobileAuthLinks = document.querySelectorAll('.menu__item a[data-auth]')
    this.menu = menu
    this.loginModal = loginModal
    this.signupModal = signupModal
  }

  openModalFromMenu(e) {
    e.preventDefault()
    const attribute = e.target.getAttribute('data-auth')
    if (attribute === 'login') {
      this.menu.closeMenu(() => this.loginModal.openModal())
    } else if (attribute === 'signup') {
      this.menu.closeMenu(() => this.signupModal.openModal())
    }
  }

  moveToElement(e, isMobile) {
    e.preventDefault()
    const attribute = e.target.getAttribute('data-scroll')
    if (!isMobile) return scrollTo(attribute)
    this.menu.closeMenu(() => scrollTo(attribute))
  }

  init() {
    this.desktopLinks.forEach((link) => {
      link.addEventListener('click', (e) => this.moveToElement(e))
    })
    this.mobileLinks.forEach((link) => {
      link.addEventListener('click', (e) => this.moveToElement(e, true))
    })
    this.mobileAuthLinks.forEach((link) => {
      link.addEventListener('click', (e) => this.openModalFromMenu(e))
    })
  }
}
