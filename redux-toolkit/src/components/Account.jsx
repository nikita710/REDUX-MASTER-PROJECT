import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getAccount,
  increment,
  incrementByAmount,
} from "../slices/accountSlice";

const Account = () => {
  //   const [account, setAccount] = useState({ balance: 0 });

  //   const increment = () => {
  //     console.log("Balance : ", account.balance);
  //     return setAccount({ balance: account.balance + 1 });
  //   };

  //   const decrement = () => {
  //     console.log("Balance : ", account.balance);
  //     return setAccount({ balance: account.balance - 1 });
  //   };

  //   const incrementByAmount = (value) => {
  //     console.log("Balance : ", account.balance);
  //     return setAccount({ balance: account.balance + value });
  //   };

  const [value, setValue] = useState(0);
  const balance = useSelector((state) => state.account.balance);

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${balance}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>

        <input
          type="number"
          onChange={(e) => setValue(+e.target.value)}
        ></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By +{value}
        </button>
        <button onClick={() => dispatch(getAccount(1))}>
          Get User Balance
        </button>
      </div>
    </div>
  );
};

export default Account;
