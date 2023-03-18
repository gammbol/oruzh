export const Slider = () => {
  const btnNext = document.querySelector('.btn-next')
  const btnPrev = document.querySelector('.btn-prev')

  const slider = new KeenSlider('#my-keen-slider', {
    centered: true,
  })

  btnNext.addEventListener('click', () => {
    slider.next()
  })

  btnPrev.addEventListener('click', () => {
    slider.prev()
  })
}
