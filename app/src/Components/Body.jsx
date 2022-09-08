import { useState } from "react";

import FirstField from "./FirstField";
import SecondField from "./SecondField";
import StatusButton from "./StatusButton";

const Body = (props) => {
  const { currency, buyStatus, setBuyStatus } = props;
  const [firstSelectedValue, setFirstSelectedValue] = useState("");
  const [secondSelectedValue, setSecondSelectedValue] = useState("");
  const [firstInputValue, setFirstInputValue] = useState(0);
  const [secondInputValue, setSecondInputValue] = useState(0);
  const [errorStatus, setErrorStatus] = useState(false);

  return (
    <>
      <section className="main">
        <div className="main-block">
          <FirstField
            currency={currency}
            buyStatus={buyStatus}
            setFirstInputValue={setFirstInputValue}
            setSecondInputValue={setSecondInputValue}
            secondSelectedValue={secondSelectedValue}
            firstSelectedValue={firstSelectedValue}
            setFirstSelectedValue={setFirstSelectedValue}
            firstInputValue={firstInputValue}
            errorStatus={errorStatus}
            setErrorStatus={setErrorStatus}
          />

          <SecondField
            setSecondSelectedValue={setSecondSelectedValue}
            setFirstInputValue={setFirstInputValue}
            secondInputValue={secondInputValue}
            firstSelectedValue={firstSelectedValue}
            setSecondInputValue={setSecondInputValue}
            secondSelectedValue={secondSelectedValue}
            currency={currency}
            buyStatus={buyStatus}
            errorStatus={errorStatus}
            setErrorStatus={setErrorStatus}
          />
        </div>
      </section>
      <StatusButton
        buyStatus={buyStatus}
        setBuyStatus={setBuyStatus}
        setFirstInputValue={setFirstInputValue}
        setSecondInputValue={setSecondInputValue}
      />
    </>
  );
};

export default Body;
