const Badge = ({ texto, color = "blue", icono }) => {
    const classColor =
        color == "blue"
            ? "bg-blue-100 text-blue-700"
            : color == "green"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700";

    return (
        <span className={`${classColor} px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1`}>
            {icono && <span>{icono}</span>}
            {texto}
        </span>
    );
};

export default Badge;