import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import CurrencyInput from "./CurrencyInput";
const SecondField = (props) => {
  const {
    setSecondSelectedValue,
    setFirstInputValue,
    secondInputValue,
    firstSelectedValue,
    setSecondInputValue,
    secondSelectedValue,
    currency,
    buyStatus,
    errorStatus,
    setErrorStatus,
  } = props;
  const label = "Currency2";

  const onChangeSecondInput = (e) => {
    setSecondInputValue(e.target.value);

    if (e.target.value <= 0) {
      setErrorStatus(true);
      setFirstInputValue(0);
    } else {
      setErrorStatus(false);
      setFirstInputValue(
        (
          e.target.value *
          (1 / firstSelectedValue / (1 / secondSelectedValue))
        ).toFixed(2)
      );
    }
  };

  const onChangeSecondSelect = (e) => {
    setSecondSelectedValue(e.target.value);
    setFirstInputValue(
      (
        secondInputValue *
        (1 / firstSelectedValue / (1 / e.target.value))
      ).toFixed(2)
    );
  };

  return (
    <div className="second-currency">
      <Select
        label="Currency"
        variant="filled"
        className="second-select"
        defaultValue="RUR"
        onChange={onChangeSecondSelect}
      >
        {currency.map((item, i) => {
          return (
            <MenuItem value={buyStatus ? item?.sale : item?.buy} key={i}>
              {item?.ccy}
            </MenuItem>
          );
        })}
      </Select>
      <CurrencyInput
        onChangeInput={onChangeSecondInput}
        label={label}
        InputValue={secondInputValue}
        errorStatus={errorStatus}
      />
    </div>
  );
};
export default SecondField;
