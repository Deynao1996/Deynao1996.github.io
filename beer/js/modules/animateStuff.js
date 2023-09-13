import { gsap } from 'gsap'
import animateSectionBg from './animateSectionBg'
import invertSection from './invertSection'

const animateStuff = () => {
  gsap.to('.cart__gallery', {
    left: '-5%',
    scrollTrigger: {
      trigger: '.cart',
      scrub: 1,
      start: 'top center',
      end: 'center center'
    }
  })

  gsap.to('.frequently__item img', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    stagger: '0.1',
    ease: 'circ.out',
    scrollTrigger: {
      trigger: '.frequently',
      start: 'top 20%'
    }
  })

  let initialValue = { value: 0 }
  let percentage = document.querySelector('.store__discount p')

  gsap.to(initialValue, {
    duration: 2,
    value: 80,
    scrollTrigger: {
      trigger: '.store',
      start: 'top 20%'
    },
    onUpdate: () => {
      percentage.textContent = initialValue.value.toFixed()
    }
  })

  gsap.from('.deals__stars li', {
    opacity: 0,
    scale: 1.4,
    rotation: 45,
    stagger: 0.1,
    duration: 2,
    scrollTrigger: {
      trigger: '.deals',
      start: 'top 20%'
    }
  })

  invertSection('.customer', {
    targets: '.arrow__img, .customer__star',
    className: 'inverted'
  })
  animateSectionBg('.pure__bg', {
    duration: 2,
    scale: 1.1,
    ease: 'slow(0.7, 0.7, false)'
  })
  animateSectionBg('.need__bg', {
    duration: 2,
    scale: 1.2,
    ease: 'slow(0.7, 0.7, false)'
  })
}

export default animateStuff
