import React, { Component } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Paper,
  Typography
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
  },
  paper: {
    marginTop: '10px',
    width: '550px',
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
        3: [
          'Re-Use, Re-Manufacturing, Refurbishment, Repair',
          'Waste reduction'
        ],
        5: [
          'Industrial simbiosys: mass of waste resources recovered and reintroduced in a production cycle as secondary raw material',
          'Project promoting waste recycling'
        ]
      },
      descriptions: [
        `Re-shaping the first stage of an industrial process (Product design) in order to reduce the waste generated AND/OR increase the life of the final product`,
        `Replacement , total or partial, of virgin material with "secondary raw material" `,
        `Prolongation of the life of a certain product that otherwise will be
      disposed`,
        `The new process generates less waste`,
        `The new process generates waste that can be re-used in the same
      process or in another production process`,
        `Promotional campaign with a specific target producing a specific
      waste`
      ]
    };
  }

  handleTypeChange = event => {
    this.setState({ type: event.target.value, subtype: '' });
    console.log(event.target.value);
  };

  handleSubTypeChange = event => {
    this.setState({ subtype: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { classes } = this.props;
    const { type, subtype, subtypes, descriptions } = this.state;

    return (
      <div>
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
              <MenuItem value={3}>Consumtion</MenuItem>
              <MenuItem value={5}>Disposal</MenuItem>
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
        {subtype && (
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h6" component="h3">
              {subtypes[type][subtype - 1]}
            </Typography>
            <Typography component="p">
              {descriptions[type + subtype - 2]}
            </Typography>
          </Paper>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(StepOne);
