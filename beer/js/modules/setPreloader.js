import { gsap } from 'gsap'
import smoothScroll from './smoothScroll'

const setPreloader = () => {
  const tl = gsap.timeline()
  const isMobile = window.matchMedia('(max-width: 768px)').matches

  function setOverflow(offset) {
    const section = document.querySelector('.promo')
    if (offset) {
      section.style.marginRight = !isMobile ? offset : '0px'
      document.body.style.overflow = 'hidden'
    } else {
      section.style.marginRight = '0px'
      document.body.style.overflow = ''
    }
  }

  setOverflow('10px')

  function activePreloader() {
    gsap.to(window, { scrollTo: 0, duration: 0 })
    tl.to('.p', {
      y: '-100%',
      opacity: 0,
      duration: 1,
      delay: '0.5',
      ease: 'slow(0.7, 0.7, false)'
    })
      .to('#preloader', {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut'
      })
      .to('.promo, .need', {
        opacity: 1,
        scale: 1,
        duration: 1,
        onComplete: () => {
          setOverflow()
          smoothScroll('smooth-scroll-wrapper')
        }
      })
      .to('.cursor', { opacity: 1 })
  }

  Pace.on('done', activePreloader)
}

export default setPreloader
