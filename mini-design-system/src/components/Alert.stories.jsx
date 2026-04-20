// 📄 src/components/Alert.stories.jsx
import Alert from './Alert';
export default {
    title: 'Componentes/Alert',
    component: Alert,
    argTypes: {
        tipo: {
            control: 'select',
            options: ['info', 'exito', 'error', 'advertencia'],
        },
        mostrarIcono: { control: 'boolean' },
    },
};
export const Info = {
    args: {
        tipo: "info",
        titulo: "Información",
        mensaje: "Tu sesión se cerrará en 5 minutos.",
    },
};
export const Exito = {
    args: {
        tipo: "exito",
        titulo: "Guardado",
        mensaje: "Los cambios se han guardado correctamente.",
    },
};
export const Error = {
    args: {
        tipo: "error",
        titulo: "Error de conexión",
        mensaje: "No se pudo conectar con el servidor. Inténtalo de nuevo.",
    },
};
export const SinIcono = {
    args: {
        tipo: "advertencia",
        mensaje: "Esta acción no se puede deshacer.",
        mostrarIcono: false,
    },
};
export const SinTitulo = {
    args: {
        tipo: "info",
        mensaje: "Mensaje informativo simple sin título.",
    },
};