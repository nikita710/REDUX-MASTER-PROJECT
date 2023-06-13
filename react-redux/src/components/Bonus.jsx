import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBonusFunc } from "../actions/actions.js";

const Bonus = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>

        <h3>Amount : $ {amount}</h3>
        <h3>Total Point : $ {points}</h3>

        <button onClick={() => dispatch(incrementBonusFunc())}>
          Increment points +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
