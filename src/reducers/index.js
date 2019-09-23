import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import metricReducer from './metricReducer';

export default combineReducers({ projectReducer, metricReducer });
