import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="ET">Expense Tracker</div>
        <div className="YB">
          YOUR BALANCE:
          <br />
          <span>$</span>
          <span>260</span>
        </div>
        <br />
        <div className="in-ex">
          <div className="In">
            Income:
            <span className="in-am"> $ 500</span>
          </div>
          <div className="Ex">
            Expense:
            <span className="ex-am"> $ 500</span>
          </div>
        </div>
        <h3 className="his">History</h3>
        <div className="his-lies">
          <li>
            <span className="discription">Cash</span>
            <span className="amount">$ 600</span>
          </li>
          <li>
            <span className="discription">Cash</span>
            <span className="amount">$ 600</span>
          </li>
        </div>
        <div className="New-add">Add new transaction</div>
        <div className='form-div'>
          <form>
            <label>Enter Description</label>
            <br />
            <input type="text"></input>
            <br />
            <label>Enter Amount</label>
            <br />
            <input type="text"></input><br />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
