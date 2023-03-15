const openBtn = document.querySelector('.headerMobileWrapper');
const closeBtn = document.querySelector('.closeWrapper');
const menuElements = document.querySelectorAll('.mobileMenuItem a');
const mobileMenu = document.querySelector('.mobileMenuContainer');
let isOpened = false;

const menuToggle = () => {
  if (isOpened) {
    mobileMenu.style.top = '-100%';
    isOpened = !isOpened
  } else {
    mobileMenu.style.top = '0';
    isOpened = !isOpened
  }
}

openBtn.addEventListener('click', menuToggle);
closeBtn.addEventListener('click', menuToggle);

menuElements.forEach((menuElement) => {
  menuElement.addEventListener('click', menuToggle);
})