window.onscroll = function () {
  const header = document.querySelector('header')
  const fixedNav = header ? header.offsetTop : 0
  const toTop = document.querySelector('#to-top')

  if (window.pageYOffset > fixedNav) {
    if (header) header.classList.add('navbar-fixed')
    if (toTop) {
      toTop.classList.remove('hidden')
      toTop.classList.add('flex')
    }
  } else {
    if (header) header.classList.remove('navbar-fixed')
    if (toTop) {
      toTop.classList.remove('flex')
      toTop.classList.add('hidden')
    }
  }
}

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

if (hamburger && navMenu) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
  })
}
