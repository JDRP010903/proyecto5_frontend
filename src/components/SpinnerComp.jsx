import "../styles/styles-spinnercomp.css"

const SpinnerComp = () => {
    return (
        <div className="d-flex justify-content-center containerSpinnerComp">
            <div className="position-relative spinner-border spinnerComp d-flex justify-content-center align-items-center" role="status"></div>
            <p className="position-absolute d-flex justify-content-center align-items-center textSpinnerComp">Cargando...</p>
        </div>
    )
}

export default SpinnerComp
