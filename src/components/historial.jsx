import ItemsHis from "./itemsHis";
import { contextoMost } from "../AppPrincipal";
import { useContext, useEffect } from "react";
import "../styles/historial.css"
import Busc from "../hooks/buscarInfo.js"
import Modificar from "./modificar.jsx";


const Historial = () => {

    const { historial, hist, incrementar, numHis,intercalarHist,modificarC,setModObj } = useContext(contextoMost)



    // let historial;


    return (
        <>
            <div className="histo"></div>

            <table className=" tablaS">
                <div className="table divContCol">
                    <thead>
                        <tr>
                            <th scope="col">fecha</th>
                            <th scope="col">patente</th>
                            <th scope="col">tipo de reparacion</th>
                            <th scope="col">observacion</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            historial.filter(e => e != 'undefined').map((f, index) => (
                                <ItemsHis key={index} i={f} historial={historial} />
                            ))

                        }
                    </tbody>
                </div>
                <div className="divC">
                    <button className=" btn btn-primary w-40 h-20">buscar Patente</button>
                    <input type="text" className="w-60 h-10 inputB" name="" id="" />
                    <button className=" btn btn-primary w-40 h-20" onClick={()=>{modificarC();setModObj(-1)}} > agregar </button>
                    <button className=" btn btn-danger w-40 h-20 inputB"  onClick={()=>intercalarHist()}> cerrar</button>

                </div>
            </table>
        </>
    );
}

export default Historial;