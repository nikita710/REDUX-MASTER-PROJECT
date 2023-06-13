const state = { accounts: { amount: 1 }, bonus: { point: 1 } };
const newState = {
  accounts: { ...state.accounts },
  bonus: { point: state.bonus.point + 1 },
};

// const { accounts, bonus } = state;
// console.log(bonus.point);

console.log(state, newState);
state.accounts.amount = 100;
console.log(state, newState);
