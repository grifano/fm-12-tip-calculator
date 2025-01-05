import React, { ChangeEvent, FC } from "react";

type TipCustomInput = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TipCustomInput: FC<TipCustomInput> = ({ value, onChange }) => {
  return (
    <input
      id="custom"
      name="custom"
      type="text"
      placeholder="Custom"
      value={value}
      onChange={onChange}
      className="min-h-12 rounded-md bg-primary-900 pr-2 text-right text-2xl leading-none text-dark-900 placeholder:-mr-2 placeholder:text-center placeholder:text-primary-600 focus:outline-2 focus:outline-primary-100"
    />
  );
};

export default TipCustomInput;
