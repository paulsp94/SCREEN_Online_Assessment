import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { calculate } from '../../actions';

import styles from './styles';
import VerticalStepper from './VerticalStepper';

const mapStateToProps = ({
  projectReducer,
  metricReducer,
  climateReducer,
  employmentReducer,
  assessmentReducer
}) => ({
  type: projectReducer.type,
  subtype: projectReducer.subtype,
  metric: metricReducer.metric,
  additionalParameter: metricReducer.additionalParameter,
  energyBalance: climateReducer.energyBalance,
  emissionReduction: climateReducer.emissionReduction,
  employment: employmentReducer.employment,
  assessmentValue: assessmentReducer.assessmentValue
});

const mapDispatchToProps = dispatch => ({
  calculate: props => dispatch(calculate(props))
});

const mergeProps = (stateProps, actions, { classes }) => ({
  onFinish: () => actions.calculate(stateProps),
  classes,
  ...stateProps
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(VerticalStepper)
);
