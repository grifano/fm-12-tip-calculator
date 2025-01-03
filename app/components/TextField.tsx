"use client";

import Image from "next/image";
import { FC, ChangeEvent } from "react";

type TextField = {
  label: string;
  placeholder: string | "0";
  iconUrl?: string;
  value: string;
  onChange: (value: string) => void;
};

const TextField: FC<TextField> = ({
  label,
  placeholder,
  iconUrl,
  value,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <label
      htmlFor="bill"
      className="flex flex-col gap-2.5 font-bold leading-normal text-primary-200"
    >
      {label}
      <div className="flex-center rounded-md bg-primary-900 px-5 outline-none outline outline-2 -outline-offset-2 transition-[outline] has-[input:focus-within]:outline-primary-100">
        <div className="shrink-0 select-none text-2xl text-primary-700">
          {iconUrl ? (
            <Image src={iconUrl} alt="icon" width={16} height={16} />
          ) : (
            "$"
          )}
        </div>
        <input
          id="bill"
          name="bill"
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
