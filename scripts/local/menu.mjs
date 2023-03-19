export const MobileMenu = () => {
  const $openBtn = document.querySelector('.js-header-open')
  const $closeBtn = document.querySelector('.js-header-close')
  const $menuContainer = document.querySelector('.js-header-nav')
  const $links = $menuContainer.querySelectorAll('a')

  const onToggle = () => {
    $menuContainer.classList.contains('-translate-y-full')
      ? $menuContainer.classList.remove('-translate-y-full')
      : $menuContainer.classList.add('-translate-y-full')
  }

  $openBtn.addEventListener('click', onToggle)
  $closeBtn.addEventListener('click', onToggle)
  $links.forEach((link) => link.addEventListener('click', onToggle))
}
