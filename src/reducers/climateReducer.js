const metricReducer = (
  state = { energyBalance: 0, emissionReduction: 0 },
  action
) => {
  switch (action.type) {
    case 'SET_ENERGY_BALANCE':
      return Object.assign({}, state, {
        energyBalance: action.energyBalance
      });
    case 'SET_EMISSION_REDUCTION':
      return Object.assign({}, state, {
        emissionReduction: action.emissionReduction
      });
    default:
      return state;
  }
};

export default metricReducer;
