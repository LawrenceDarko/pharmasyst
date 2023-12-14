import CardStats from "./CardStats"
import { BsHourglassSplit } from "react-icons/bs";
import { RxTimer } from "react-icons/rx";
import { MdOutlineDone } from "react-icons/md";
import CardLowStock from "./CardLowStock";
import CardExpiry from "./CardExpiry";
import CardClientSchedules from "./CardClientSchedules";

const TablesCard = () => {
    return (
        <div>
            <div className="relative w-full pt-5 pb-10 bg-blueGray-800">
                <div className="w-full px-4 mx-auto md:px-0">
                    <div className="w-full">
                        {/* Card stats */}
                        <div className="flex flex-wrap w-full">
                            <div className="w-full px-4 lg:w-6/12 xl:w-1/3">
                                <CardClientSchedules />
                            </div>
                            <div className="w-full px-4 lg:w-6/12 xl:w-1/3">
                                <CardLowStock />
                            </div>
                            <div className="w-full px-4 lg:w-6/12 xl:w-1/3">
                                <CardExpiry />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TablesCard