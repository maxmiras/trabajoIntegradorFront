import "../styles/HYT.css"
//importamos las imgs por q directamente no se pueden poner en las etiquetas img
import card1 from '../assets/card1.png'
import card2 from '../assets/pedirTurno.jpeg'
import { contextoMost } from "../AppPrincipal"
import { useContext } from "react"
import Historial from "./historial"
import Modificar from "./modificar"




const HYT = () => {

    const histM = useContext(contextoMost)

    return (
        <div className="contenedorDeContenedores">

            {histM.hist? <Historial/> : <div className="rellenoHYT"></div>}

            {histM.modif? <Modificar/> : <></>}

            <div className="contHYT" >

                <div className="contCards">
                    <div className="card1">
                        <img src={card1} alt="" className="img-2"></img>
                        <p className="p-1">pides tu turno y elijes el dia que quieras!!!</p>
                        <button className="btn-1" id="btn-1">Solicitar turno</button>
                    </div>

                    <div className="card2">
                        <img src={card2} alt="" className="img-2"></img>
                        <p className="p-1">Aquí puedes ver todo el historial de tu auto</p>
                        <button className="btn-1" id="btn-1" onClick={()=>{histM.intercalarHist()}} >Historial</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HYT;