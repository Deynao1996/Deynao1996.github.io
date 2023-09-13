import { gsap } from 'gsap'

const animateSectionBg = (selector, cfg = {}) => {
  gsap.to(selector, {
    ...cfg,
    scrollTrigger: {
      trigger: selector,
      scrub: cfg.scrub,
      start: 'top center',
      end: 'bottom 40%'
    }
  })
}

export default animateSectionBg
