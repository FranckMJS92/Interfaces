import AlertaBienvenida from "./components/AlertaBienvenida";
import BotonCTA from "./components/BotonCTA.";
import TarjetaPerfil from "./components/TarjetaPerfil";
import Alerta from "./components/Alerta";
import Navbar from "./components/Navbar";
import TarjetaProducto from "./components/TarjetaProducto";

const App = () => {
  return (
    <>

      <div>
        <Navbar />
      </div>

      <div className="flex flex-col items-center p-2 gap-5">

        <TarjetaPerfil />

        <AlertaBienvenida />

        <BotonCTA />

        <Alerta />



      </div>

      <div className="flex justify-center">
        <TarjetaProducto />
      </div>

    </>
  );
};

export default App