import App from './App'
import Historial from './components/historial'
import { createContext, useState } from "react";



export const contextoMost = createContext()



const AppPrincipal = () => {


    const cambiarP = (q) => {
        q == 1 ? most ? setMost(false) : setMost(true) : registrado ? setRegistrado(false) : setRegistrado(true)
    }

    const [most, setMost] = useState(false)
    const [registrado, setRegistrado] = useState(false)
    const [hist, sethist] = useState(false)


    let sendUsuario = {
        Email: '',
        contraseña: ''
    }

    let usuario = {}

    const cambiarN = (e, info) => {
        if (info.Email.length >= 1 && info.contraseña.length >= 1) {
            sendUsuario.Email = info.Email
            sendUsuario.contraseña = info.contraseña
            e.preventDefault()
            cambiarP()
            cambiarP(1)
            console.log(usuario)
        } else return alert('ingresá los datos')
    }


    //historial

    const [numHis,setNunHis] = useState(0)

    const incrementar= ()=>{
        setNunHis(numHis + 1)
    }


    let historial= [{
            id : 1,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 2,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 3,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"
        },
        {
            id : 1,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 2,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 3,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"
        },{
            id : 1,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 2,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 3,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"
        },{
            id : 1,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 2,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 3,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"
        },{
            id : 1,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 2,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"

        },
        {
            id : 3,
            reparacion : 'llantas',
            patente: 'algo123',
            dia : '10/11/28',
            observacion: "aksasjkgdiadkbaisudbaksdijas"
        }
    ]

    const [modif,setModif] = useState(false)

    const [objMod,setModObj] = useState(0)


    const modificarC = () => {
        modif ? setModif(false) : setModif(true)
    }

    const intercalarHist = () => {
        hist ? sethist(false) : sethist(true)
    }


    return (
        <contextoMost.Provider value={{ objMod,modif,most,hist,historial, registrado,numHis,setModObj,modificarC, cambiarP, cambiarN, intercalarHist,incrementar}}>

                    <App />
        </contextoMost.Provider>
    );
}

export default AppPrincipal;