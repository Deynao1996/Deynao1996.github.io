import gsap from 'gsap'

export default class AnimateIt {
  animatePromoGradient() {
    const b1 =
      'linear-gradient(217deg, rgba(58, 231, 225,.9), rgba(58, 231, 225,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(58, 231, 225,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)'
    const b2 =
      'linear-gradient(17deg, rgba(58, 231, 225,.7), rgba(58, 231, 225,0) 70.71%), linear-gradient(200deg, rgba(33, 134, 235, .9), rgba(58, 231, 225,.2) 70.71%),  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0.1) 70.71%)'
    gsap.fromTo(
      '.promo__corner',
      { background: b1 },
      { ease: 'none', duration: 6, background: b2, repeat: -1, yoyo: true }
    )
  }

  init() {
    this.animatePromoGradient()
  }
}
