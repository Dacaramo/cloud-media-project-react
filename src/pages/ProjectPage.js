import { useLocation } from "react-router-dom";

const ProjectPage = () => {
    const location = useLocation();

    return (
        <span><b>Nombre: </b>{location.state.projectName}</span>
    );
}

export default ProjectPage;