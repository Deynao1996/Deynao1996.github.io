const smoothScroll = (wrapperSelector, speed = 0.04) => {
  const body = document.body
  const scrollWrap = document.getElementsByClassName(wrapperSelector)[0]

  let offset = 0
  let height = scrollWrap.getBoundingClientRect().height - 1

  body.style.height = Math.floor(height) + "px"
  
  function scrollPage() {
    offset += (window.pageYOffset - offset) * speed
    let scroll = "translateY(-" + offset + "px) translateZ(0)"
    scrollWrap.style.transform = scroll
    requestAnimationFrame(scrollPage)
  }

  function onResize() {
    height = scrollWrap.getBoundingClientRect().height - 1
    body.style.height = Math.floor(height) + "px"
    scrollPage()
  }

  scrollPage()
  window.addEventListener('resize', onResize)
}

export default smoothScroll
