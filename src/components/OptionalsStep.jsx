import React from 'react';
import { connect } from 'react-redux';
import { FormControlLabel, Checkbox, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { setCircularProcurement, setEducational } from '../actions';

const styles = () => ({
  paper: {
    width: '40%',
    padding: '10px',
    boxSizing: 'border-box',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
});

const OptionalsStep = ({
  circularProcurement,
  educational,
  onTriggerCircularProcurement,
  onTriggerEducational,
  classes
}) => {
  const circularProcurementLink = (
    <a href="http://ec.europa.eu/environment/gpp/circular_procurement_en.htm">
      CIRCULAR PROCUREMENT
    </a>
  );

  return (
    <Paper className={classes.paper} elevation={1}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={onTriggerCircularProcurement}
            color="primary"
            checked={circularProcurement}
          />
        }
        label={
          <span>
            Implementation of {circularProcurementLink} in the project
          </span>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={onTriggerEducational}
            color="primary"
            checked={educational}
          />
        }
        label="Educational projects targeted to relevant stakeholders"
      />
    </Paper>
  );
};

const mapStateToProps = ({ optionalReducer }) => ({
  circularProcurement: optionalReducer.circularProcurement,
  educational: optionalReducer.educational
});

const mapDispatchToProps = dispatch => ({
  onTriggerCircularProcurement: event =>
    dispatch(setCircularProcurement(event.target.checked)),
  onTriggerEducational: event => dispatch(setEducational(event.target.checked))
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(OptionalsStep)
);
