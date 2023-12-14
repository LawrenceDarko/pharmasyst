import CardStats from "./CardStats"
import { BsHourglassSplit } from "react-icons/bs";
import { RxTimer } from "react-icons/rx";
import { MdOutlineDone } from "react-icons/md";

const DashboardStats = () => {
    return (
        <div>
            <div className="relative w-full pt-5 pb-12 bg-blueGray-800">
                <div className="w-full px-4 mx-auto md:px-0">
                <div className="w-full">
                    {/* Card stats */}
                    <div className="flex flex-wrap w-full">
                    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                        <CardStats
                            statSubtitle="Scheduled"
                            statTitle="154"
                            statArrow="up"
                            statPercent="3.48"
                            statPercentColor="text-emerald-500"
                            statDescripiron="Since last month"
                            statIconName={BsHourglassSplit}
                            statIconColor="bg-red-500"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                        <CardStats
                            statSubtitle="Waiting"
                            statTitle="32"
                            statArrow="down"
                            statPercent="3.48"
                            statPercentColor="text-red-500"
                            statDescripiron="Since last week"
                            statIconName={BsHourglassSplit}
                            statIconColor="bg-orange-500"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                        <CardStats
                            statSubtitle="In Progress"
                            statTitle="2"
                            statArrow="down"
                            statPercent="1.10"
                            statPercentColor="text-orange-500"
                            statDescripiron="Since yesterday"
                            statIconName={RxTimer}
                            statIconColor="bg-pink-500"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                        <CardStats
                            statSubtitle="Done"
                            statTitle="12"
                            statArrow="up"
                            statPercent="12"
                            statPercentColor="text-emerald-500"
                            statDescripiron="Since last month"
                            statIconName={MdOutlineDone}
                            statIconColor="bg-blue-400"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardStats