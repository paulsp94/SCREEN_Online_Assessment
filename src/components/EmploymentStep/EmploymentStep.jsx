import React from 'react';
import { Paper, Typography, TextField, Divider } from '@material-ui/core';

const EmploymentStep = ({ n, p, onNChange, onPChange, classes }) => (
  <Paper className={classes.paper} elevation={1}>
    <Typography variant="h6" component="h3">
      Net balance of jobs
    </Typography>
    <div>
      <Typography component="p" className={classes.employmentDescription}>
        Number of new jobs created by the circular economy project, minus the
        number of jobs lost in the previous linear process
      </Typography>
      <Divider variant="middle" />
      <div className={classes.inputBlock}>
        <div className={classes.employmentInput}>
          <Typography component="p" className={classes.employmentDescription}>
            Number of full time <b>new</b> working units in the new process; it
            is negative in case of reduction of personnel
          </Typography>
          <TextField onChange={onNChange} value={n} />
        </div>
        <div className={classes.employmentInput}>
          <Typography component="p" className={classes.employmentDescription}>
            Number of full time working units in the old process
          </Typography>
          <TextField onChange={onPChange} value={p} />
        </div>
      </div>
    </div>
  </Paper>
);

export default EmploymentStep;
