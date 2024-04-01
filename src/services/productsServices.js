import axios from "axios";

const URL = "https://dwfs23-m3s21-demo-api.onrender.com/productos";

const obtenerProductosService = async () => {
    const resp = await axios.get(URL);
    return resp;
};

const obtenerProductoService = async (id) => {
    const resp = await axios.get(`${URL}/${id}`);
    return resp;
};

export { obtenerProductosService, obtenerProductoService };