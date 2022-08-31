const menuButton = document.querySelector('.menu-button')
const menuList = document.querySelector('.menu')

const openMenu = () => {
  menuList.classList.toggle('clicked')
}

menuButton.addEventListener('click', () => openMenu())