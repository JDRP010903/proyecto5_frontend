import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Carousel as BootstrapCarousel  } from 'bootstrap';
import "../styles/styles-productspage.css"
import SpinnerComp from "../components/SpinnerComp";
import ErrorComp from "../components/ErrorComp";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true); // Inicia la carga
            try {
                const response = await axios.get(`${import.meta.env.VITE_PRUEBAS_API}/productos`);
                setProducts(response.data.data);
                setLoading(false); // Finaliza la carga
            } catch (error) {
                console.error('Error al obtener productos:', error);
                setError('Hubo un error al cargar los productos.'); // Establece el mensaje de error
                setLoading(false); // Finaliza la carga aunque haya un error
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const initializeCarousel = () => {
            // Asegúrate de que Bootstrap JS ya está cargado en el proyecto
            products.forEach(product => {
                const carouselElement = document.querySelector(`#carouselExampleSlidesOnly${product.id}`);
                if (carouselElement) {
                    new BootstrapCarousel(carouselElement, {
                        ride: "carousel",
                        interval: 3500,
                    });
                }
            });
        };

        if (products.length > 0) {
            initializeCarousel();
        }
    }, [products]);


    if (loading) {
        return <SpinnerComp />;
    }

    if (error) {
        return <ErrorComp />;
    }

    return (
        <>
            <div className="row sectionCardProductsPage">
                {products.map((product) => (
                    <div className="col-md-6 mb-4" key={product.id}>
                        <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card">
                                <div className="card-body-one">
                                    <div className="card-title mb-3">
                                        <h3 className="card-title text-center">{product.name}</h3>
                                    </div>
                                    <div id={`carouselExampleSlidesOnly${product.id}`} className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={product.image1} className="img-fluid d-block w-100" alt={`Imagen 1 de ${product.name}`} />
                                            </div>
                                            {product.image2 && (
                                                <div className="carousel-item">
                                                    <img src={product.image2} className="img-fluid d-block w-100" alt={`Imagen 2 de ${product.name}`} />
                                                </div>
                                            )}
                                            {product.image3 && (
                                                <div className="carousel-item">
                                                    <img src={product.image3} className="img-fluid d-block w-100" alt={`Imagen 3 de ${product.name}`} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text priceProductsPage">$ {product.price}</p>
                                        <p className="card-text descripcionProductsPage"><small>{product.description}</small></p>
                                    </div>
                                </div>
                                <div className="card-footer p-2">
                                    <button className="btn btn-custom w-100" type="button" onClick={(e) => e.stopPropagation()}>AGREGAR AL CARRITO</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductsPage
