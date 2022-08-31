const menuButton = document.querySelector('.menu-button')
const menuList = document.querySelector('.menu')
const dropdownIndex = document.querySelector('.index')
const dropdownAbout = document.querySelector('.about')
const dropdownPortfolio = document.querySelector('.portfolio')
const dropdownContact = document.querySelector('.contact')

const openMenu = () => {
  if (!menuList.classList.contains('clicked')) {
    menuList.classList.add('clicked')
  } else {
    closeMenu()
  }
}

const closeMenu = () => {
  menuList.classList.remove('clicked')
}

menuButton.addEventListener('click', () => openMenu())
dropdownIndex.addEventListener('click', () => closeMenu())
dropdownAbout.addEventListener('click', () => closeMenu())
dropdownPortfolio.addEventListener('click', () => closeMenu())
dropdownContact.addEventListener('click', () => closeMenu())