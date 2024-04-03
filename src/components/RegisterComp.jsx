import AuthContext from "../context/AuthContext";
import { useContext, useState } from "react";

import "../styles/styles-registercomp.css"


const RegisterComp = () => {

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        lastname: '',
        password: '',
        email: '',
        age: '',
    });

    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('success'); // 'success' o 'error'
    const [showMessage, setShowMessage] = useState(false);

    const { registrarUsuario } = useContext(AuthContext);



    // Maneja el cambio en los campos del formulario
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            await registrarUsuario(formData);
            // Mensaje de éxito y limpieza del formulario
            setMessage('Registro exitoso!');
            setMessageType('success');
            setShowMessage(true);
            setFormData({
                username: '',
                name: '',
                lastname: '',
                password: '',
                email: '',
                age: '',
            });
            
            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        } catch (error) {
            // Manejo de errores
            console.error("Error al registrar el usuario:", error);
            setMessage('Error al registrar. Por favor, inténtalo de nuevo.');
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
            <div className="modal fade" id="RegisterModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="RegisterModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="RegisterModalLabel">Regístrate</h1>
                        <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                        <form className="modal-body" onSubmit={handleRegister}>
                            <div className="mb-3">
                            <label htmlFor="usernameInputRegister" className="form-label">Username</label>
                                <input type="text" className="form-control" id="usernameInputRegister" name="username"  value={formData.username} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="nameInputRegister" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nameInputRegister" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="lastnameInputRegister" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="lastnameInputRegister" name="lastname" value={formData.lastname} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="passwordInputRegister" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="passwordInputRegister" name="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInputRegister" className="form-label">Email</label>
                                <input type="email" className="form-control" id="emailInputRegister" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ageInputRegister" className="form-label">Edad</label>
                                <input type="number" className="form-control" id="ageInputRegister" name="age" value={formData.age} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-custom">Registrarse</button>
                        </form>
                    </div>
                    {showMessage && (
                            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                {message}
                            </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default RegisterComp
