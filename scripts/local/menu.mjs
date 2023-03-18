export const MobileMenu = () => {
  const $openBtn = document.querySelector('.headerMobileWrapper')
  const $closeBtn = document.querySelector('.closeWrapper')
  const $links = document.querySelectorAll('.mobileMenuItem a')
  const $menuContainer = document.querySelector('.mobileMenuContainer')

  let isOpen = false

  const onToggle = () => {
    if (isOpen) {
      $menuContainer.style.top = '-100%'
      isOpen = !isOpen
    } else {
      $menuContainer.style.top = '0'
      isOpen = !isOpen
    }
  }

  $openBtn.addEventListener('click', onToggle)
  $closeBtn.addEventListener('click', onToggle)

  $links.forEach((link) => link.addEventListener('click', onToggle))
}
