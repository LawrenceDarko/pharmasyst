import React from "react";

interface ILoadingScreen {
  removeStat?: boolean;
}

const LoadingScreen: React.FC<ILoadingScreen> = ({ removeStat }) => {
  return (
    <div>
      {!removeStat && (
        <div className="inline-flex bg-white rounded gap-5 mt-4 border border-[#E2E8F0] p-3">
          <div
            className={`min-w-[250px] flex-col flex justify-center px-4 py-5 rounded  bg-[#F1F5F9] h-[116px]`}
          >
            <div className="bg-[#CBD5E1] shine w-[80%] h-[7px] rounded-full"></div>
            <div className="bg-[#CBD5E1] shine mt-3 w-[80%] h-[7px] rounded-full"></div>
          </div>
          <div
            className={`min-w-[250px] flex-col flex justify-center px-4 py-5 rounded  bg-[#F1F5F9] h-[116px]`}
          >
            <div className="bg-[#CBD5E1] shine w-[80%] h-[7px] rounded-full"></div>
            <div className="bg-[#CBD5E1] shine mt-3 w-[80%] h-[7px] rounded-full"></div>
          </div>
          <div
            className={`min-w-[250px] flex-col flex justify-center px-4 py-5 rounded  bg-[#F1F5F9] h-[116px]`}
          >
            <div className="bg-[#CBD5E1] shine w-[80%] h-[7px] rounded-full"></div>
            <div className="bg-[#CBD5E1] shine mt-3 w-[80%] h-[7px] rounded-full"></div>
          </div>
          <div
            className={`min-w-[250px] flex-col flex justify-center px-4 py-5 rounded  bg-[#F1F5F9] h-[116px]`}
          >
            <div className="bg-[#CBD5E1] shine w-[80%] h-[7px] rounded-full"></div>
            <div className="bg-[#CBD5E1] shine mt-3 w-[80%] h-[7px] rounded-full"></div>
          </div>
        </div>
      )}

      <div className="mt-12">
        <div className="bg-[#F1F5F9] flex justify-between py-4 px-7">
          <div className="bg-[#CBD5E1] shine w-[111px] h-[7px] rounded-full"></div>
          <div className="bg-[#CBD5E1] shine w-[111px] h-[7px] rounded-full"></div>
          <div className="bg-[#CBD5E1] shine w-[200px] h-[7px] rounded-full"></div>
          <div className="bg-[#CBD5E1] shine w-[111px] h-[7px] rounded-full"></div>
          <div className="bg-[#CBD5E1] shine w-[111px] h-[7px] rounded-full"></div>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className=" flex justify-between py-7 px-7">
            <div className="bg-[#CBD5E1] shine w-[111px] h-[7px] rounded-full"></div>
            <div className="bg-[#CBD5E1] shine w-[111px] h-[7px] rounded-full"></div>
            <div className="bg-[#CBD5E1] shine w-[200px] h-[7px] rounded-full"></div>
            <div className="bg-[#CBD5E1] shine w-[111px] h-[7px] rounded-full"></div>
            <div className="bg-[#CBD5E1] shine w-[111px] h-[7px] rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
