"use client";

import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

import TipButton from "./TipButton";
import TipCustomInput from "./TipCustomInput";

type TipAmount = {
  onChange: (value: string) => void;
};

const TipSelect: FC<TipAmount> = ({ onChange }) => {
  const tips = [
    { title: "5", amount: "5" },
    { title: "10", amount: "10" },
    { title: "15", amount: "15" },
    { title: "25", amount: "25" },
    { title: "50", amount: "50" },
  ];
  const [radioValue, setRadioValue] = useState("");
  const [customValue, setCustomValue] = useState("");

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+$/;
    const inputValue = e.target.value;

    if (regex.test(inputValue)) {
      if (parseInt(inputValue, 10) <= 100) {
        setRadioValue(inputValue);
      } else {
        setRadioValue("");
        toast("100 maximum");
      }
    } else {
      setRadioValue("");
      toast("Should be a number");
    }
  };
  const handleCustomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+$/;
    const inputValue = e.target.value;

    if (regex.test(inputValue)) {
      if (parseInt(inputValue, 10) <= 100) {
        setCustomValue(inputValue);
      } else {
        setCustomValue("");
        toast("100 maximum");
      }
    } else {
      setCustomValue("");
      toast("Should be a number");
    }
  };

  useEffect(() => {
    if (radioValue) {
      onChange(radioValue);
    }
    if (customValue) {
      onChange(customValue);
    }
  }, [radioValue, customValue, onChange]);

  return (
    <label
      htmlFor="bill"
      className="flex flex-col gap-2.5 font-bold leading-normal text-primary-200"
    >
      Select Tip %
      <div className="grid grid-cols-3 gap-[0.875rem]">
        {tips.map((tip, index) => {
          return (
            <TipButton
              key={tip.amount}
              value={tip.amount}
              label={tip.title}
              tabindex={index} // TODO: Need to think about correct implementation
              onChange={handleRadioChange}
            />
          );
        })}
        <TipCustomInput value={customValue} onChange={handleCustomChange} />
      </div>
    </label>
  );
};

export default TipSelect;
