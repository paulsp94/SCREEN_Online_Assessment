import React from 'react';
import { connect } from 'react-redux';
import { Paper, Typography, withStyles, TextField } from '@material-ui/core';
import { projects } from '../constants';
import { setAdditionalParameters, setMetrics } from '../actions';

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
  metricsBody: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const MetricsStep = ({ type, subtype, classes }) => {
  return (
    <>
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="h6" component="h3">
          Metrics
        </Typography>
        <div className={classes.metricsBody}>
          <Typography component="p" className={classes.metricDescription}>
            {type && subtype && projects[type][subtype].metrics}
          </Typography>
          <TextField />
        </div>
      </Paper>
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="h6" component="h3">
          Additional Parameters
        </Typography>
        <div className={classes.metricsBody}>
          <Typography component="p" className={classes.metricDescription}>
            {type && subtype && projects[type][subtype].additionalParameters}
          </Typography>
          <TextField />
        </div>
      </Paper>
    </>
  );
};

const mapStateToProps = ({ setProjectProps }) => ({
  type: setProjectProps.type || '',
  subtype: setProjectProps.subtype || ''
});

const mapDispatchToProps = dispatch => ({
  onMetricsChange: type => dispatch(setMetrics(type)),
  onAdditionalParametersChange: subtype =>
    dispatch(setAdditionalParameters(subtype))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MetricsStep)
);
