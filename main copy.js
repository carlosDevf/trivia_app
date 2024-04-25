import 'bulma/css/bulma.css'
import "./style.css"
import axios from 'axios'
console.log("Hola")

// Promesas
// fetch esta integrado a la plataforma
// Nextjs SSR

function getDBZ(){
  fetch("data/dbz.json")
    .then(r => {
      console.log(r)
      if (r.status !== 200) {
        throw Error("Esto es un error")
      }
      // buffer, text, json text/html
      return  r.json()
    })
    .then(data => {
      console.log(data)
    })    
    .catch(err => {
      console.error
    })
    .finally(() => {
      console.log("Simpere me voy a ejecutar")
    })
}

function getProducts(){
  axios.get("data/dbz.json")
  .then(r => console.log(r.data))
}

getProducts()

/* getDBZ() */