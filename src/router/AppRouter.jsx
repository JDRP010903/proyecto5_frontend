import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import ProductPage from "../pages/ProductPage"
import CartPage from "../pages/CartPage"
import ContactanosPage from "../pages/ContactanosPage"
import ProfilePage from "../pages/ProfilePage"
import RegisterPage from "../pages/RegisterPage"
import HeaderComp from "../components/HeaderComp"
import BlogPage from "../pages/BlogPage"
import FooterComp from "../components/FooterComp"

const AppRouter = () => {
    return (
        <Router>
            <HeaderComp />
            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/productos" element={<ProductsPage />} />
                    <Route path="/producto/:id" element={<ProductPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/carritocompras" element={<CartPage />} />
                    <Route path="/contactanos" element={<ContactanosPage />} />
                    <Route path="/miperfil" element={<ProfilePage />} />
                    <Route path="/registrarse" element={<RegisterPage />} />

                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <FooterComp />
        </Router>
    )
}

export default AppRouter
