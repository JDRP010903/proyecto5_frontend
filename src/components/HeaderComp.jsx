import "../styles/styles-headercomp.css"
import { NavLink } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

import logoImg from "../assets/images/logo4YS.webp"

const HeaderComp = () => {

    const { user, logout } = useContext(AuthContext);
    const [shouldShowHeader, setShouldShowHeader] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPosition = document.documentElement.scrollTop;
    
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
                        <button
                            className="navbar-toggler"
                            type="button"
                            aria-controls="navbarSupportedContent"
                            aria-expanded={!isNavCollapsed ? 'true' : 'false'}
                            aria-label="Toggle navigation"
                            onClick={handleNavCollapse}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
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
                                        aria-current="contactanos"
                                        to="/contactanos"
                                    >
                                        Contáctanos
                                    </NavLink>
                                </li>
                                <li className="nav-item px-auto">
                                    <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                        <i className="bx bx-cart bx-cssSize"/>
                                    </a>
                                </li>
                                <li className="nav-item dropdown d-flex justify-content-center align-items-center">
                                    <a className="nav-link dropdown-toggle d-flex justify-content-center align-items-center" href="#" role="button" onClick={toggleDropdown} aria-expanded={isOpen}>
                                        <i className="bx bx-user bx-cssSize"/>
                                    </a>
                                    <ul className={`dropdown-menu${isOpen ? ' show' : ''}`}>
                                        {user.username ? (
                                            <>
                                                <li 
                                                    className="nav-link"
                                                >
                                                    <NavLink className="dropdown-item miPerfilNavItem" to="/miperfil">Perfil</NavLink>
                                                </li>
                                                <li><button className="dropdown-item" to="/" onClick={logout}>Cerrar Sesión</button></li>
                                            </>
                                        ) : (
                                            <>
                                                <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#LoginModal">Iniciar Sesión</button></li>
                                                <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#RegisterModal">Registrarse</button></li>
                                            </>
                                        )}
                                    </ul>
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
