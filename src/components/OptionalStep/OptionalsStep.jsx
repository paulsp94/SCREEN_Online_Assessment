import React from 'react';
import { FormControlLabel, Checkbox, Paper } from '@material-ui/core';

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

export default OptionalsStep;
