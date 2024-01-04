import '../styles/modificar.css'
import { contextoMost } from '../AppPrincipal';
import { useContext } from 'react';


const Modificar = () => {

    const modificador = useContext(contextoMost)


    return (
        <>
            <div className="contenedorDeLosC">
                <p className="ps">Fecha</p>
                <input className="ip" type="text" name="" id="" />
                <p className="ps"> patente</p>
                <input className="ip" type="text" name="" id="" />
                <p className="ps">tipo de reparacion</p>
                <input className="ip" type="text" name="" id="" />
                <p className="ps">observacion</p>
                <input className="ip" type="text" name="" id="" />
                <button className='btn btn-primary h-20 w-20 boton2'>Modificar</button>
                <button className='btn btn-danger h-20 w-20 boton2' onClick={()=>modificador.modificarC()} >Cerrar</button>

            </div>
        </>
    );
}

export default Modificar;