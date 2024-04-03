import { useEffect, useState } from 'react';
import "../styles/styles-homepage.css"

import tenisJordanHero from "../assets/images/tenisJordanHero.png"
import tenisYeezyHero from "../assets/images/tenisYeezyHero.png"
import fondoCardDerechoSuperior from "../assets/images/fila-1-columna-2.png"
import fondoCardIzquierdoSuperior from "../assets/images/fila-1-columna-1.png"
import fondoCardIzquierdoInferior from "../assets/images/fila-2-columna-1.png"
import fondoCardDerechoInferior from "../assets/images/fila-2-columna-2.png"
import fondoCardAboutUs from "../assets/images/fondoCardNuestraHistoria.png"

const HomePage = () => {

    const [imagenActual, setImagenActual] = useState({
        izquierdoSuperior: fondoCardIzquierdoSuperior,
        derechoSuperior: fondoCardDerechoSuperior,
        izquierdoInferior: fondoCardIzquierdoInferior,
        derechoInferior: fondoCardDerechoInferior,
    });

    useEffect(() => {
        const ajustarImagenPorAnchoDePantalla = () => {
            if (window.innerWidth < 1024) {
                setImagenActual({
                izquierdoSuperior: fondoCardAboutUs,
                derechoSuperior: fondoCardAboutUs,
                izquierdoInferior: fondoCardAboutUs,
                derechoInferior: fondoCardAboutUs,
                });
            } else {
                setImagenActual({
                izquierdoSuperior: fondoCardIzquierdoSuperior,
                derechoSuperior: fondoCardDerechoSuperior,
                izquierdoInferior: fondoCardIzquierdoInferior,
                derechoInferior: fondoCardDerechoInferior,
                });
            }
        };
        window.addEventListener('resize', ajustarImagenPorAnchoDePantalla);

        // Llamada inicial para establecer la imagen correcta al cargar
        ajustarImagenPorAnchoDePantalla();

        // Limpieza al desmontar el componente
        return () => {
        window.removeEventListener('resize', ajustarImagenPorAnchoDePantalla);
        };
    }, []);



    return (
        <>
            <div className="row contenedorHeroHomePage p-5 mb-3">
                <div className="col-12 col-md-3 d-flex justify-content-center contenedorImagenIzquierdaHomePage">
                    <img className="img-fluid" src={tenisJordanHero} alt="Tenis Jordan" />
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <h1 className="text-center titleHeroHomePage">Bienvenido al mundo de los Sneakers</h1>
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center contenedorImagenDerechaHomePage">
                <img className="img-fluid" src={tenisYeezyHero} alt="Tenis Jordan" />
                </div>
            </div>

            <div className="row g-1 contenedorInfoHomePage d-flex justify-content-between">
                <div className="col-12 col-md-5 text-center p-5 contenedorInfoNextLevelHomePage mb-3">
                    <h2 className="m-2 titleNextLevelHomePage">PASA AL SIGUIENTE NIVEL</h2>
                    <p className="m-2 text-start textNextLevelHomePage">En 4YourStyle, llevamos tu pasión por los sneakers al siguiente nivel. Con una selección exclusiva de modelos, junto a consejos de expertos, nos dedicamos a satisfacer tus necesidades específicas y a destacar tu estilo único. Aquí, tu satisfacción es nuestra misión. Únete a nuestra comunidad y eleva tu juego.</p>
                </div>
                <div className="col-12 col-md-5 contenedorInfoCommunityHomePage mb-3 py-5 text-center">
                    <h2 className="m-2 titleNextLevelHomePage">ÚNETE A NUESTRA COMUNIDAD</h2>
                    <div className='d-flex p-5 justify-content-center align-items-center h-100'>
                        <button to="/registrarse" className="btn btnRegistrarseHomePage" data-bs-toggle="modal" data-bs-target="#RegisterModal">
                            REGISTRARSE
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row g-1 sectionAboutHomePage mb-3">
                <div className="col-12">
                    <h1 className='sobreNosotrosTitleHomePage text-center'>SOBRE NOSOTROS</h1>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card text-bg-dark">
                        <img src={imagenActual.izquierdoSuperior} className="card-img" alt="Imagen 1" />
                        <div className="card-img-overlay">
                            <h5 className="card-title text-center">Nuestra Historia</h5>
                            <p className="card-text">4YourStyle nace de la pasión por los sneakers, ofreciendo desde su inicio productos y asesoramiento de alta calidad. Nos inspira el amor por el estilo.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card text-bg-dark">
                        <img src={imagenActual.derechoSuperior} className="card-img" alt="Imagen 2" />
                        <div className="card-img-overlay">
                            <h5 className="card-title text-center">Nuestra Misión</h5>
                            <p className="card-text">Impulsamos a la comunidad de los sneakers, proporcionando productos de primera y un espacio para compartir la pasión por el estilo</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card text-bg-dark">
                        <img src={imagenActual.izquierdoInferior} className="card-img" alt="Imagen 3" />
                        <div className="card-img-overlay">
                            <h5 className="card-title text-center">Nuestra Visión</h5>
                            <p className="card-text">Aspiramos a ser el aliado de cada sneakerlover, brindando productos de calidad y de mucho flow.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card text-bg-dark">
                        <img src={imagenActual.derechoInferior} className="card-img" alt="Imagen 4" />
                        <div className="card-img-overlay">
                            <h5 className="card-title text-center">Nuestros Valores</h5>
                            <p className="card-text">Nos guían la integridad, la innovación y el compromiso con la excelencia, pilares fundamentales en cada acción de 4YourStyle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
