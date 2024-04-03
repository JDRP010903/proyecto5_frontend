import { useContext, useEffect, useState } from "react"
import ProductContext from '../context/ProductContext';
import AuthContext from "../context/AuthContext";
import PayPalButton from "./PayPalButton";

import "../styles/styles-cartcomp.css"

const CartComp = () => {
    const { cart, deleteCartProduct } = useContext(ProductContext);
    const { user } = useContext(AuthContext);

    const [total, setTotal] = useState(0);

    const handleDeleteCartProduct = (id) => {
        deleteCartProduct(id);
    };

    useEffect(() => {
    const totalAcumulado = cart.reduce(
        (acc, product) => acc + product.price,
        0
    );

    setTotal(totalAcumulado);
    }, [cart]);
    return (
        <>
            <div className="offcanvas offcanvas-end containerCartComp text-bg-custom" data-bs-backdrop="static" tabIndex={-1} id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="staticBackdropLabel">Carrito de compras</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-text">
                                    <h5>{item.name}</h5>
                                    <h5>Precio: ${item.price}</h5>
                                </div>
                                <button
                                    className="btn btn-danger d-flex justify-content-center"
                                    onClick={() => handleDeleteCartProduct(item.id)}>
                                    Eliminar
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Tu carrito está vacío.</p>
                    )}
                </div>
                <section className="row pb-5">
                    <article className="col">
                        {cart.length > 0 ? (
                            <>
                            <p className="fs-4">Total: $ <span className="fs-4">{total}</span></p>
                            
                            {user.username ? (
                                <>
                                    <div className="cart-pay-button">
                                    <PayPalButton
                                        currency="MXN"
                                        amount={total}
                                        showSpinner={false}
                                    />
                                    </div>
                                </>
                            ) : (
                                <>
                                <hr />
                                <div className="cart-pay-button">
                                    <button data-bs-toggle="modal" data-bs-target="#LoginModal" className="btn btn-success">
                                        Iniciar sesion
                                    </button>
                                </div>
                                </>
                            )}
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </article>
                </section>
            </div>
        </>
    )
}

export default CartComp
