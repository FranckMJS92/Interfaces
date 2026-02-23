// Mostrar en consola
console.log("Hola Mundo")

// Comstantes y Variables
const constante = 100
let variable = 1


// ARRAYS
//String[] frutas = new String[3]; // Array Estatico

// ARROW FUNCTIONS
// Una funcion que se guarda en una variable
const saludar = (nombre) => {
    return "Hola " + nombre
}

const funcion = (x, y) => x * y // si es una linea se omite las llave e incluso el return

console.log(saludar("Franck"))
console.log(funcion(2, 3))

// OPOERADORES TERNARIOS
const esAdmin = false
let mensaje;

if(esAdmin){
    mensaje = "Bienvenido, Administrador"
} else {
    mensaje = "Bienvenido, Usuario"
}

console.log(mensaje)

mensaje = esAdmin? "Bienvenido, Administrador1" : "Bienvenido, Usuario2"

console.log(mensaje)