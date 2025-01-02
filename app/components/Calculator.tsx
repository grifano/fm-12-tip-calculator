"use client";
import { useState } from "react";

import TextField from "./TextField";

const Calculator = () => {
  const [bill, setBill] = useState("");

  return (
    <section className="grid w-full max-w-[57.5rem] grid-cols-1 rounded-t-3xl bg-white p-8 shadow-light-100 xs:grid-cols-2 xs:rounded-3xl">
      <div className="">
        <TextField
          label="Bill"
          placeholder="0"
          iconUrl="/icons/user-icon.svg"
          value={bill}
          onChange={(newValue) =>
            setBill(newValue)
          }
        />
      </div>
      <div className="bg-dark-900 rounded-lg">
        Col 2
      </div>
    </section>
  );
};

export default Calculator;
