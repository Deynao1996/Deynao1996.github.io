const customCursor = () => {
  const cursor = document.querySelector('.cursor')

  const editCursor = (e) => {
    if (e.target.classList.contains('hover-target')) {
      cursor.style.transform = 'translate(-50%, -50%) scale(8)'
    } else {
      cursor.style.transform = ''
    }
    const { clientX: x, clientY: y } = e
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
  }

  window.addEventListener('mousemove', editCursor)
}

export default customCursor