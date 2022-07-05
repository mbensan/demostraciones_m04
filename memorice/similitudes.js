document.querySelector('#btn-cargar') == $('#btn-cargar')
document.querySelectorAll('.col-3') == $('.col-3')

// Manipulando el DOM con jQuery
innerHTML == html()  => Para modificar el html interno
textContent == text()  => Para modificar el texto interno

append() => Para añadir un hijo al final

hide() => Esconder
show() => mostrar

slideUp()  => Esconder con animacion
slideDown() => Mostrar con animación
slideToggle() => Esconder/Mostrar con animación

// Para Modificar un estilo
h1.style['background-color'] = 'blue'  == h1.css('background-color', 'blue')

// Para obtener un atributo
img1.getAttribute('src') ==  img1.attr('src')

// Para modificar un atributo
img1.setAttribute('src', 'logo.jpg') ==  img1.attr('src', 'logo.jpg')

// Eventos de jQuery
addEventLister(nombre_evento, callback) == on(nombre_evento, callback)
