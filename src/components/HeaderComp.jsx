import "../styles/styles-headercomp.css"
import { NavLink } from 'react-router-dom';

const HeaderComp = () => {
    return (
        <header className="mb-4 py-3">
            <div className="container-fluid" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid d-flex justify-content-between">
                        <NavLink className="titleLogoHeader mx-5" to="/">4YourStyle</NavLink>
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
                                        aria-current="page"
                                        to="/contactanos"
                                    >
                                        Contáctanos
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                        }
                                        aria-current="page"
                                        to="/carritocompras"
                                    >
                                        <i className="bx bx-cart bx-cssSize"/>
                                    </NavLink>
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
