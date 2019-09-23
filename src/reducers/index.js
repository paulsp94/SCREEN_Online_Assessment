import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import metricReducer from './metricReducer';
import climateReducer from './climateReducer';

export default combineReducers({
  projectReducer,
  metricReducer,
  climateReducer
});
