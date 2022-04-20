import myStyles from "../styles/Dashboard.module.scss";
import profilePic from "../images/profilePic.jpg"

const DashboardHeader = () => {
    return (
        <div className={myStyles.horizontalContainer}>
            <div className={myStyles.verticalContainer}>
                <span><b>User: </b><span>Jeff Parker</span></span>
                <span><b>Membership type: </b><span>Corporate</span></span>
                <span><b>Creation date: </b><span>20/12/2021</span></span>
            </div>
            <div className={myStyles.horizontalContainer}>
                <button>Manage account</button>
                <img src={profilePic}></img>
            </div>
        </div>
    );
}

export default DashboardHeader;