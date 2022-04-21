import myStyles from "../styles/Dashboard.module.scss";
import profilePic from "../images/profilePic.jpg"
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
    const navigate = useNavigate();

    return (
        <div className={myStyles.fixedHorizontalContainer}>
            <div className={myStyles.verticalContainer}>
                <span className={myStyles.dataFieldsText}><b>Usuario: </b>Jeff Parker</span>
                <span className={myStyles.dataFieldsText}><b>Tipo de membresía: </b>Corporate</span>
                <span className={myStyles.dataFieldsText}><b>Fecha de creación: </b>20/12/2021</span>
            </div>
            <div className={myStyles.horizontalContainer}>
                <button onClick={() => navigate("/profile")}>Administrar cuenta</button>
                <img className={myStyles.circularImg} src={profilePic}></img>
            </div>
        </div>
    );
}

export default DashboardHeader;