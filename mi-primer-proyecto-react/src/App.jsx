import AlertaBienvenida from "./components/AlertaBienvenida";
import BotonCTA from "./components/BotonCTA.";
import TarjetaPerfil from "./components/TarjetaPerfil";
import Alerta from "./components/Alerta";
import Navbar from "./components/Navbar";
import TarjetaProducto from "./components/TarjetaProducto";
import TarjetaProps from "./components/TarjetaProps";
import Boton from "./components/Boton";
import Badge from "./components/Badge";
import Boton2 from "./components/Boton2";
import Alert from "./components/Alert";

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

      <div className="flex gap-6 p-10">
        <TarjetaProps
          titulo="React Básico"
          descripcion="Aprende a crear componentes reutilizables"
          icono="⚛️"
        />
        <TarjetaProps
          titulo="Tailwind CSS"
          descripcion="Estiliza tus interfaces con clases de utilidad"
          icono="a"
        />
        <TarjetaProps
          titulo="Storybook"
          descripcion="Documenta y prueba tus componentes"
          icono="b"
        />
      </div>

      <div className="flex justify-center gap-3">
        <Boton texto="Guardar" variante="primary" />
        <Boton texto="Guardar" variante="danger" />
        <Boton texto="Guardar" variante="default" />
      </div>

      <div className="flex justify-center gap-3 mt-4">
        <Badge texto="Nuevo" icono="✨" color="green" />
        <Badge texto="En revisión" icono="��" />
        <Badge texto="Cerrado" color="red" />
        <Badge texto="Info" />

      </div>

      <div className="flex justify-center gap-3 mt-4">
        <Boton2 texto="primary" variante="primary" />
        <Boton2 texto="secondary" variante="secondary" />
        <Boton2 texto="danger" variante="danger" />
        <Boton2 texto="ghost" variante="ghost" />
      </div>

      <div className="flex justify-center gap-3 mt-4">
        
        <Alert mensaje="Este es un mensaje informativo" />

        <Alert tipo="exito" mensaje="Operación completada" titulo="Éxito" />

        <Alert tipo="error" mensaje="Hubo un problema" mostrarIcono={false} />

        <Alert tipo="advertencia" mensaje="Ten cuidado" titulo="Advertencia" />
      </div>
    </>
  );
};

export default App