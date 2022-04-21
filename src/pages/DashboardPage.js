import myStyles from "../styles/Dashboard.module.scss";
import DashboardHeader from "../components/DashboardHeader";
import DashboardMain from "../components/DashboardMain";

const DashboardPage = () => {
    return (
        <div className={myStyles.externalContainer}>
            <DashboardHeader />
            <DashboardMain />
        </div>
    )
}

export default DashboardPage;