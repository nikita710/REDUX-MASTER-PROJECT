import { incrementBonus, incrementByAmount } from "../actions/actions.js";

export function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incrementBonus:
      return { points: state.points + 1 };
    case incrementByAmount:
      if (action.payload >= 10) {
        return { points: state.points + 1 };
      }
    default:
      return state;
  }
}
