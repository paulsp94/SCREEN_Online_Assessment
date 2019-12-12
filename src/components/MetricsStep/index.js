import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { setMetric, setAdditionalParameter } from '../../actions';

import styles from './styles';
import MetricsStep from './MetricsStep';

const mapStateToProps = ({ projectReducer, metricReducer }) => ({
  type: projectReducer.type || '',
  subtype: projectReducer.subtype || '',
  metric: metricReducer.metric,
  additionalParameter: metricReducer.additionalParameter
});

const mapDispatchToProps = dispatch => ({
  onMetricChange: event => dispatch(setMetric(event.target.value)),
  onAdditionalParameterChange: event =>
    dispatch(setAdditionalParameter(event.target.value))
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(MetricsStep)
);
