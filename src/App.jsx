import BarraNav from "./components/navBar.jsx";
import QuienesSomos from "./components/quienesSomos.jsx";
import HYT from "./components/HYT.jsx";
import "./styles/app.css"
import Footer from "./components/foter.jsx";
import Historial from "./components/historial.jsx";
import { useContext } from "react";
import { contextoMost } from "./AppPrincipal.jsx";


const App = () => {

    const { hist } = useContext(contextoMost)

    console.log(hist)

    return (
        <>
            <BarraNav />
            <QuienesSomos />
            <HYT />
            <Footer />
        </>
    );
}

export default App;