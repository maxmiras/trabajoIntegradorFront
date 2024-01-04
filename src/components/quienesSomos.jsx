import "../styles/front1.css"
import { contextoMost } from "../AppPrincipal";
import { useContext, useEffect, useState } from "react";





const QuienesSomos = () => {

    const [infoI1, setInfo] = useState('');
    const [infoI2, setInfo2] = useState('');


    const cambiar = (e, num) => {
        num == 1 ?
        e.nativeEvent.data == null ? setInfo(infoI1.substring(0, infoI1.length-1)) : setInfo(infoI1 + e.nativeEvent.data) 
        : e.nativeEvent.data == null ? setInfo2(infoI2.substring(0, infoI2.length-1)) : setInfo2(infoI2 + e.nativeEvent.data);
        console.log(e)
    }


    const most = useContext(contextoMost)





    return (
        <>
            <div className="contenedorFont"  >
                <div className="contText">
                    <h1 className="h1Font">Lubricentro</h1>
                    {/* <li className="pFont">
                    somos el lubricentro  Lorem ipsum dolor, si
                        t amet consectetur adipisicing elit. Error repellat inventore nulla recusand
                        ae reprehenderit culpa similique impedit, optio nesciunt atque totam numquam,
                        est, placeat par
                        iatur enim necessitatibus obcaecati quam cumque?

                    </li>
                    <button className="registrarseFont">Registrarse</button> */}
                </div>

                {most.most ? <div className="contIniciar">
                    <form action="" className="form2">
                        Email
                        <input type="email" className="input2" value={infoI1} onChange={(e) => { cambiar(e, 1); }} />
                        <p className="p"> Mensaje</p>
                        <input type="password" name="" className="input2" id="" value={infoI2} onChange={(e) => { cambiar(e, 2); }} />
                        <button className="btn2" onClick={(e) => {
                            most.cambiarN(e,{Email : infoI1, contraseña : infoI2})
                            setInfo('')
                            setInfo2('')
                            }} >enviar</button>
                    </form>
                </div> : <></>}
                {/* <div className="imgFont">

                </div> */}
            </div>
        </>
    );
}

export default QuienesSomos;