import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

import CurrencyInput from "./CurrencyInput";
const FirstField = (props) => {
  const {
    setFirstInputValue,
    setSecondInputValue,
    secondSelectedValue,
    firstSelectedValue,
    setFirstSelectedValue,
    firstInputValue,
    buyStatus,
    currency,
    errorStatus,
    setErrorStatus,
  } = props;

  const label = "Currency1";

  const onChangeFirstInput = (e) => {
    setFirstInputValue(e.target.value);
    if (e.target.value <= 0) {
      setErrorStatus(true);
      setSecondInputValue(0);
    } else {
      setErrorStatus(false);
      setSecondInputValue(
        (
          e.target.value *
          (1 / secondSelectedValue / (1 / firstSelectedValue))
        ).toFixed(2)
      );
    }
  };
  const onChangeFirstSelect = (e) => {
    setFirstSelectedValue(e.target.value);
    setSecondInputValue(
      (
        firstInputValue *
        (1 / secondSelectedValue / (1 / e.target.value))
      ).toFixed(2)
    );
  };

  return (
    <div className="first-currency">
      <Select
        label="Currency"
        variant="filled"
        className="first-select"
        defaultValue="USD"
        onChange={onChangeFirstSelect}
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
        onChangeInput={onChangeFirstInput}
        InputValue={firstInputValue}
        label={label}
        errorStatus={errorStatus}
      />
    </div>
  );
};
export default FirstField;
