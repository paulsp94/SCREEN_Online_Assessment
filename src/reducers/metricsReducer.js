const metricsReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_METRICS':
      return Object.assign({}, state, {
        metrics: action.metrics
      });
    case 'SET_ADDITIONAL_PARAMETERS':
      return Object.assign({}, state, {
        additionalParameters: action.additionalParameters
      });
    default:
      return state;
  }
};

export default metricsReducer;
