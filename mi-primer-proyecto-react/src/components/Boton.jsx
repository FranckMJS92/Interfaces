const Boton = ({ texto, variante }) => {
    // Elegimos las clases de Tailwind según la variante recibida (ternario anidado)
    const clasesColor =
        variante == "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : variante == "danger"
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"; // secondary (por defecto)
    return (
        <button className={`${clasesColor} font-semibold px-6 py-2.5
rounded-lg transition-colors duration-200`}>
            {texto}
        </button>
    );
};
export default Boton;
