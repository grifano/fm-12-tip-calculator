import React, { FC } from "react";

type ResultData = {
  data: string;
  title: string;
};

const ResultData: FC<ResultData> = ({ data, title }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-white">
        {title}
        <span className="block text-sm text-primary-300">/ person</span>
      </p>
      <p className="overflow-auto text-[2rem] font-bold tracking-[0.02em] text-primary-100 xs:text-5xl">
        {"$"}
        {data}
      </p>
    </div>
  );
};

export default ResultData;
