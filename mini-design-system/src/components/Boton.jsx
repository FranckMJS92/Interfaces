// 📄 src/components/Boton.jsx
const Boton = ({ texto, variante = "primary", deshabilitado = false }) => {
    // ① Clases base (siempre se aplican)
    const base = "px-5 py-2 rounded-lg font-semibold transition-colors " +
        "disabled:opacity-50 disabled:cursor-not-allowed";
    // ② Diccionario de estilos por variante
    const variantes = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
    };
    return (
        <button
            className={`${base} ${variantes[variante]}`}
            disabled={deshabilitado}
        >
            {texto}
        </button>
    );
};
export default Boton;