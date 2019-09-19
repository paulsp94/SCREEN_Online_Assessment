import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import metricsReducer from './metricsReducer';

export default combineReducers({ projectReducer, metricsReducer });
