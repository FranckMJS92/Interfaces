const BotonCTA = () => {
    return (
        <div className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transittion-colors mt-4">
            <button className="align-middle font-bold" onClick={() => alert('Suscrito')}>Suscribirse</button>
        </div>
    );
};

export default BotonCTA;