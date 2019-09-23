import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

class VerticalLinearStepper extends Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  getStepContent = step => {
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

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

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
                {this.getStepContent(index)}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      type="button"
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={this.handleNext}
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
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button
              onClick={this.handleReset}
              type="button"
              className={classes.button}
            >
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
