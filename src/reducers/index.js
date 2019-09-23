import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import metricReducer from './metricReducer';
import climateReducer from './climateReducer';
import employmentReducer from './employmentReducer';

export default combineReducers({
  projectReducer,
  metricReducer,
  climateReducer,
  employmentReducer
});
