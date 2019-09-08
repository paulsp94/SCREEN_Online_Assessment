export const setProjectProps = (state = '', action) => {
  switch (action.type) {
    case 'SET_TYPE':
      return Object.assign({}, state, {
        type: action.projectType
      });
    case 'SET_SUBTYPE':
      return Object.assign({}, state, {
        subtype: action.subType
      });
    default:
      return state;
  }
};
