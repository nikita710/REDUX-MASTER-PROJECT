import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const increment = "account/increment";
const decrement = "account/decrement";
const incrementByAmount = "account/incrementByAmount";
const incrementBonus = "bonus/incrementBonus";

const getUserFulfilled = "account/getUserFulfilled";
const getUserRejected = "account/getUserRejected";
const getUserPending = "account/getUserPending";

//store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),

  applyMiddleware(logger.default, thunk.default)
);

const history = [];

//reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case increment:
      return { amount: state.amount + 1 };
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    case getUserFulfilled:
      return { amount: action.payload };
    case getUserRejected:
      return { ...state, error: action.error };
    case getUserPending:
      return { ...state, pending: true };
    default:
      return state;
  }

  // if (action.type === increment) {
  //   return { amount: state.amount + 1 };
  // }
  // if (action.type === decrement) {
  //   return { amount: state.amount - 1 };
  // }
  // if (action.type === incrementByAmount) {
  //   return { amount: state.amount + action.payload };
  // }
  // return state;
}

function bonusReducer(state = { point: 1 }, action) {
  switch (action.type) {
    case incrementBonus:
      return { point: state.point + 1 };
    case incrementByAmount:
      if (action.payload >= 100) return { point: state.point + 1 };
    default:
      return state;
  }
}

//global state
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

//Actions Creators
// API Call
function getUser(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(getUserPendingFunc());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      return dispatch(getUserFulfilledFunc(data.amount));
    } catch (error) {
      return dispatch(getUserRejectedFunc(error.message));
    }
  };
}
function getUserFulfilledFunc(value) {
  return { type: getUserFulfilled, payload: value };
}
function getUserRejectedFunc(error) {
  return { type: getUserRejected, error: error };
}
function getUserPendingFunc() {
  return { type: getUserPending };
}

function incrementFunc() {
  return { type: increment };
}
function decrementFunc() {
  return { type: decrement };
}
function incrementByAmountFunc(amount) {
  return { type: incrementByAmount, payload: amount };
}
function incrementBonusFunc() {
  return { type: incrementBonus };
}

// store.dispatch(incrementBonusFunc());
// store.dispatch(incrementByAmountFunc(501));
store.dispatch(getUser(2));

// setInterval(() => {
//   //action
//   //   store.dispatch({ type: "decrement" });
//   store.dispatch(incrementByAmount(1));
// }, 3000);
