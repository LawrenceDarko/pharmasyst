import React, { FC } from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";


interface CardStatsProps {
  statSubtitle?: string;
  statTitle?: string;
  statArrow?: "up" | "down";
  statPercent?: string;
  statPercentColor?: string;
  statDescripiron?: string;
  statIconName?: IconType | any;
  statIconColor?: string;
}

const CardStats: FC<CardStatsProps> = ({
  statSubtitle = "Traffic",
  statTitle = "350,897",
  statArrow = "up",
  statPercent = "3.48",
  statPercentColor = "text-emerald-500",
  statDescripiron = "Since last month",
  statIconName: Icon,
  statIconColor = "bg-red-500",
}) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-[#F8FAFC] rounded shadow-lg xl:mb-3">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
              <h5 className="text-xs font-normal text-gray-500 uppercase text-blueGray-400">
                {statSubtitle}
              </h5>
              <span className="text-xl font-semibold text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative flex-initial w-auto pl-4">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {/* <i className={statIconName}></i> */}
                <Icon size={20} className="text-white"/>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-blueGray-400">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
};


export default CardStats;
