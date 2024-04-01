import "../styles/styles-errorcomp.css"

const ErrorComp = () => {
    return (
        <div className="error-container d-flex align-items-center justify-content-center">
            <div className="text-center">
                <p className="error-title">Lo Sentimos</p>
                <p className="error-message">Estamos teniendo errores. Por favor, intenta de nuevo más tarde.</p>
            </div>
        </div>
    )
}

export default ErrorComp
