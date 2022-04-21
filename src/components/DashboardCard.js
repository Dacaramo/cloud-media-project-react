import myStyles from "../styles/Dashboard.module.scss";
import { Progress } from 'react-sweet-progress';
import { useNavigate } from "react-router-dom";
import "react-sweet-progress/lib/style.css";

const DashboardCard = (props) => {
    const navigate = useNavigate();

    return (
        <div className={myStyles.dashboardCard}>
            <h2 className={myStyles.projectHeader}><b>{props.projectName}</b></h2>
            <div className={myStyles.progressBarContainer}>
                <span className={myStyles.cardDataFieldText}><b>Número de imágenes: </b>{`${props.totalImages} / ${props.maxImages}`}</span>
                <Progress percent={Math.round(props.totalImages / props.maxImages * 100)} />
            </div>
            <div className={myStyles.progressBarContainer} >
                <span className={myStyles.cardDataFieldText}><b>Número de videos: </b>{`${props.totalVideos} / ${props.maxVideos}`}</span>
                <Progress percent={Math.round(props.totalVideos / props.maxVideos * 100)} />
            </div>
            <div className={myStyles.progressBarContainer}>
                <span className={myStyles.cardDataFieldText}><b>Almacenamiento: </b>{`${props.usedStorage}GB / ${props.maxStorage}GB`}</span>
                <Progress percent={Math.round(props.usedStorage / props.maxStorage * 100)} />
            </div>
            <button onClick={() => navigate("/project", {state:{projectName: props.projectName}})}>Ver proyecto</button>
        </div>
    );
}

export default DashboardCard;