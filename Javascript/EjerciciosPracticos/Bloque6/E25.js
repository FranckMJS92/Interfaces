const presentar = ({ nombre, edad }) => {
    return `Me llamo ${nombre} y tengo ${edad}`
}

console.log(presentar({ nombre: "Carlos", edad: 22 }));