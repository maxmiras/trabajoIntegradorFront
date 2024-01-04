import { useContext } from "react";
import { contextoMost } from "../AppPrincipal";
import '../styles/historial.css'
import tachito from '../assets/basura.png'
import pincel from '../assets/cepillo-de-pintura.png'



const ItemsHis = (i) => {

    const { historial,modificarC,setModObj} = useContext(contextoMost)


    function eliminar(id) {
        // for (let e = 0; e < historial.length; e++) {
        //     delete (modificarC())
        // }
        // console.log(historial)
    }




    return (
        <tr className="contenedorCol">
            <th scope="row">{i.i.dia}</th>
            <td>{i.i.patente}</td>
            <td> {i.i.reparacion}</td>
            <td>{i.i.observacion}</td>
            <td className="contAs">
                <img className="botton" src={pincel} key={i.i.id} onClick={()=>{modificarC();setModObj(i.i.id)}} />

            </td>
            <td className="contAs">

                <img className="botton" src={tachito} key={i.i.id + 1}
                    onClick={() => { eliminar(i.i.id) }}
                />
            </td>

        </tr>
    );
}

export default ItemsHis;