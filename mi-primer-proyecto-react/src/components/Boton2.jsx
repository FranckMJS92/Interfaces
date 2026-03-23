const estilosVariante = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50"
};


const Boton2 = ({ texto, variante }) => {
    return (
        <button className={`${estilosVariante[variante]} font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 `}>{texto}</button>
    );
};

export default Boton2;