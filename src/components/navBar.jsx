import "../styles/navbar.css"
import { contextoMost } from "../AppPrincipal";
import { useContext } from "react";







const BarraNav = () => {


    const mostrar = useContext(contextoMost)

    return (
        <>
            <nav className="navegador">
                <div className="contenedor ">
                    <div className="img"></div>
                </div>

                <div className="contenedor contenedorIH">
                    <a href='#' className="iniciar contactos">contactanos</a>
                </div>
                {mostrar.registrado !== true ?
                    <div className="contenedor contenedorH" onClick={() => { mostrar.cambiarP(1); console.log(mostrar.most) }}>
                        <button className="iniciar" >Iniciar</button>
                    </div> :
                    <div className="contenedor contenedorH" onClick={() => { mostrar.cambiarP()}}>
                        <button className="iniciar" >cerrar sesion</button>
                    </div>
                }

                <div>
                </div>
            </nav>
        </>
    );
}

export default BarraNav;