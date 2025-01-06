"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "./Container";
import ResultScreen from "./ResultScreen";
import TextField from "./TextField";
import TipSelect from "./TipSelect";
import { addBill, addPersons } from "../redux/slices/inputDataSlice";
import { calcTotal } from "../redux/slices/resultDataSlice";
import { RootState } from "../redux/store";

const Calculator = () => {
  const dispatch = useDispatch();

  const bill = useSelector((state: RootState) => state.inputData.bill);
  const tip = useSelector((state: RootState) => state.inputData.tip);
  const person = useSelector((state: RootState) => state.inputData.persons);

  const handleBillChange = (newValue: string) => {
    dispatch(addBill(newValue));
  };
  const handlePersonChange = (newValue: string) => {
    // Allow intermediate states like an empty string
    if (/^\d*$/.test(newValue)) {
      dispatch(addPersons(newValue));
    }
  };

  const total = useMemo(() => {
    const billAsNumber = Number(bill);
    const personAsNumber = Number(person);
    const tipAsNumber = Number(tip);

    if (billAsNumber > 0 && personAsNumber > 0) {
      return String(((billAsNumber + tipAsNumber) / personAsNumber).toFixed(2));
    }
    return "0";
  }, [bill, person, tip]);

  useEffect(() => {
    dispatch(calcTotal(total));
  }, [total, dispatch]);

  return (
    <Container>
      <section className="grid w-full grid-cols-1 gap-8 rounded-t-3xl bg-white p-8 shadow-light-100 xs:rounded-3xl md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-8 xs:gap-10">
          <TextField
            label="Bill"
            placeholder="0"
            value={bill}
            onChange={handleBillChange}
          />
          <TipSelect />
          <TextField
            label="Number of People"
            placeholder="0"
            value={person}
            errorMsg={"Can't be zero"}
            iconUrl="/icons/user-icon.svg"
            onChange={handlePersonChange}
          />
        </div>
        <div className="flex flex-col rounded-lg bg-dark-900">
          <ResultScreen />
        </div>
      </section>
    </Container>
  );
};

export default Calculator;
