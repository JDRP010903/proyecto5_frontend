import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import PropTypes from "prop-types";
import { useCallback, useReducer, useEffect } from "react";

import {
    loginService,
    registerService,
    renovarTokenService,
} from "../services/authServices";

const initialGlobalState = {
    user: {},
};

const AuthState = ({ children }) => {
    const [globalState, dispatch] = useReducer(authReducer, initialGlobalState);

    const iniciarSesion = async (form) => {
        try {
        const resp = await loginService(form);
        // console.log(resp.data.data);
        dispatch({
            type: "INICIAR_SESION",
            payload: resp.data.data,
        });

        localStorage.setItem("token", resp.data.token);
        } catch (error) {
            throw new Error(error.response.data.msg)
        }
    };

    const registrarUsuario = async (form) => {
        try {
        const resp = await registerService(form);
        // console.log(resp.data.data);
        dispatch({
            type: "REGISTRAR_USUARIO",
            payload: resp.data.data,
        });
        localStorage.setItem("token", resp.data.token);
        } catch (error) {
        console.log(error.response.data.msg);
        }
    };

    const renovarToken = useCallback(async () => {
        const tokenEnAlmacenamiento = localStorage.getItem("token");
        if (!tokenEnAlmacenamiento) {
            // No hay token, posible lógica adicional
            return;
        }
        try {
            const resp = await renovarTokenService();
            dispatch({
                type: "INICIAR_SESION",
                payload: resp.data.data,
            });
            localStorage.setItem("token", resp.data.token);
        } catch (error) {
            console.log(error.response.data.msg);
            if (error.response && error.response.status === 401) {
                logout(); // Token inválido o expirado
            }
        }
    }, []);

    // Función para restaurar la sesión
    const restaurarSesion = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            // No hay token, posible lógica adicional
            return;
        }

        try {
            // Aquí llamas a tu servicio de renovación de token o validación de sesión
            const respuesta = await renovarTokenService(); // Asegúrate de implementar esta función
            dispatch({
                type: "INICIAR_SESION",
                payload: respuesta.data.data,
            });
            // No es necesario volver a guardar el token si ya está en localStorage
        } catch (error) {
            console.log("Sesión no restaurada", error);
            // Manejo si el token es inválido o si hay otro error
        }
    };

    const logout = () => {
        dispatch({
        type: "LOGOUT",
        });

        localStorage.removeItem("token");
    };

    useEffect(() => {
        restaurarSesion();
    }, []);

    return (
        <AuthContext.Provider
        value={{
            user: globalState.user,
            restaurarSesion,
            iniciarSesion,
            registrarUsuario,
            renovarToken,
            logout,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
};

AuthState.propTypes = {
    children: PropTypes.node,
};

export default AuthState;