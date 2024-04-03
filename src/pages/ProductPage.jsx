import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SpinnerComp from "../components/SpinnerComp";
import ErrorComp from "../components/ErrorComp";
import ProductContext from '../context/ProductContext';

import "../styles/styles-productpage.css"

const ProductPage = () => {

    const { id } = useParams(); // Obtiene el ID del producto de la URL
    const [product, setProduct] = useState(null); // Estado para almacenar los detalles del producto
    const [selectedImage, setSelectedImage] = useState('');
    const [imageList, setImageList] = useState([]);
    const [error, setError] = useState(null);

    const { addCartProduct } =
    useContext(ProductContext);

    const handleAgregarCarrito = (id) => {
        addCartProduct(id);
        console.log("Agregado al carrito")
    };

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_PRUEBAS_API}/productos/${id}`);
                const productData = response.data.data;
                setProduct(productData);
                setSelectedImage(productData.image1); // Establece la primera imagen como seleccionada por defecto
                // Filtra y agrega las imágenes existentes al arreglo imageList
                const images = [productData.image1, productData.image2, productData.image3].filter(image => image);
                setImageList(images);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setError('Hubo un error al cargar los detalles del producto.'); // Establece el mensaje de error
            }
        };
    
        fetchProductDetails();
    }, [id]);

    if (!product) {
        return <SpinnerComp />;
    }

    if (error) {
        return <ErrorComp />;
    }


    return (
        <>
            <div className="container">
                <div className="row product-details">
                    <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                        <img src={selectedImage} alt={product.name} className="img-fluid imageProductPage mb-3" style={{ maxWidth: "100%", maxHeight: "400px" }} />
                        <div className="w-100 d-flex justify-content-center flex-wrap">
                            {imageList.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    className="img-thumbnail m-2"
                                    style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer" }}
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="text-center">
                            <p className="descripcionProductPage">{product.description}</p>
                            <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap">
                                <p className="precioProductPage mb-0">Precio: ${product.price}</p>
                                <button
                                    type="button"
                                    className="btn btnProductPage"
                                    onClick={() => handleAgregarCarrito(product.id)}
                                >
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage
