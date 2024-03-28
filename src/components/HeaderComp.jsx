import "../styles/styles-headercomp.css"
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";

import logoImg from "../assets/images/logo4YS.webp"

const HeaderComp = () => {

    const [shouldShowHeader, setShouldShowHeader] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
        // Mostrar encabezado al desplazarse hacia arriba, ocultar al desplazarse hacia abajo
        if (currentScrollPosition < lastScrollPosition) {
            setShouldShowHeader(true);
        } else if (currentScrollPosition > lastScrollPosition) {
            setShouldShowHeader(false);
        }
    
        setLastScrollPosition(currentScrollPosition);
        };
    
        // Agregar el event listener
        window.addEventListener('scroll', handleScroll);
    
        // Limpiar el event listener al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPosition]);


    return (
        <header className={`header ${shouldShowHeader ? 'visible' : 'hidden'}`}>
            <div className="container-fluid" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid d-flex justify-content-between">
                        <NavLink className="titleLogoHeader mx-lg-5" to="/"><img className="img-fluid logoHeaderImg" src={logoImg} alt="Logo 4YS" /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around">
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                        }
                                        aria-current="page"
                                        to="/"
                                    >
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                        }
                                        aria-current="page"
                                        to="/productos"
                                    >
                                        Productos
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                        }
                                        aria-current="page"
                                        to="/blog"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                        className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                        }
                                        aria-current="contactanos"
                                        to="/contactanos"
                                    >
                                        Contáctanos
                                    </NavLink>
                                </li>
                                <li className="nav-item px-auto">
                                    <a className="nav-link">
                                        <i className="bx bx-cart bx-cssSize"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default HeaderComp
