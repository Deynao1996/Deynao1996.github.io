import gsap from 'gsap'

export function scrollTo(attribute = '') {
  let scrollToElement
  if (attribute) {
    scrollToElement = document.querySelector(`#${attribute}`)
  }
  const offset = scrollToElement ? scrollToElement.offsetTop : 0
  gsap.to(window, { scrollTo: offset, ease: 'circ.out', duration: 1 })
}
