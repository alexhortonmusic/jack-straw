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

// for sale photo grid

const getForSaleItems = () => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      url: 'js/for-sale.json'
    }).done(function(data) {
      resolve(data)
    }).fail(function(xhr, status, err) {
      reject(err)
    })
  })
}

const gridHTML = (arr) => {
  arr.forEach(item => {
    let photo = `
    <div class='photo'>
      <div class='photoWrap'>
        <img src='${item.photo}'/>
      </div>
      <p class='itemName'>${item.name}</p>
      <p class='itemPrice'>${item.price}</p>
    </div>
    `
    $('.forSaleGrid').append(photo)
  })
}

const buildPhotoGrid = () => {
  getForSaleItems()
  .then(({ items }) => {
    gridHTML(items)
  })
}

buildPhotoGrid()
