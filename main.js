import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1>¡Hola mundo! Soy Michael y Montaño Mejia</h1>
`

setupCounter(document.querySelector('#counter'))
