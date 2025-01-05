"use client";

import React, { ChangeEvent, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import TipButton from "./TipButton";
import TipCustomInput from "./TipCustomInput";
import { addTip } from "../redux/slices/inputDataSlice";
import { calcTip } from "../redux/slices/resultDataSlice";
import { RootState } from "../redux/store";

const TipSelect = () => {
  const dispatch = useDispatch();

  const tips = [
    { title: "5", amount: "5" },
    { title: "10", amount: "10" },
    { title: "15", amount: "15" },
    { title: "25", amount: "25" },
    { title: "50", amount: "50" },
  ];
  const bill = useSelector((state: RootState) => state.inputData.bill);
  const tip = useSelector((state: RootState) => state.inputData.tip);

  // const [radioValue, setRadioValue] = useState("");
  // const [customValue, setCustomValue] = useState("");

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+$/;
    const inputValue = e.target.value;

    if (regex.test(inputValue)) {
      if (parseInt(inputValue, 10) <= 100) {
        dispatch(addTip(inputValue));
      } else {
        dispatch(addTip(""));

        toast("100 maximum");
      }
    } else {
      dispatch(addTip(""));
      toast("Should be a number");
    }
  };
  const handleCustomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+$/;
    const inputValue = e.target.value;

    if (regex.test(inputValue)) {
      if (parseInt(inputValue, 10) <= 100) {
        dispatch(addTip(inputValue));
      } else {
        dispatch(addTip(""));
        toast("100 maximum");
      }
    } else {
      dispatch(addTip(""));
      toast("Should be a number");
    }
  };

  const tipAmount = useMemo(() => {
    if (bill.length > 0) {
      const tipNumeric = parseInt(tip || "0");
      const billNumeric = parseInt(bill || "0");
      return ((billNumeric * tipNumeric) / 100).toFixed(2);
    }
    return "0";
  }, [tip, bill]);

  useEffect(() => {
    dispatch(calcTip(tipAmount));
  }, [tipAmount, dispatch]);

  return (
    <label
      htmlFor="bill"
      className="flex flex-col gap-2.5 font-bold leading-normal text-primary-200"
    >
      Select Tip %
      <div className="grid grid-cols-3 gap-3.5">
        {tips.map((tip) => {
          return (
            <TipButton
              key={tip.amount}
              value={tip.amount}
              label={tip.title}
              onChange={handleRadioChange}
            />
          );
        })}
        <TipCustomInput value={tip} onChange={handleCustomChange} />
      </div>
    </label>
  );
};

export default TipSelect;
