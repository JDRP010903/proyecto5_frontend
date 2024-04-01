import axios from "axios";
const API_URL = import.meta.env.VITE_PRUEBAS_API;

const loginService = async (form) => {

    const resp = await axios.post(
        `${API_URL}/auth/iniciar_sesion`,
        form
    );

    return resp;
    };

    const registerService = async (form) => {
    const resp = await axios.post(
        `${API_URL}/auth/registrar_usuario`,
        form
    );

    return resp;
    };

    const renovarTokenService = async () => {
    const resp = await axios.get(
        `${API_URL}/auth/validar_usuario`,
        {
        headers: {
            "proyecto5-backend": localStorage.getItem("token"),
        },
        }
    );

    return resp;
};

export { loginService, registerService, renovarTokenService };