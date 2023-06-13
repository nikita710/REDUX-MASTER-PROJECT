import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementFunc,
  getUserAccount,
  incrementByAmountFunc,
  incrementFunc,
} from "../actions/actions.js";

const Account = () => {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>

        <h3>Amount : $ {amount}</h3>
        <h3>Points : $ {points}</h3>

        <button onClick={() => dispatch(incrementFunc())}>Increment +</button>
        <button onClick={() => dispatch(decrementFunc())}>Decrement -</button>

        <input
          name="inc-by"
          type="number"
          onChange={(e) => setValue(+e.target.value)}
        />

        <button onClick={() => dispatch(incrementByAmountFunc(value))}>
          Increment By Amount ${value}
        </button>

        <button onClick={() => dispatch(getUserAccount(1))}>Init Amount</button>
      </div>
    </div>
  );
};

export default Account;
