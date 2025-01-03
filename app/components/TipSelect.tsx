import React, { ChangeEvent, FC } from "react";
import { toast } from "react-toastify";

import TipButton from "./TipButton";

type TipAmount = {
  value: string;
  onChange: (value: string) => void;
};

const TipSelect: FC<TipAmount> = ({ value, onChange }) => {
  const tips = [
    { title: "5", amount: "5" },
    { title: "10", amount: "10" },
    { title: "15", amount: "15" },
    { title: "25", amount: "25" },
    { title: "50", amount: "50" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+$/;
    const inputValue = e.target.value;

    if (regex.test(inputValue)) {
      if (parseInt(inputValue, 10) <= 100) {
        onChange(inputValue);
      } else {
        onChange("");
        toast("100 maximum");
      }
    } else {
      onChange("");
      toast("Should be a number");
    }
  };

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
              onChange={handleChange}
            />
          );
        })}
        <input
          id="custom"
          name="custoom"
          type="text"
          placeholder="Custom"
          value={value}
          onChange={handleChange}
          className="placeholder:text-primary-600 min-h-12 rounded-md bg-primary-900 pr-2 text-right text-2xl leading-none text-dark-900 placeholder:-mr-2 placeholder:text-center focus:outline-2 focus:outline-primary-100"
        />
      </div>
    </label>
  );
};

export default TipSelect;
