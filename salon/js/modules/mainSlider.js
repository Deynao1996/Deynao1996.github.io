const mainSlider = (wrapperSelector, innerSelector, changeInterval) => {
  const inner = document.querySelector(innerSelector),
    wrapper = document.querySelector(wrapperSelector),
    slides = inner.children,
    animatedContent = document.querySelectorAll('[data-content-fadeIn]'),
    width = Math.round(
      window.getComputedStyle(slides[0]).width.replace(/px/g, '')
    )

  function fadeContent(newClass, oldClass) {
    animatedContent.forEach((item) => {
      item.classList.remove(oldClass)
      item.classList.add(newClass)
    })
  }

  function fadeOut() {
    fadeContent('animate__fadeOutUp', 'animate__fadeInUp')
  }

  function fadeIn() {
    fadeContent('animate__fadeInUp', 'animate__fadeOutUp')
  }

  function handleTransitionEnd() {
    inner.appendChild(inner.firstElementChild)
    inner.style.transition = 'none'
    inner.style.transform = `translateX(0)`

    setTimeout(function () {
      inner.style.transition = '1.5s all'
    })
    fadeIn()
  }

  function moveCarousel() {
    if (changeInterval) {
      setInterval(() => {
        inner.style.transform = `translateX(-${width}px)`
      }, changeInterval)
    }
  }

  function initCarousel() {
    inner.style.display = 'flex'
    inner.style.transition = '1.5s all'
    inner.style.width = '300%'
    wrapper.style.overflow = 'hidden'
    slides.forEach((slide) => {
      slide.style.width = `${width}px`
    })
  }

  fadeIn()
  initCarousel()
  moveCarousel()
  inner.addEventListener('transitionstart', fadeOut)
  inner.addEventListener('transitionend', handleTransitionEnd)
}

export default mainSlider
