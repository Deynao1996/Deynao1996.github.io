import { gsap } from 'gsap'
import swal from 'sweetalert'

export default class FakeHandleSubmit {
  constructor({ signupModal, loginModal }) {
    this.forms = document.querySelectorAll('form')
    this.signupModal = signupModal
    this.loginModal = loginModal
  }

  animateBtn(btn) {
    gsap.fromTo(
      btn,
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    )
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  getActiveModal(textContent) {
    switch (textContent) {
      case 'create an account':
        return this.signupModal
      case 'login to your account':
        return this.loginModal
      default:
        return
    }
  }

  getAnswers(textContent) {
    const answer = {
      done: '',
      error: ''
    }
    switch (textContent) {
      case 'subscribe':
        answer.done = 'You have been subscribed to newsletter!'
        break
      case 'submit':
        answer.done = 'Thank you to your feedback!'
        break
      case 'create an account':
        answer.done = 'You have been created an account!'
        break
      default:
        answer.error = 'Something went wrong. Please try later!'
        break
    }
    return answer
  }

  async handleSubmit(e) {
    e.preventDefault()
    const submitBtn = e.target.querySelector('.btn__submit')
    const textContent = submitBtn.getAttribute('data-submit')
    const { done, error } = this.getAnswers(textContent)
    const activeModal = this.getActiveModal(textContent)

    submitBtn.setAttribute('disabled', '')
    submitBtn.textContent = 'submitting...'

    await this.delay(2000)
    submitBtn.removeAttribute('disabled')
    this.animateBtn(submitBtn)
    submitBtn.innerHTML = error ? '&#9587;' : '&#10004;'

    await this.delay(2000)
    this.animateBtn(submitBtn)
    submitBtn.textContent = textContent

    activeModal && activeModal.closeModal()

    e.target.reset()
    if (error) {
      return await swal('Oops!', error, 'error')
    }
    await swal('Good job!', done, 'success')
  }

  init() {
    this.forms.forEach((form) =>
      form.addEventListener('submit', (e) => this.handleSubmit(e))
    )
  }
}
