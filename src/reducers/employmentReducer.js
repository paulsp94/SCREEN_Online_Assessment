const employmentReducer = (state = { n: 0, p: 0, employment: 0 }, action) => {
  switch (action.type) {
    case 'SET_N':
      return Object.assign({}, state, {
        n: action.n
      });
    case 'SET_P':
      return Object.assign({}, state, {
        p: action.p
      });
    case 'CALCULATE_EMPLOYMENT':
      return Object.assign({}, state, {
        employment: 1 + state.n / state.p
      });
    default:
      return state;
  }
};

export default employmentReducer;
