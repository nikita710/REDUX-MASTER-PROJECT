import {
  decrement,
  increment,
  incrementByAmount,
  userFulFilled,
  userPending,
  userRejected,
} from "../actions/actions.js";

export function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case increment:
      return { amount: state.amount + 1 };
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    case userFulFilled:
      return { amount: action.payload, pending: false };
    case userRejected:
      return { ...state, error: action.error, pending: false };
    case userPending:
      return { ...state, pending: true };
    default:
      return state;
  }
}
