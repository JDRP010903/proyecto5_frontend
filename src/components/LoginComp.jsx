import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

import "../styles/styles-logincomp.css"

const LoginComp = () => {

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { iniciarSesion } = useContext(AuthContext);

    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('success');
    const [showMessage, setShowMessage] = useState(false);

    // Maneja el cambio en los campos del formulario
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await iniciarSesion(formData);
            // Mensaje de éxito y limpieza del formulario
            setMessage(`Bienvenido ${formData.username}!`);
            setMessageType('success');
            setShowMessage(true);
            setFormData({
                username: '',
                password: '',
            });
            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        } catch (error) {
            setMessage(error.message);
            setMessageType('error');
            setShowMessage(true);

            
            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        }
    };

    return (
        <>
            <div className="modal fade" id="LoginModal" tabIndex={-1} aria-labelledby="LoginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content loginModal">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="LoginModalLabel">Inicio de Sesión</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form className="form-login" onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="usernameInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="usernameInput" aria-describedby="emailHelp" name="username" value={formData.username} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="passwordInput" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-custom d-flex">Iniciar Sesión</button>
                                </div>
                            </form>
                        </div>
                        {showMessage && (
                            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComp
