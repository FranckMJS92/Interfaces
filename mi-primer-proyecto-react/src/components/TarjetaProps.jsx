// Tarjeta con props
const TarjetaProps = (props) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm">
            <span className="text-4xl mb-4 block">{props.icono} </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
                {props.titulo}
            </h3>
            <p className="text-slate-600 leading-relaxed">
                {props.descripcion}
            </p>
        </div>
    );
};

export default TarjetaProps;