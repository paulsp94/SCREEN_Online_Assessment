import React, { Component } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  formTypeControl: {
    width: '150px',
    margin: 'auto'
  },
  formSubTypeControl: {
    width: '400px',
    margin: 'auto'
  }
});
class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      subtype: '',
      subtypes: {
        1: [
          'Circular Design',
          'New production process accepting "secondary raw material"'
        ],
        2: [
          'Re-Use, Re-Manufacturing, Refurbishment, Repair',
          'Waste reduction'
        ],
        3: [
          'Industrial simbiosys: mass of waste resources recovered and reintroduced in a production cycle as secondary raw material',
          'Project promoting waste recycling'
        ]
      }
    };
  }

  handleTypeChange = event => {
    this.setState({ type: event.target.value, subtype: '' });
  };

  handleSubTypeChange = event => {
    this.setState({ subtype: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { type, subtype, subtypes } = this.state;

    return (
      <div>
        <FormControl variant="outlined" className={classes.formTypeControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-project-simple"
          >
            Project Type
          </InputLabel>
          <Select
            value={type}
            onChange={this.handleTypeChange}
            input={
              <OutlinedInput
                labelWidth={87}
                name="project"
                id="outlined-project-simple"
              />
            }
          >
            <MenuItem value={1}>Production</MenuItem>
            <MenuItem value={2}>Consumtion</MenuItem>
            <MenuItem value={3}>Disposal</MenuItem>
          </Select>
        </FormControl>
        {type && (
          <FormControl
            variant="outlined"
            className={classes.formSubTypeControl}
          >
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-project-simple"
            >
              Project Subtype
            </InputLabel>
            <Select
              value={subtype}
              onChange={this.handleSubTypeChange}
              input={
                <OutlinedInput
                  labelWidth={113}
                  name="project"
                  id="outlined-project-simple"
                />
              }
            >
              {subtypes[type].map((value, i) => {
                return (
                  <MenuItem key={i} value={i + 1}>
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(StepOne);
