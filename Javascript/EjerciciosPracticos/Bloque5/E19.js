let stock = 0

let mensaje = stock > 0 ? `Quedan ${stock}` : `Agotado`

console.log(mensaje)

stock = 5
mensaje = stock > 0 ? `Quedan ${stock}` : `Agotado`
console.log(mensaje)