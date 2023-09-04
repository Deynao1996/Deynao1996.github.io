window.addEventListener('DOMContentLoaded', () => {
  "use strict"
  window.paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
  }

  const openBtn = document.querySelector('.nav__menu'),
        closeBtn = document.querySelector('.menu__close'),
        menu = document.querySelector('.menu'),
        preloader = document.querySelector('#preloader'),
        p = document.querySelector('.p'),
        tl = gsap.timeline()


  
  document.body.style.overflow = 'hidden'
  function activePreloader() {
    gsap.to(window, { scrollTo: 0, duration: 0 })
    tl.to(".p", { y: '-100%', opacity: 0, duration: 1, delay: '0.5', ease: "slow(0.7, 0.7, false)" })
      .to("#preloader", { 
        y: '-100%', 
        duration: 1, 
        ease: "power4.inOut",
        onComplete: () => document.body.style.overflow = ''
       })
      .fromTo(".promo", 
        { opacity: 0, scale: 1 }, 
        { opacity: 1, scale: 1, duration: 1, onComplete: () => smoothScroll() }
        
      )
  }

  
  function toggleMenu(selector) {
    selector.classList.toggle('menu_hide')
    if (selector.classList.contains('menu_hide')) {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  const body = document.body,
        scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
        height = scrollWrap.getBoundingClientRect().height - 1,
        speed = 0.04;

  let offset = 0;

  body.style.height = Math.floor(height) + "px";

  let test = 0

  function smoothScroll() {
      offset += (window.pageYOffset - offset + test) * speed;
      var scroll = "translateY(-" + offset + "px) translateZ(0)";
      scrollWrap.style.transform = scroll;
      console.log(offset, window.pageYOffset);
      requestAnimationFrame(smoothScroll);
  }

  // smoothScroll();
  
  window.addEventListener('resize', smoothScroll);

  document.querySelector('h1').addEventListener('click', (e) => {
    // test = document.querySelector('#cart').offsetTop
    gsap.to(window, { scrollTo: document.querySelector('#cart').offsetTop, duration: 0 })
    // offset += document.querySelector('#cart').offsetTop
    // console.log(document.querySelector('#cart').offsetTop);
    console.log(window.pageYOffset);
    // document.querySelector('#cart').scrollIntoView();
  })
  
  Pace.on('done', activePreloader)
  openBtn.addEventListener('click', () => toggleMenu(menu))
  closeBtn.addEventListener('click', () => toggleMenu(menu))
})
  