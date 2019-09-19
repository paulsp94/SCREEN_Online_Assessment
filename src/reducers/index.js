import { combineReducers } from 'redux';
import { setProjectProps } from './projectReducer';
import metricsReducer from './metricsReducer';

export default combineReducers({ setProjectProps, metricsReducer });
