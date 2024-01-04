import "../styles/foter.css"
//imgs
import instaLogo from '../assets/instaLogo.png';
import WAPP from '../assets/WApp.png';
import FB from '../assets/FB.png';





const Footer = () => {
    return (
        <>
            <div className="contenedorFoot">
                <div className="contA">
                    <a href="" className="A"><img src={instaLogo} alt="" className="imgI" /></a>
                    <a href="" className="A"><img src={WAPP} alt="" className="imgI" /></a>
                    <a href="" className="A "><img src={FB} alt="" className="imgI" /></a>
                </div>
                <div>
                    <form action="" className="form1">
                        Email
                        <input type="email" className="input1" />
                        <p className="p"> Mensaje</p>
                        <textarea name=""  className="input1 i2" cols="30" rows="10"></textarea>
                        <button className="btn1">enviar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Footer;