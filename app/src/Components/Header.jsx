const Header = (props) => {
  const { currency, buyStatus } = props;
  const UAH = "UAH";
  return (
    <header className="App-header">
      {currency.map((item, i) => {
        return (
          <div className="header-currency">
            <li key={i}>
              {item?.ccy}:{" "}
              {buyStatus
                ? Number(item?.sale).toFixed(2)
                : Number(item?.buy).toFixed(2)}{" "}
              {UAH}
            </li>
          </div>
        );
      })}
    </header>
  );
};
export default Header;
