export default class Dropdown {
  constructor(selector) {
    this.x = document.getElementsByClassName(selector)
    this.l = this.x.length
  }

  closeAllSelect(elmnt) {
    let x,
      y,
      i,
      xl,
      yl,
      arrNo = []

    x = document.getElementsByClassName('select-items')
    y = document.getElementsByClassName('select-selected')
    xl = x.length
    yl = y.length
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove('select-arrow-active')
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add('select-hide')
      }
    }
  }

  setAttributes(e) {
    let y, i, k, s, h, sl, yl
    s = e.target.parentNode.parentNode.getElementsByTagName('select')[0]
    sl = s.length
    h = e.target.parentNode.previousSibling
    for (i = 0; i < sl; i++) {
      if (s.options[i].innerHTML == e.target.innerHTML) {
        s.selectedIndex = i
        h.innerHTML = e.target.innerHTML
        y = e.target.parentNode.getElementsByClassName('same-as-selected')
        yl = y.length
        for (k = 0; k < yl; k++) {
          y[k].removeAttribute('class')
        }
        e.target.setAttribute('class', 'same-as-selected')
        break
      }
    }
    h.click()
  }

  toggleClass(e) {
    e.stopPropagation()
    this.closeAllSelect(e.target)
    e.target.nextSibling.classList.toggle('select-hide')
    e.target.classList.toggle('select-arrow-active')
  }

  createSelects() {
    for (let i = 0; i < this.l; i++) {
      this.selElmnt = this.x[i].getElementsByTagName('select')[0]
      this.ll = this.selElmnt.length
      this.a = document.createElement('DIV')
      this.a.setAttribute('class', 'select-selected')
      this.a.innerHTML =
        this.selElmnt.options[this.selElmnt.selectedIndex].innerHTML
      this.x[i].appendChild(this.a)
      this.b = document.createElement('DIV')
      this.b.setAttribute('class', 'select-items select-hide')
      for (let j = 1; j < this.ll; j++) {
        this.c = document.createElement('DIV')
        this.c.innerHTML = this.selElmnt.options[j].innerHTML
        this.c.addEventListener('click', this.setAttributes)
        this.b.appendChild(this.c)
      }
      this.x[i].appendChild(this.b)
      this.a.addEventListener('click', (e) => this.toggleClass(e))
    }
  }

  init() {
    this.createSelects()
    document.addEventListener('click', (e) => this.closeAllSelect(e))
  }
}
