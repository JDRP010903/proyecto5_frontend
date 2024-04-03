import axios from "axios";

const API_URL = import.meta.env.VITE_PRUEBAS_API;
const URL = `${API_URL}/productos`;

const obtenerProductosService = async () => {
    const resp = await axios.get(URL);
    return resp;
};

const obtenerProductoService = async (id) => {
    const resp = await axios.get(`${URL}/${id}`);
    return resp;
};

export { obtenerProductosService, obtenerProductoService };