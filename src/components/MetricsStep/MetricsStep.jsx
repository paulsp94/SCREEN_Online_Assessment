import React from 'react';
import { Paper, Typography, TextField } from '@material-ui/core';
import { projects } from '../../constants';

const MetricsStep = ({
  type,
  subtype,
  metric,
  additionalParameter,
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
          <TextField onChange={onMetricChange} value={metric} />
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
          <TextField
            onChange={onAdditionalParameterChange}
            value={additionalParameter}
          />
        </div>
      </Paper>
    </>
  );
};

export default MetricsStep;
