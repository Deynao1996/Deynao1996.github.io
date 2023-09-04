const showMenu = (triggersSelectors, menuSelector, activeClass) => {
  const triggerBtns = document.querySelectorAll(triggersSelectors),
    menu = document.querySelector(menuSelector),
    menuLinks = menu.querySelectorAll('a')

  function toggleClass(item, activeClass) {
    item.addEventListener('click', () => {
      menu.classList.toggle(activeClass)
    })
  }

  triggerBtns.forEach((btn) => {
    toggleClass(btn, activeClass)
  })

  menuLinks.forEach((link) => {
    toggleClass(link, activeClass)
  })
}

export default showMenu
