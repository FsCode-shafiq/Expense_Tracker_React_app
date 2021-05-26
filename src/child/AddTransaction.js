import Reducer from "./reducer";
import { useForm } from "react-hook-form";
import { useContext, useReducer } from "react";
import expenseContext from "./Context";
const AddTransaction =()=>{
    const { register, handleSubmit } = useForm({
        mode: "all",
      });
    
      let listData = useContext(expenseContext);
      let [state, dispatch] = useReducer(Reducer, []);
      const show = () => {
        console.log(listData);
      };
      const submitt = (data) => {
        dispatch(data);
        listData = state;
        show();
      };
    return(<div>
        <div className="New-add">Add new transaction</div>
      <div className="form-div">
        <form onSubmit={handleSubmit(submitt)} className="main-form">
          <label>Enter Description</label>
          <br />
          <input
            className="form-input"
            type="text"
            placeholder="Enter Discription"
            {...register("Discription")}
          ></input>
          <br />
          <label>
            Enter Amount
            <br />
            "Negative-expense, positive-income"
          </label>
          <br />
          <input
            className="form-input"
            type="text"
            placeholder="Enter Amount"
            {...register("amount")}
          ></input>
          <br />
          <div className="button-div">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>);
}

export default AddTransaction;