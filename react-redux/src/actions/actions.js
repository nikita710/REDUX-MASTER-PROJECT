import axios from "axios";

export const increment = "account/increment";
export const decrement = "account/decrement";
export const incrementByAmount = "account/incrementByAmount";
export const userPending = "account/pending";
export const userFulFilled = "account/fulfilled";
export const userRejected = "account/rejected";
export const incrementBonus = "bonus/increment";

export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserPending());
      const { data } = await axios.get(`http://localhost:8080/accounts/${id}`);
      dispatch(getUserFulFilled(data.amount));
    } catch (error) {
      dispatch(getUserRejected(error.message));
    }
  };
}

export function getUserPending() {
  return { type: userPending };
}
export function getUserFulFilled(value) {
  return { type: userFulFilled, payload: value };
}

export function getUserRejected(error) {
  return { type: userRejected, error: error };
}

export function incrementFunc() {
  return { type: increment };
}

export function decrementFunc() {
  return { type: decrement };
}

export function incrementByAmountFunc(value) {
  return { type: incrementByAmount, payload: value };
}

export function incrementBonusFunc(value) {
  return { type: incrementBonus };
}
