const optionalReducer = (
  state = { circularProcurement: false, educational: false },
  action
) => {
  switch (action.type) {
    case 'SET_CIRCULAR_PROCUREMENT':
      return Object.assign({}, state, {
        circularProcurement: action.circularProcurement
      });
    case 'SET_EDUCATIONAL':
      return Object.assign({}, state, {
        educational: action.educational
      });
    default:
      return state;
  }
};

export default optionalReducer;
