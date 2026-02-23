let edad = 20

let tipo = edad > 17 ? "adulto" : "menor"

console.log(tipo)

edad = 10
tipo = edad > 17 ? "adulto" : "menor"; // ¡Recalcular!
console.log(tipo); // Ahora sí muestra "menor"