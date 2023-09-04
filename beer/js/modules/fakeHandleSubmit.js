import { gsap } from "gsap"

const fakeHandleSubmit = () => {
  const form = document.querySelector('form')
  const submitBtn = form.querySelector('.btn__submit')
  const textBtn = submitBtn.querySelector('span')

  function animateBtn() {
    gsap.fromTo(textBtn, 
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      }, 
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      }
    )
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function handleSubmit(e) {
    e.preventDefault()
    submitBtn.setAttribute('disabled', '');
    textBtn.textContent = 'submitting...'

    await delay(2000)
    submitBtn.removeAttribute('disabled');
    animateBtn()
    textBtn.innerHTML = '&#10004;'

    await delay(2000)
    animateBtn()
    textBtn.textContent = 'submit information'
    form.reset()
  }

  form.addEventListener('submit', handleSubmit)
}

export default fakeHandleSubmit