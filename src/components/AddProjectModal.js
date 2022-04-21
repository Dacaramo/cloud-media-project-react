import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { addProject } from "../features/projectList";

const AddProjectModal = ({onClose}) => {
    const [projectName, setProjectName] = useState("");
    const [maxImages, setMaxImages] = useState(0);
    const [maxVideos, setMaxVideos] = useState(0);
    const [maxStorage, setMaxStorage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const project = {
        projectName: projectName,
        totalImages: 0, 
        totalVideos: 0, 
        usedStorage: 0,
        maxImages: maxImages,
        maxVideos: maxVideos,
        maxStorage: maxStorage
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        dispatch(addProject(project));
        console.log(project);
        setIsLoading(false);
        onClose();
    };

    return createPortal(
        <div className="modal-background">
            <form className="modal-container" onSubmit={handleSubmit}>
                <span className="close-modal-btn" onClick={onClose}>&times;</span>
                <h2>Crear nuevo proyecto</h2>
                <span>Al dar click en <i><b>Crear proyecto</b></i>, este se guardará inmediatamente en la base de datos</span>
                <div className="horizontal-container">
                    <div>
                        <label htmlFor="nameInput">Nombre</label><br />
                        <input type="text" id="nameInput" placeholder="Ingrese el nombre" required onChange={(e) => setProjectName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="maxImagesInput">Máximo de imágenes</label><br />
                        <input type="number" id="maxImagesInput" placeholder="Ingrese un número" required onChange={(e) => setMaxImages(parseInt(e.target.value))} />
                    </div>
                </div>
                <div className="horizontal-container">
                    <div>
                        <label htmlFor="maxVideosInput">Máximo de videos</label><br />
                        <input type="number" id="maxVideosInput" placeholder="Ingrese un número" required onChange={(e) => setMaxVideos(parseInt(e.target.value))} />
                    </div>
                    <div>
                        <label htmlFor="maxStorageInput">Límite de almacenamiento</label><br />
                        <input type="number" id="maxStorageInput" placeholder="Ingrese un número" required onChange={(e) => setMaxStorage(parseFloat(e.target.value))} />
                    </div>
                </div>
                <button type="submit" disabled={isLoading}>Crear proyecto</button>
            </form>
        </div>,
        document.getElementById("portal")
    );
}

export default AddProjectModal;