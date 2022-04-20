import myStyles from "../styles/AuthRelatedPages.module.scss";
import { useState } from "react";
import { createPortal } from 'react-dom';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo from "../images/CloudMediaProjectLogo.png";

const LoginModal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const response = await Axios.get(`uri`);
        // const data = response.data;
    }

    return createPortal(
        <div className={myStyles.authModalBackground}>
            <form className={myStyles.authModalContainer}>
                <img src={logo} />
                <div>
                    <label htmlFor="emailInput">Email</label><br />
                    <input type="email" id="emailInput" placeholder="Ingrese su email" required />
                </div>
                <div>
                    <label htmlFor='passwordInput'>Contraseña</label><br />
                    <input type="password" id="passwordInput" placeholder="Ingrese su contraseña" required />
                </div>
                <button type="submit" disabled={isLoading} onClick={handleSubmit}>Acceder</button>
                <span>No tienes una cuenta? <a onClick={() => {navigate("/signup")}}><u><b>Crea una cuenta ahora</b></u></a></span> 
            </form>
        </div>,
        document.getElementById("portal")
    )
}

export default LoginModal;