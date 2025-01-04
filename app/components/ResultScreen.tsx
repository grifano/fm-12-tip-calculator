import { FC } from "react";

import ResultData from "./ResultData";

type ResultScreen = {
  tipAmount: string;
  total: string;
  onClick: () => void;
};

const ResultScreen: FC<ResultScreen> = ({ tipAmount, total, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className="p-6 xs:p-10">
      <h2 className="sr-only">Result screen</h2>
      <div className="flex flex-col gap-5">
        <ResultData title="Tip Amount" data={tipAmount} />
        <ResultData title="Total" data={total} />
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="text-co mt-8 min-h-12 w-full rounded-md bg-primary-100 text-center text-xl font-bold uppercase leading-none text-dark-900 outline-none transition-colors lg:focus-within:bg-primary-400 lg:hover:bg-primary-400"
      >
        Reset
      </button>
    </div>
  );
};

export default ResultScreen;
