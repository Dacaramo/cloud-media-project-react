import myStyles from "../styles/AuthRelatedPages.module.scss";
import { useState } from "react";
import { createPortal } from 'react-dom';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo from "../images/CloudMediaProjectLogo.png";

const LoginModal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");

        if(password === confirmedPassword){
            // const response = await Axios.get(`uri`);
            // const data = response.data;
        }
        else {
            setMessage("Las contraseñas no coinciden");
        }
    }

    return createPortal(
        <div className={myStyles.authModalBackground}>
            <form className={myStyles.authModalContainer} onSubmit={handleSubmit}>
                <img className={myStyles.logoImg} src={logo} />
                { message && <span className={myStyles.messageSpan}><b>{message}</b></span> }
                <div>
                    <label htmlFor="emailInput">Email</label><br />
                    <input type="email" id="emailInput" placeholder="Ingrese su email" required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='passwordInput'>Contraseña</label><br />
                    <input type="password" id="passwordInput" placeholder="Escoja su contraseña" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='confirmedPasswordInput'>Repita la contraseña</label><br />
                    <input type="password" id="confirmedPasswordInput" placeholder="Confirme su contraseña" required onChange={(e) => setConfirmedPassword(e.target.value) }/>
                </div>
                <button type="submit" disabled={isLoading}>Crear cuenta</button>
                <span>Ya tienes una cuenta? <a onClick={() => {navigate("/login")}}><u><b>Accede ahora</b></u></a></span> 
            </form>
        </div>,
        document.getElementById("portal")
    )
}

export default LoginModal;