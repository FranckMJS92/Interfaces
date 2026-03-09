const productos = [
    { nombre: "Camiseta", precio: 25.99 },
    { nombre: "Pantalón", precio: 45.00 },
    { nombre: "Zapatillas", precio: 89.95 }
];

const other = productos.map(
    (productos) => `${productos.nombre} : ${productos.precio} €`
);

console.log(other)