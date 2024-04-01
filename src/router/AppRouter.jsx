import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import { useContext, useEffect } from "react"
import AuthContext from "../context/AuthContext"


import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import ProductPage from "../pages/ProductPage"
import ContactanosPage from "../pages/ContactanosPage"
import ProfilePage from "../pages/ProfilePage"
import RegisterPage from "../pages/RegisterPage"
import HeaderComp from "../components/HeaderComp"
import FooterComp from "../components/FooterComp"
import CartComp from "../components/CartComp"

const AppRouter = () => {

    const { renovarToken, user } = useContext(AuthContext);

    useEffect(() => {
        renovarToken();
    }, [renovarToken]);

    return (
        <Router>
            <HeaderComp />
            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/productos" element={<ProductsPage />} />
                    <Route path="/producto/:id" element={<ProductPage />} />
                    <Route path="/contactanos" element={<ContactanosPage />} />
                    <Route path="/miperfil" element={<ProfilePage />} />
                    <Route path="/registrarse" element={<RegisterPage />} />

                    {user?.user_name ? (
                        <>
                            <Route path="/miperfil" element={<ProfilePage />} />
                            {/* Posiblemente más rutas privadas aquí */}
                        </>
                    ) : (
                        <>
                            {/* Rutas públicas: solo accesibles si el usuario NO está autenticado */}
                            <Route path="/registrarse" element={<RegisterPage />} />
                            <Route path="/login" element={<RegisterPage />} />
                        </>
                    )}

                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
                <CartComp />
            </main>
            <FooterComp />
        </Router>
    )
}

export default AppRouter
