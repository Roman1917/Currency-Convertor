import { TextField } from "@mui/material";
const CurrencyInput = (props) => {
  const { onChangeInput, InputValue, label, errorStatus } = props;
  return (
    <TextField
      variant="filled"
      type="number"
      error={errorStatus}
      label={label}
      color="secondary"
      placeholder="Enter some amount"
      onChange={onChangeInput}
      value={InputValue}
    />
  );
};
export default CurrencyInput;
