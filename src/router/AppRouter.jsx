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
import HeaderComp from "../components/HeaderComp"
import FooterComp from "../components/FooterComp"
import CartComp from "../components/CartComp"
import LoginComp from "../components/LoginComp"
import RegisterComp from "../components/RegisterComp"

const AppRouter = () => {

    const { renovarToken, user } = useContext(AuthContext);

    useEffect(() => {
        renovarToken();
    }, [renovarToken]);

    return (
        <Router>
            <HeaderComp />
            <main className="container">
                <LoginComp />
                <RegisterComp />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/productos" element={<ProductsPage />} />
                    <Route path="/producto/:id" element={<ProductPage />} />
                    <Route path="/contactanos" element={<ContactanosPage />} />

                    {user.id ? (
                        <Route path="/miperfil" element={<ProfilePage />} />
                    ) : (
                        <Route path="/miperfil" element={<Navigate to="/" replace />} />
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
