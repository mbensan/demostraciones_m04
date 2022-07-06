class Usuario {
  // "card_name" es la clase de la 'card' que contiene todo el resto de cosas 
  constructor (card_name) {
    //this.put_html(card_name)
    
    // etiquetas HTML del usuario
    this.input = document.querySelector(`.${card_name} .username`)
    this.btn_buscar = document.querySelector(`.${card_name} .btn-buscar`)

    this.public_repos = document.querySelector(`.${card_name} .public_repos`)
    this.followers = document.querySelector(`.${card_name} .followers`)
    this.following = document.querySelector(`.${card_name} .following`)
    this.public_gists = document.querySelector(`.${card_name} .public_gists`)
    this.total = document.querySelector(`.${card_name} .total`)

    this.avatar = document.querySelector(`.${card_name} img`)

    // guardo el card_name como propiedad del objeto
    this.card_name = card_name

    // eventos
    this.btn_buscar.addEventListener('click',  this.get_score)

    // carga inicial
    if (localStorage.getItem(card_name)) {
      this.input.value = localStorage.getItem(card_name)
    }
  }

  get_score = async () => {
    const username = this.input.value.trim();

    if (username == '') {
      return;
    }
    // consulto datos del usuario a la API
    const datos = await fetch(`https://api.github.com/users/${username}`)
    const user = await datos.json()

    // cargo avatar del usuario
    this.avatar.src = user.avatar_url;
    this.avatar.style.display = 'block'

    // Cargo puntajes del usuario
    this.public_repos.textContent = user.public_repos
    this.public_gists.textContent = user.public_gists
    this.followers.textContent = user.followers
    this.following.textContent = user.following

    this.total.textContent = user.public_gists + user.public_repos + user.followers + user.following
    
    // guardo el usuario buscado en localStorage
    localStorage.setItem(this.card_name, username)
  }

  put_html (card_name) {
    const row_users = document.querySelector('.users')
    row_users.innerHTML += `
      <div class="col-6">
        <div class="card ${card_name}">
          <div class="card-body">
            <h5 class="card-title">Jugador 1</h5>
            <div class="row">
              <div class="col-9">
                <input type="text" class="form-control username">
              </div>
              <div class="col-3">
                <button class="btn btn-primary btn-buscar">GO!</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">Public Repos <span class="public_repos"></span></li>
              <li class="list-group-item">Followers <span class="followers"></span></li>
              <li class="list-group-item">Following <span class="following"></span></li>
              <li class="list-group-item">Gists <span class="public_gists"></span></li>
              <li class="list-group-item"><b>Total: <span class="total"></span></b></li>
            </ul>
          </div>
        </div>
      </div>
    `
  } 
}

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
