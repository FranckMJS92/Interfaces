const TarjetaProducto = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md max-w-sm overflow-hidden">
            <div className="flex justify-center items-center w-full h-35 bg-gray-500 ">
                <span className="text-8xl">🥾​​</span>
            </div>

            <div className="flex justify-between items-center text-sm p-2 gap-2">
                <p className="font-bold">Zapatillas Deportivas</p>
                <p className="text-xl font-bold text-blue-600"> 89.99</p>
            </div>

            <p className="text-slate-500 text-center text-sm leading-relaxed">Zapatilla deportiva muestra</p>

            <button className="w-full mt-5 bg-black py-2 rounded-2xl text-white font-bold hover:bg-gray-600" onClick={() => alert('Agregado')}>Agregar al Carrito</button>

        </div>
    );
};

export default TarjetaProducto;