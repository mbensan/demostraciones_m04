import { clave } from './clave.js'
import { llenarGraficoPie, llenarGraficoBarra } from "./graficos.js"

// etiquetas HTML
const form_hero = document.querySelector('#form-hero')
const input_hero = document.querySelector('#id-hero')

const span_nombre = document.querySelector('#nombre')
const span_nombre2 = document.querySelector('#nombre-2')

form_hero.addEventListener('submit', async function (ev) {
  // 1. Evitamos que se cargue la página
  ev.preventDefault()

  // 2. Obtenemos el id del heroe a buscar
  const id_hero = input_hero.value;

  // 3. lLlamamos a la API
  let heroe = await fetch(`https://superheroapi.com/api.php/${clave}/${id_hero}`)
  heroe = await heroe.json()

  llenarDatos(heroe);
  console.log(heroe);

  llenarGraficoPie(heroe)

})

function llenarDatos (heroe) {
  span_nombre.textContent = heroe.name
  span_nombre2.textContent = heroe.name
}

