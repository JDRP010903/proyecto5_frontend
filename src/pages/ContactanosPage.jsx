import { useState } from "react";
import "../styles/styles-contactanospage.css"
import gifContactanos from "../assets/videos/gifContactanos.gif"

const ContactanosPage = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <>
            <div className="row contactanosPage p-4 pb-5">
                <div className="col-12 d-flex justify-content-center align-items-center m-2">
                    <h2 className="titleContactanosPage">Contáctanos</h2>
                </div>
                <div className="col-12 col-md-6 imgContactanosPage d-flex justify-content-center align-items-center p-2">
                    <img className="img-fluid" src={gifContactanos} alt="Gif Tenis" />
                </div>
                <div className="col-12 col-md-6 p-2 formContactanosPage">
                    <form >
                        <div className="form-row d-flex">
                            <div className="form-group col-md-6 p-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6 p-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleChange}
                                    placeholder="Apellido"
                                />
                            </div>
                        </div>
                        <div className="form-group p-1">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email *"
                                required
                            />
                        </div>
                        <div className="form-group p-1">
                            <textarea
                                className="form-control"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                placeholder="Mensaje"
                            />
                        </div>
                        <div className="row p-2">
                            <button type="submit" className="btn btn-custom">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactanosPage
