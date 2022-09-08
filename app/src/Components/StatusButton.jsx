import { Button } from "@mui/material";
const StatusButton = (props) => {
  const { buyStatus, setBuyStatus, setFirstInputValue, setSecondInputValue } =
    props;
  const onChangeSetBuyStatus = () => {
    setBuyStatus(!props.buyStatus);
    setFirstInputValue(0);
    setSecondInputValue(0);
  };
  return (
    <div className="button-wrapper">
      <p>Button for diference courses of currencies. For buy and sale</p>
      <Button
        color={buyStatus ? "error" : "success"}
        variant="contained"
        className="buy-sale-button"
        onClick={onChangeSetBuyStatus}
      >
        {buyStatus ? <p>SALE</p> : <p>BUY</p>}
      </Button>
    </div>
  );
};

export default StatusButton;
