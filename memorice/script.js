const h1 = $('h1');

h1.on('click', function () {
  h1.slideUp(2000)
})

$('.col-3').on('click', function() {
  $(this).slideUp(2000)
})
