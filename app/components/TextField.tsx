"use client";

import Image from "next/image";
import { FC, ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

type TextField = {
  label: string;
  errorMsg?: string;
  placeholder: string | "0";
  iconUrl?: string;
  value: string;
  onChange: (value: string) => void;
};

const TextField: FC<TextField> = ({
  label,
  errorMsg,
  placeholder,
  iconUrl,
  value,
  onChange,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setIsTouched(true);

    // Allow only positive numbers using a regex
    if (/^[1-9]\d*$/.test(newValue)) {
      onChange(newValue);
      setIsValid(true); // Optional: set valid state
    } else {
      toast.error("Can't be a 0", {
        className: "toastMsg",
      });
      setIsValid(false); // Optional: handle invalid state
      onChange("");
    }
  };
  return (
    <label
      htmlFor={label}
      className="flex flex-col gap-2.5 font-bold leading-normal text-primary-200"
    >
      <div className="flex items-center justify-between">
        <span>{label}</span>
        {!isValid && isTouched && (
          <span className="text-red-400">{errorMsg}</span>
        )}
      </div>
      <div
        className={`flex-center rounded-md bg-primary-900 px-5 outline-none outline-2 -outline-offset-2 transition-[outline] has-[input:focus-within]:outline-primary-100 ${!isValid && isTouched && "outline-red-300 has-[input:focus-within]:outline-red-300"}`}
      >
        <div className="shrink-0 select-none text-2xl text-primary-700">
          {iconUrl ? (
            <Image src={iconUrl} alt="icon" width={16} height={16} />
          ) : (
            "$"
          )}
        </div>
        <input
          id={label}
          name={label}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="h-12 w-full grow bg-transparent text-right text-2xl leading-none text-dark-900 placeholder:text-primary-700 focus:outline focus:outline-0"
        />
      </div>
    </label>
  );
};

export default TextField;
