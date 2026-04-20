// 📄 src/components/Alert.jsx
const Alert = ({ tipo = "info", titulo, mensaje, mostrarIcono = true }) => {
    // Diccionario de estilos por tipo
    const estilos = {
        info: "bg-blue-50 text-blue-900 border-blue-300",
        exito: "bg-green-50 text-green-900 border-green-300",
        error: "bg-red-50 text-red-900 border-red-300",
        advertencia: "bg-yellow-50 text-yellow-900 border-yellow-300",
    };
    const iconos = {
        info: "ℹ️",
        exito: "✅",
        error: "❌",
        advertencia: "⚠️",
    };
    return (
        <div className={`border-l-4 rounded-md p-4 flex gap-3
${estilos[tipo]}`}>
            {mostrarIcono && (
                <span className="text-xl leading-none">{iconos[tipo]}
                </span>
            )}
            <div>
                {titulo && (
                    <h4 className="font-bold mb-1">{titulo}</h4>
                )}
                <p className="text-sm">{mensaje}</p>
            </div>
        </div>
    );
};
export default Alert;