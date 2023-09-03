export default class Accordion {
  constructor({ mainSelector, contentSelector, activeClass } = {}) {
    this.accordions = document.querySelectorAll(mainSelector)
    this.contentClass = contentSelector
    this.activeClass = activeClass
  }

  openAccordion(accordion) {
    const content = accordion.querySelector(this.contentClass)
    accordion.classList.add(this.activeClass)
    content.style.maxHeight = content.scrollHeight + 'px'
  }

  closeAccordion(accordion) {
    const content = accordion.querySelector(this.contentClass)
    accordion.classList.remove(this.activeClass)
    content.style.maxHeight = null
  }

  init() {
    this.accordions.forEach((accordion) => {
      accordion.addEventListener('click', () => {
        const content = accordion.querySelector(this.contentClass)

        if (content.style.maxHeight) {
          this.closeAccordion(accordion)
        } else {
          this.accordions.forEach((accordion) => this.closeAccordion(accordion))
          this.openAccordion(accordion)
        }
      })
    })
  }
}
