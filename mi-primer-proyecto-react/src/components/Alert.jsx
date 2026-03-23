const Alert = ({ tipo = "info", titulo, mensaje, mostrarIcono = true }) => {

    // Objeto de estilos como pide el ejercicio
    const estilos = {
        info: {
            contenedor: "bg-blue-100 border border-blue-300 text-blue-700",
            icono: "ℹ️"
        },
        exito: {
            contenedor: "bg-green-100 border border-green-300 text-green-700",
            icono: "✅"
        },
        error: {
            contenedor: "bg-red-100 border border-red-300 text-red-700",
            icono: "❌"
        },
        advertencia: {
            contenedor: "bg-yellow-100 border border-yellow-300 text-yellow-700",
            icono: "⚠️"
        }
    };

    // Obtener el estilo según el tipo (si no existe, usa info)
    /**
     * Si por alguna razón alguien pasa un tipo que no está en tu objeto se rompe
     * Ahora si pasan un tipo desconocido, en lugar de romperse, 
     * usa estilos.info como valor por defecto y todo funciona.
     */
    const estiloActual = estilos[tipo] || estilos.info;

    return (
        <div className={`${estiloActual.contenedor} mt-4 p-2 font-semibold rounded-lg`}>
            {/* Título condicional */}
            {titulo && <h3 className="text-sm font-bold mb-1">{titulo}</h3>}

            {/* Icono condicional */}
            {mostrarIcono && <span className="mr-2">{estiloActual.icono}</span>}

            {/* Mensaje */}
            <p>{mensaje}</p>
        </div>
    );
};

export default Alert;