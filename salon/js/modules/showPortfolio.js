const showPortfolio = (
  picturesSelector,
  overlaySelector,
  closeBtnSelector,
  rightBtnSelector,
  leftBtnSelector
) => {
  const pictures = document.querySelectorAll(picturesSelector),
    overlay = document.querySelector(overlaySelector),
    body = document.querySelector('body'),
    closeBtn = document.querySelector(closeBtnSelector),
    rightBtn = document.querySelector(rightBtnSelector),
    leftBtn = document.querySelector(leftBtnSelector),
    scrollValue = calcScroll()

  const overlayItem = document.createElement('div')
  overlayItem.classList.add('overlay__item', 'animate__fadeIn')

  let currentArrPos = 0

  function calcScroll() {
    let div = document.createElement('div')

    div.style.width = '50px'
    div.style.height = '50px'
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'

    document.body.appendChild(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()

    return scrollWidth
  }

  function innerImg(src) {
    overlayItem.innerHTML = `
      <img src=${src} alt="image">
    `
  }

  pictures.forEach((item, i) => {
    item.addEventListener('click', () => {
      currentArrPos = i
      overlay.style.display = 'block'

      let url = item.firstElementChild.getAttribute('src')

      innerImg(url)

      overlay.prepend(overlayItem)

      body.style.marginRight = `${scrollValue}px`
      body.style.overflow = 'hidden'
    })
  })

  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
    body.style.overflow = ''
    body.style.marginRight = `0px`
    overlayItem.remove()
  })

  rightBtn.addEventListener('click', () => {
    if (currentArrPos === pictures.length - 1) {
      currentArrPos = 0
    } else {
      currentArrPos++
    }
    let src = pictures[currentArrPos].firstElementChild.getAttribute('src')

    innerImg(src)
  })

  leftBtn.addEventListener('click', () => {
    if (currentArrPos === 0) {
      currentArrPos = pictures.length - 1
    } else {
      currentArrPos--
    }
    let src = pictures[currentArrPos].firstElementChild.getAttribute('src')

    innerImg(src)
  })
}

export default showPortfolio
