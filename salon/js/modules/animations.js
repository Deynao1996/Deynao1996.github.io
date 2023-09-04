const animations = (wrapperSelector, startDelay, duration, ...styles) => {
  const wrapper = document.querySelector(wrapperSelector)

  for (let i = 0, k = +startDelay; i < wrapper.children.length; i++, k += 100) {
    wrapper.children[i].classList.add(...styles)
    wrapper.children[i].setAttribute('data-wow-duration', `${duration}ms`)
    wrapper.children[i].setAttribute('data-wow-delay', `${k}ms`)
  }
}

export default animations
