import myStyles from "../styles/Dashboard.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import DashboardCard from "./DashboardCard";
import AddProjectModal from "./AddProjectModal";

const DashboardMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const projectList = useSelector((state) => state.projectList.value);

    return (
        <>
            <div className={myStyles.horizontalContainer}>
                    <div className={myStyles.verticalContainer}>
                        <span className={myStyles.dataFieldsText}><b>Mes actual: </b>Febrero</span>
                        <span className={myStyles.dataFieldsText}><b>Cuota básica: </b>$25</span>
                        <span className={myStyles.dataFieldsText}><b>Consumo adicional: </b>$6</span>
                    </div>
                    <div className={myStyles.verticalContainer} style={{alignItems: "flex-end"}}>
                        <span className={myStyles.dataFieldsText}><b>Número de proyectos: </b>3</span>
                        <span className={myStyles.dataFieldsText}><b>Número total de imágenes: </b>1500</span>
                        <span className={myStyles.dataFieldsText}><b>Número total de videos: </b>15</span>
                        <span className={myStyles.dataFieldsText}><b>Almacenamiento utilizado: </b>3.5 GB</span>
                    </div>
            </div>
            <div className={myStyles.cardsContainer}>
                {
                    projectList.map((project) => {
                        return <DashboardCard projectName={project.projectName} 
                                                totalImages={project.totalImages} 
                                                totalVideos={project.totalVideos} 
                                                usedStorage={project.usedStorage}
                                                maxImages={project.maxImages}
                                                maxVideos={project.maxVideos}
                                                maxStorage={project.maxStorage} />
                    })
                } 
                <div className={myStyles.newCard} onClick={() => setIsModalOpen(true)}>
                    <span>+</span>
                </div>
            </div>
            { isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} /> }
        </>
    );
}

export default DashboardMain