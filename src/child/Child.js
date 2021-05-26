
import Balance from "./Balance";
import History from "./History";
import AddTransaction from "./AddTransaction";
const Child = () => {
  return (
    <div className="main-container">
      <div className="ET">Expense Tracker</div>
      <Balance/>
      <History/>
      <AddTransaction></AddTransaction>
    </div>
  );
};

export default Child;
