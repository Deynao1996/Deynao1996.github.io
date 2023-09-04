const scrollTop = () => {
  const scrollBtn = document.querySelector('.scrollTop')

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 1000) {
      scrollBtn.style.right = '40px'
    } else {
      scrollBtn.style.right = '-40px'
    }
  })
}

export default scrollTop
