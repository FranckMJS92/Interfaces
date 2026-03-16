const Navbar = () => {
    return (
        <nav className="bg-slate-800 text-white flex justify-between items-center p-4 px-8">
            <h1 className="text-2xl font-bold">Mi App</h1>
            <div className="flex gap-6">
                <a className="hover:text-blue-400" href="#">Inicio</a>
                <a className="hover:text-blue-400" href="#">Perfil</a>
            </div>
        </nav>
    );
};

export default Navbar;