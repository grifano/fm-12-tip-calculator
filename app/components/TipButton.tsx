import React, { ChangeEvent, FC } from "react";

type TipButton = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TipButton: FC<TipButton> = ({ label, value, onChange }) => {
  return (
    <label
      htmlFor={label}
      className="flex-center relative min-h-12 rounded-md bg-dark-900 text-2xl leading-none text-white"
    >
      <input
        type="radio"
        name="tip"
        id={label}
        value={value}
        className="peer sr-only"
        onChange={onChange}
      />
      <span className="absolute inset-0 z-0 cursor-pointer rounded-md bg-transparent transition-colors peer-checked:bg-primary-100 peer-focus-within:bg-primary-100 peer-hover:bg-primary-400"></span>
      <span className="pointer-events-none relative z-10 cursor-pointer text-inherit peer-checked:text-dark-900 peer-focus-within:text-dark-900 peer-hover:text-dark-900">
        {label}%
      </span>
    </label>
  );
};

export default TipButton;
