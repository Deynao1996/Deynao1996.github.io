import { gsap } from 'gsap'

export default class Intro {
  constructor() {
    this.intro = document.querySelector('.intro')
    this.title = this.intro.querySelector('p')
    this.introBtn = this.intro.querySelector('button')
    this.wrapper = this.intro.querySelector('.intro__wrapper')
    document.body.style.overflow = 'hidden'
  }

  appearAnimate() {
    const tl = gsap.timeline()
    const sectionUp = document.querySelector('.intro__up')

    tl.fromTo(
      sectionUp,
      {
        background:
          'linear-gradient(0deg, rgba(33,134,235,1) 0%, rgba(33,134,235,1) 100%)'
      },
      {
        background:
          'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%,rgba(33, 134, 235, 1) 100%)',
        duration: 2,
        delay: 1
      }
    )
      .to(this.title, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 2
      })
      .to(this.introBtn, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      })
  }

  transitionAnimate() {
    const tl = gsap.timeline()
    const promoCorner = document.querySelector('.promo__corner')
    const promoLogo = document.querySelector('.promo__logo')
    const promoItems = document.querySelector('.promo__items')
    const header = document.querySelector('.header')

    tl.to(this.introBtn, {
      opacity: 0,
      duration: 1
    })
      .to(this.title, {
        y: -200,
        opacity: 0,
        duration: 1
      })
      .to(this.intro, {
        yPercent: -100,
        duration: 2,
        ease: 'expo.out'
      })
      .from(promoCorner, {
        yPercent: -100,
        duration: 1.5
      })
      .from('.promo__title span', {
        y: -200,
        skewY: 7,
        opacity: 0,
        ease: 'expo.out',
        duration: 2,
        stagger: 0.8
      })
      .from(
        promoLogo,
        {
          y: -200,
          opacity: 0,
          duration: 2
        },
        '<'
      )
      .from([header, promoItems], {
        opacity: 0,
        onComplete: () => (document.body.style.overflow = '')
      })
  }

  moveImg(e) {
    let mouseX = e.clientX,
      mouseY = e.clientY

    const tl = gsap.timeline()
    tl.to(this.wrapper, {
      duration: 1,
      x: mouseX,
      y: mouseY,
      ease: 'expo.out'
    })
  }

  linkHover(e) {
    if (e.type === 'mouseenter') {
      const tl = gsap.timeline()

      tl.to(this.wrapper, {
        autoAlpha: 1,
        scale: 1
      })
    } else if (e.type === 'mouseleave') {
      const tl = gsap.timeline()
      tl.to(this.wrapper, {
        autoAlpha: 0,
        scale: 0.3
      })
    }
  }

  init() {
    this.appearAnimate()
    this.introBtn.addEventListener('click', () => this.transitionAnimate())
    this.title.addEventListener('mouseenter', (e) => this.linkHover(e))
    this.title.addEventListener('mouseleave', (e) => this.linkHover(e))
    this.title.addEventListener('mousemove', (e) => this.moveImg(e))
  }
}
