import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import { calculate } from '../actions';
import { steps } from '../constants';
import ClimateStep from './ClimateStep';
import EmploymentStep from './EmploymentStep';
import MetricsStep from './MetricsStep';
import OptionalsStep from './OptionalsStep';
import ProjectStep from './ProjectStep';

const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

const VerticalLinearStepper = ({ onFinish, assessmentValue, classes }) => {
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
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(VerticalLinearStepper)
);
