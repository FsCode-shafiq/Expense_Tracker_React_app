const Balance=()=>{
    return(
        <div>
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
        </div>
    );
}
export default Balance;