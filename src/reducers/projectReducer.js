const projectReducer = (state = { type: '', subtype: '' }, action) => {
  switch (action.type) {
    case 'SET_TYPE':
      return Object.assign({}, state, {
        type: action.projectType,
        subtype: ''
      });
    case 'SET_SUBTYPE':
      return Object.assign({}, state, {
        subtype: action.subType
      });
    default:
      return state;
  }
};

export default projectReducer;
