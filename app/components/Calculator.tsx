"use client";
import { useEffect, useState } from "react";

import ResultScreen from "./ResultScreen";
import TextField from "./TextField";
import TipSelect from "./TipSelect";

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [person, setPerson] = useState("");
  const [tip, setTip] = useState("");
  const [total, setTotal] = useState("");

  const handleBillChange = (newValue: string) => {
    setBill(newValue);
  };
  const handlePersonChange = (newValue: string) => {
    setPerson(newValue);
  };
  const handleTipChange = (newValue: string) => {
    const tipNumeric = parseInt(newValue);
    const billNumeric = parseInt(bill);

    const tipAmount = (billNumeric * tipNumeric) / 100;

    setTip(String(tipAmount.toFixed(2)));
  };
  const getTotal = (bill: number, persons: number, tip: number) => {
    const newTotal = (bill + tip) / persons;

    setTotal(String(newTotal.toFixed(2)));
  };
  const resetAll = () => {
    setBill("");
    setPerson("");
    setTip("");
    setTotal("");
  };

  useEffect(() => {
    const billAsNumber = Number(bill);
    const personAsNumber = Number(person);
    const tipAmount = Number(tip);

    if (billAsNumber > 0 && personAsNumber > 0) {
      getTotal(billAsNumber, personAsNumber, tipAmount);
    }
  }, [bill, person, tip]);

  return (
    <section className="grid w-full max-w-[57.5rem] grid-cols-1 gap-8 rounded-t-3xl bg-white p-8 shadow-light-100 xs:grid-cols-2 xs:gap-12 xs:rounded-3xl">
      <div className="flex flex-col gap-8 xs:gap-10">
        <TextField
          label="Bill"
          placeholder="0"
          value={bill}
          onChange={handleBillChange}
        />
        <TipSelect onChange={handleTipChange} value={tip} />
        <TextField
          label="Number of People"
          placeholder="0"
          value={person}
          iconUrl="/icons/user-icon.svg"
          onChange={handlePersonChange}
        />
      </div>
      <div className="rounded-lg bg-dark-900">
        <ResultScreen
          tipAmount={tip || "0"}
          total={total || "0"}
          onClick={resetAll}
        />
      </div>
    </section>
  );
};

export default Calculator;
