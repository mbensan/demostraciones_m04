// etiquetas HTML user1
const input1 = document.querySelector('#username1')
const btn1 = document.querySelector('#btn1')

const public_repos_1 = document.querySelector('.card-user-1 .public_repos')
const followers_1 = document.querySelector('.card-user-1 .followers')
const following_1 = document.querySelector('.card-user-1 .following')
const public_gists_1 = document.querySelector('.card-user-1 .public_gists')
const total_1 = document.querySelector('.card-user-1 .total')

// etiquetas HTML user2
const input2 = document.querySelector('#username2')
const btn2 = document.querySelector('#btn2')

const public_repos_2 = document.querySelector('.card-user-2 .public_repos')
const followers_2 = document.querySelector('.card-user-2 .followers')
const following_2 = document.querySelector('.card-user-2 .following')
const public_gists_2 = document.querySelector('.card-user-2 .public_gists')
const total_2 = document.querySelector('.card-user-2 .total')

btn1.addEventListener('click', async function () {
  const username1 = input1.value.trim();

  if (username1 == '') {
    return;
  }

  const datos = await fetch(`https://api.github.com/users/${username1}`)
  const user = await datos.json()

  public_repos_1.textContent = user.public_repos
  public_gists_1.textContent = user.public_gists
  followers_1.textContent = user.followers
  following_1.textContent = user.following

  total_1.textContent = user.public_gists + user.public_repos + user.followers + user.following
})

btn2.addEventListener('click', async function () {
  const username2 = input2.value.trim();

  if (username2 == '') {
    return;
  }

  const datos = await fetch(`https://api.github.com/users/${username2}`)
  const user = await datos.json()

  public_repos_2.textContent = user.public_repos
  public_gists_2.textContent = user.public_gists
  followers_2.textContent = user.followers
  following_2.textContent = user.following

  total_2.textContent = user.public_gists + user.public_repos + user.followers + user.following
})

document.getElementById('btn-battle').addEventListener('click', function () {
  
  if (total_1.textContent == '' || total_2.textContent == '') {
    return;
  }
  console.log('msj');

  let msj = ''
  const total_num1 = parseInt(total_1.textContent)
  const total_num2 = parseInt(total_2.textContent)
  
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