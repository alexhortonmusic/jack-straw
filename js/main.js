// create burgernav
const makeBurger = () => {
  $('.navMenu').slicknav({
    appendTo: '.nav',
    label: ''
  })
}

makeBurger()

$('.slicknav_btn').click(() => {
  $('#navLogo').toggleClass('slickLogo')
  console.log('Hi')
})
