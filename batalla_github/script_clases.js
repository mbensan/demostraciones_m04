import { Usuario } from "./classes/usuario.js";

const user1 = new Usuario('card-user-1')
const user2 = new Usuario('card-user-2')

document.getElementById('btn-battle').addEventListener('click', function () {
  
  if (user1.total.textContent == '' || user2.total.textContent == '') {
    return;
  }

  let msj = ''
  const total_num1 = parseInt(user1.total.textContent)
  const total_num2 = parseInt(user2.total.textContent)
  
  if (total_num1 > total_num2) {
    msj = 'Gana el usuario 1'
  } else if (total_num1 < total_num2) {
    msj = 'Gana el usuario 2'
  } else {
    msj = 'Hay un empate!!!'
  }

  Swal.fire(
    'Resultado de la Batalla',
    msj,
    'success'
  )
})
