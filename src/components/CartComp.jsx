import "../styles/styles-cartcomp.css"

const CartComp = () => {
    return (
        <>
            <div className="offcanvas offcanvas-end containerCartComp text-bg-custom" data-bs-backdrop="static" tabIndex={-1} id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="staticBackdropLabel">Carrito de compras</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <div>
                    I will not close if you click outside of me.
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartComp
