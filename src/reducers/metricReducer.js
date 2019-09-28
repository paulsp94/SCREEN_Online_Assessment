const metricReducer = (
  state = { metric: '', additionalParameter: '' },
  action
) => {
  switch (action.type) {
    case 'SET_METRIC':
      return Object.assign({}, state, {
        metric: action.metric
      });
    case 'SET_ADDITIONAL_PARAMETER':
      return Object.assign({}, state, {
        additionalParameter: action.additionalParameter
      });
    default:
      return state;
  }
};

export default metricReducer;
