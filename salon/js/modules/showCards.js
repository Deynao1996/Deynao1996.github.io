const showCards = (hideCardSelector, btnSelector) => {
  const hideCards = document.querySelectorAll(hideCardSelector),
    btn = document.querySelector(btnSelector)

  hideCards.forEach((item) => {
    item.style.display = 'none'
  })

  btn.addEventListener('click', () => {
    hideCards.forEach((item) => {
      item.style.display = 'block'
      window.scrollTo(0, window.scrollY + 1)
      btn.style.display = 'none'
    })
  })
}

export default showCards
