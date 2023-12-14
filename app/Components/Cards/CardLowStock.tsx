import React from "react";

const socialTrafficData = [
  {
    referral: "Facebook",
    visitors: "1,480",
    percentage: "60%",
    color: "red",
  },
  {
    referral: "Facebook",
    visitors: "5,480",
    percentage: "70%",
    color: "emerald",
  },
  {
    referral: "Google",
    visitors: "4,807",
    percentage: "80%",
    color: "purple",
  },
  {
    referral: "Instagram",
    visitors: "3,678",
    percentage: "75%",
    color: "lightBlue",
  },
  {
    referral: "Twitter",
    visitors: "2,645",
    percentage: "30%",
    color: "orange",
  },
];

export default function CardLowStock() {
  return (
    <div className="relative flex flex-col w-full min-w-0 gap-3 mb-6 break-words bg-white rounded shadow-lg">
      <div className="px-4 py-3 mb-0 border-0 rounded-t">
        <div className="flex flex-wrap items-center">
          <div className="relative flex-1 flex-grow w-full max-w-full px-4">
            <h3 className="text-base font-semibold text-blueGray-700">Low Stock Drugs</h3>
          </div>
          <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
            <button className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none" type="button">
              See all
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead className="thead-light">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Referral
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Visitors
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap min-w-140-px"></th>
            </tr>
          </thead>
          <tbody>
            {socialTrafficData.map((data, index) => (
              <tr key={index}>
                <th className="p-4 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  {data.referral}
                </th>
                <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  {data.visitors}
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">{data.percentage}</span>
                    <div className="relative w-full">
                      <div className={`overflow-hidden h-2 text-xs flex rounded bg-${data.color}-200`}>
                        <div
                          style={{ width: data.percentage }}
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${data.color}-500`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
