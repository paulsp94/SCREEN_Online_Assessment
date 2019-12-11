import React from 'react';
import { connect } from 'react-redux';
import {
  Paper,
  Typography,
  TextField,
  withStyles,
  Divider
} from '@material-ui/core';
import { setN, setP, calculateEmployment } from '../actions';

const styles = () => ({
  paper: {
    marginTop: '10px',
    width: '40%',
    padding: '10px',
    boxSizing: 'border-box',
    margin: 'auto'
  },
  employmentDescription: {
    textAlign: 'left',
    marginBottom: '10px'
  },
  inputBlock: {
    display: 'flex',
    flexDirection: 'column'
  },
  employmentInput: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const EmploymentStep = ({ onNChange, onPChange, classes }) => {
  return (
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
              Number of full time <b>new</b> working units in the new process;
              it is negative in case of reduction of personnel
            </Typography>
            <TextField onChange={onNChange} />
          </div>
          <div className={classes.employmentInput}>
            <Typography component="p" className={classes.employmentDescription}>
              Number of full time working units in the old process
            </Typography>
            <TextField onChange={onPChange} />
          </div>
        </div>
      </div>
    </Paper>
  );
};

const mapDispatchToProps = dispatch => ({
  onNChange: event => {
    dispatch(setN(event.target.value));
    dispatch(calculateEmployment());
  },
  onPChange: event => {
    dispatch(setP(event.target.value));
    dispatch(calculateEmployment());
  }
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(EmploymentStep)
);
