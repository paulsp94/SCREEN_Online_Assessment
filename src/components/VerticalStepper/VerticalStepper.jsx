import React, { useState } from 'react';
import {
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography
} from '@material-ui/core';

import { steps } from '../../constants';

import ClimateStep from '../ClimateStep';
import EmploymentStep from '../EmploymentStep';
import MetricsStep from '../MetricsStep';
import OptionalsStep from '../OptionalStep';
import ProjectStep from '../ProjectStep';

const VerticalStepper = ({ onFinish, assessmentValue, classes }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      onFinish();
    }
  };

  const handleBack = () => setActiveStep(activeStep - 1);

  const handleReset = () => setActiveStep(0);

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <ProjectStep />;
      case 1:
        return <MetricsStep />;
      case 2:
        return <ClimateStep />;
      case 3:
        return <EmploymentStep />;
      default:
        return <OptionalsStep />;
    }
  };

  return (
    <div
      className={classes.root}
      style={{ paddingTop: '10px', margin: 'auto' }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    type="button"
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>{String(assessmentValue)}</Typography>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            type="button"
            className={classes.button}
          >
            Back
          </Button>
          <Button
            onClick={handleReset}
            type="button"
            className={classes.button}
          >
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default VerticalStepper;
