import myStyles from "../styles/Dashboard.module.scss";
import DashboardHeader from "../components/DashboardHeader";

const DashboardPage = () => {
    return (
        <div className={myStyles.externalContainer}>
            <DashboardHeader />
        </div>
    )
}

export default DashboardPage;