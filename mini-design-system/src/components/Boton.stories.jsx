// 📄 src/components/Boton.stories.jsx
// ① Importamos el componente que vamos a documentar
import Boton from './Boton';
// ② Metadata: le dice a Storybook dónde mostrar este componente
export default {
    title: 'Componentes/Boton',
    component: Boton,
    // ① argTypes configura el TIPO DE CONTROL de cada prop
    argTypes: {
        variante: {
            control: 'select',
            options: ['primary', 'secondary', 'danger', 'ghost'],
        },
        deshabilitado: {
            control: 'boolean',
        },
    },
};

// ② Story "Playground": todas las props editables desde Controls
export const Playground = {
    args: {
        texto: "Botón de prueba",
        variante: "primary",
        deshabilitado: false,
    },
};

// ③ Cada export nombrado es una Story (una variante visible en el sidebar)
export const Primary = {
    args: { texto: "Guardar cambios", variante: "primary" },
};
export const Secondary = {
    args: { texto: "Cancelar", variante: "secondary" },
};
export const Danger = {
    args: { texto: "Eliminar cuenta", variante: "danger" },
};
export const Ghost = {
    args: { texto: "Ver más", variante: "ghost" },
};
export const Deshabilitado = {
    args: {
        texto: "No disponible", variante: "primary", deshabilitado:
            true
    },
};