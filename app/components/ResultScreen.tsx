import { useDispatch, useSelector } from "react-redux";

import ResultData from "./ResultData";
import { resetInputData } from "../redux/slices/inputDataSlice";
import { resetResultData } from "../redux/slices/resultDataSlice";
import { RootState } from "../redux/store";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.result);

  const handleClick = () => {
    dispatch(resetInputData());
    dispatch(resetResultData());
  };
  return (
    <div className="flex h-full flex-col gap-8 p-6 xs:p-10">
      <h2 className="sr-only">Result screen</h2>
      <div className="flex flex-col gap-5 xs:gap-8">
        <ResultData title="Tip Amount" data={result.tipAmount} />
        <ResultData title="Total" data={result.totalAmount} />
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="mt-auto min-h-12 w-full rounded-md bg-primary-100 text-center text-xl font-bold uppercase leading-none text-dark-900 outline-none transition-colors lg:focus-within:bg-primary-400 lg:hover:bg-primary-400"
      >
        Reset
      </button>
    </div>
  );
};

export default ResultScreen;
