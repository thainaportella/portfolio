const menuButton = document.querySelector('.menu-button')
const menuList = document.querySelector('.menu')

const openMenu = () => {
  if (!menuList.classList.contains('clicked')) {
    menuList.classList.add('clicked')
  } else { 
    menuList.classList.remove('clicked')
  }
}

menuButton.addEventListener('click', () => openMenu())