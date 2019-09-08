export const setProjectType = (state, action) => {
  switch (action.type) {
    case SET_TYPE:
      return Object.assign({}, state, {
        type: action.payload
      });
    default:
      return state;
  }
};

export const setProjectSubType = (state, action) => {
  switch (action.type) {
    case SET_SUBTYPE:
      return Object.assign({}, state, {
        subtype: action.payload
      });
    default:
      return state;
  }
};
