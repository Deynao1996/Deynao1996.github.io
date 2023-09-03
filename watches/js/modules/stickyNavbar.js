export default class StickyNavbar {
  constructor() {
    this.body = document.body
    this.lastScroll = 0
  }

  init() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset
      if (currentScroll <= 0) {
        this.body.classList.remove('scroll-up')
        return
      }

      if (
        currentScroll > this.lastScroll &&
        !this.body.classList.contains('scroll-down')
      ) {
        this.body.classList.remove('scroll-up')
        this.body.classList.add('scroll-down')
      } else if (
        currentScroll < this.lastScroll &&
        this.body.classList.contains('scroll-down')
      ) {
        this.body.classList.remove('scroll-down')
        this.body.classList.add('scroll-up')
      }
      this.lastScroll = currentScroll
    })
  }
}
