import { projects } from '../constants';

export default (state = { assessmentValue: 0 }, action) => {
  switch (action.type) {
    case 'CALCULATE': {
      const {
        metric,
        additionalParameter,
        type,
        subtype,
        energyBalance,
        emissionReduction,
        employment
      } = action.payload;
      try {
        const assessmentValue =
          parseInt(metric, 10) *
          parseInt(additionalParameter, 10) *
          parseInt(projects[type][subtype].weight, 10) *
          parseInt(energyBalance, 10) *
          parseInt(emissionReduction, 10) *
          parseInt(employment, 10);
        return Object.assign({}, state, {
          assessmentValue
        });
      } catch (e) {
        return state;
      }
    }
    default:
      return state;
  }
};
