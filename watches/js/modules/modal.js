import gsap from 'gsap'

export default class Modal {
  constructor({ attribute, title, buttonContent } = {}) {
    this.openBtns = document.querySelectorAll(`[data-modal=${attribute}]`)
    this.closeBtn = document.querySelector('.modal__close')
    this.modal = document.querySelector('.modal')
    this.title = this.modal.querySelector('.modal__title')
    this.button = this.modal.querySelector('button')
    this.titleContent = title
    this.buttonContent = buttonContent
  }

  prepareContent() {
    this.button.setAttribute('data-submit', this.buttonContent)
    this.title.textContent = this.titleContent
    this.button.textContent = this.buttonContent
  }

  openModal() {
    this.prepareContent()
    const tl = gsap.timeline()
    tl.to('.modal', {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      onStart: () => (this.modal.style.display = 'flex')
    }).to('.modal__dialog', {
      opacity: 1,
      top: '50%'
    })
  }

  closeModal() {
    const tl = gsap.timeline()
    tl.to('.modal__dialog', {
      opacity: 0
    }).to('.modal', {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      onComplete: () => (this.modal.style.display = 'none')
    })
  }

  init() {
    this.openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        this.openModal()
      })
    })
    this.closeBtn.addEventListener('click', () => this.closeModal())
    this.modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        this.closeModal()
      }
    })
  }
}
