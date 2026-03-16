const Alerta = () => {
    return (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
            <div className="flex itemx-center gap-3">
                <span className="text-xl block">✅​</span>
                <p className="font-medium">El perfil se ha guardado correctamente</p>
            </div>
        </div>
    );
};

export default Alerta;