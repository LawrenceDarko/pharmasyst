
import { FaPlus } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa";
import DashboardStats from "../../Components/Cards/DashboardStats";
import TableCompTwo from "../../Components/Tables/TableCompTwo";
import CardSocialTraffic from "../../Components/Cards/CardLowStock";
import TablesCard from "../../Components/Cards/TablesCard";

export default function Dashboard() {
return (
    <div className="flex flex-col px-3">
        <DashboardStats />
        <TablesCard />
    </div>
)
}
