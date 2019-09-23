import React from 'react';
import { FormControlLabel, Checkbox, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

const OptionalsStep = ({ classes }) => {
  const circularProcurementLink = (
    <a href="http://ec.europa.eu/environment/gpp/circular_procurement_en.htm">
      CIRCULAR PROCUREMENT
    </a>
  );

  const handleChange = () => {};

  return (
    <Paper className={classes.paper} elevation={1}>
      <FormControlLabel
        control={
          <Checkbox
            checked={false}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
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
            checked={false}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label="Educational projects targeted to relevant stakeholders"
      />
    </Paper>
  );
};

export default withStyles(styles)(OptionalsStep);
