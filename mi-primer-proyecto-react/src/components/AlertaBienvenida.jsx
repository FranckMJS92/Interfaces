const AlertaBienvenida = () => {
    const nombre = "Franck";
    return (
        <div className="max-w-md mx-auto mt-10
bg-linear-to-r from-blue-500
to-cyan-500 text-white
rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-3">
                ¡Bienvenido, {nombre}!
            </h2>
            <p className="text-blue-100">
                Tu primer componente React
                con Tailwind CSS.
            </p>
            <button className="mt-6 bg-white
text-blue-600 font-semibold
px-6 py-2.5 rounded-lg
hover:bg-blue-50
transition-colors">
                Comenzar →
            </button>
        </div>
    );
}
export default AlertaBienvenida;
