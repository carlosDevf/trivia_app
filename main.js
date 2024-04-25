import 'bulma/css/bulma.css'
import "./style.css"
import axios from 'axios'

const urlFakeStore = "https://fakestoreapi.com"
// CRUD
//https://crudcrud.com/

//READ
function fetAllProducts() {
  //nota axios añade en la respuestsa el [data]
  axios.get(urlFakeStore + "/products")
  .then(res => console.log(res.data))
}

function getSingleProduct(id){
  //parametros dentro de la url
  const url = urlFakeStore + "/products/" + id
  axios.get(url)
  .then(res => console.log(res.data))
}

function getProductsLimit(limit) {
  const url = urlFakeStore + "/products?limit=" + limit
  axios.get(url) 
  .then(res => console.log(res.data))
}

/* fetAllProducts() */
/* getSingleProduct(10) */
/* getProductsLimit(3) */


// CREATE => POST
// FORMULARIO
function createProduct(payload) {
  fetch(urlFakeStore + "/products",{
    method:"POST",
    body:JSON.stringify(payload)
})
    .then(res => res.json())
    .then(json => console.log(json))
}

function createProductAxios(payload){
  axios.post(urlFakeStore + "/products", payload)
  .then(res => console.log(res))
}

const form = document.querySelector("#addProductForm")
form.addEventListener('submit', function(e){
  // previene el funcionamiento del sumbit haciendo que no mande la data si no que nosotros la vamos a controlar
  e.preventDefault()
  const form = new FormData(e.target)
  const data = Object.fromEntries(form)
  console.log(data)
  // validar que todos los datos sean seteados
  /* createProduct(data) */ //con fetch
  createProductAxios(data) // con axios

})

// PUT, PATCH UPDATE
function updateProduct(id, body) {
  fetch(urlFakeStore + "/products/" + id,{
    method:"PATCH",
    body:JSON.stringify(body)
})
    .then(res => res.json())
    .then(json => console.log(json))
}

// que debe ser de un form
const boton = document.querySelector("#updateProduct")
boton.addEventListener("click", (e) => {
  e.preventDefault()
  const payload =  {
    title: 'test product',
    isActive: true,
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
  }
  updateProduct(7, payload)
})

// DELETE
//Verbo que elimina física o 

// lógicamente el recurso // mas seguro
// isActive: true => false
//https://api.nasa.gov/