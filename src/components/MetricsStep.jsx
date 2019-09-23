import React from 'react';
import { connect } from 'react-redux';
import { Paper, Typography, withStyles, TextField } from '@material-ui/core';
import { projects } from '../constants';
import { setMetric, setAdditionalParameter } from '../actions';

const styles = () => ({
  paper: {
    marginTop: '10px',
    width: '40%',
    padding: '10px',
    boxSizing: 'border-box',
    margin: 'auto'
  },
  metricDescription: {
    textAlign: 'left'
  },
  metricBody: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const MetricsStep = ({
  type,
  subtype,
  onMetricChange,
  onAdditionalParameterChange,
  classes
}) => {
  return (
    <>
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="h6" component="h3">
          Metric
        </Typography>
        <div className={classes.metricBody}>
          <Typography component="p" className={classes.metricDescription}>
            {type && subtype && projects[type][subtype].metric}
          </Typography>
          <TextField onChange={onMetricChange} />
        </div>
      </Paper>
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="h6" component="h3">
          Additional Parameters
        </Typography>
        <div className={classes.metricBody}>
          <Typography component="p" className={classes.metricDescription}>
            {type && subtype && projects[type][subtype].additionalParameter}
          </Typography>
          <TextField onChange={onAdditionalParameterChange} />
        </div>
      </Paper>
    </>
  );
};

const mapStateToProps = ({ projectReducer }) => ({
  type: projectReducer.type || '',
  subtype: projectReducer.subtype || ''
});

const mapDispatchToProps = dispatch => ({
  onMetricChange: event => dispatch(setMetric(event.target.value)),
  onAdditionalParameterChange: event =>
    dispatch(setAdditionalParameter(event.target.value))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MetricsStep)
);
