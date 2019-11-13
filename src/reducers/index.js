import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import metricReducer from './metricReducer';
import climateReducer from './climateReducer';
import employmentReducer from './employmentReducer';
import optionalReducer from './optionalReducer';
import assessmentReducer from './assessmentReducer';

export default combineReducers({
  projectReducer,
  metricReducer,
  climateReducer,
  employmentReducer,
  optionalReducer,
  assessmentReducer
});
