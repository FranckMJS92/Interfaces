const precioBase = 50;
const iva = 0.21;
const cantidad = 3;

console.log(`Total : ${precioBase*cantidad*(1+iva)} € (${cantidad} unidades x ${precioBase}€ + ${iva*100}% IVA)`)