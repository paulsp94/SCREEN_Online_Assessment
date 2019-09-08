import React from 'react';
import { connect } from 'react-redux';
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
import { subtypes, descriptions } from '../constants';
import { setType, setSubType } from '../actions';

const styles = () => ({
  formTypeControl: {
    width: '10%',
    margin: 'auto'
  },
  formSubTypeControl: {
    width: '30%',
    margin: 'auto'
  },
  paper: {
    marginTop: '10px',
    width: '40%',
    padding: '10px',
    boxSizing: 'border-box',
    margin: 'auto'
  }
});

const StepOne = ({ type, subtype, onTypeChange, onSubTypeChange, classes }) => {
  const handleTypeChange = event => onTypeChange(event.target.value);
  const handleSubTypeChange = event => onSubTypeChange(event.target.value);

  return (
    <>
      <>
        <FormControl variant="outlined" className={classes.formTypeControl}>
          <InputLabel htmlFor="outlined-project-simple">
            Project Type
          </InputLabel>
          <Select
            value={type}
            onChange={handleTypeChange}
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
            <InputLabel htmlFor="outlined-project-simple">
              Project Subtype
            </InputLabel>
            <Select
              value={subtype}
              onChange={handleSubTypeChange}
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
      </>
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
    </>
  );
};

const mapStateToProps = ({ setProjectProps }) => ({
  type: setProjectProps.type,
  subtype: setProjectProps.subtype
});

const mapDispatchToProps = dispatch => ({
  onTypeChange: type => dispatch(setType(type)),
  onSubTypeChange: subtype => dispatch(setSubType(subtype))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StepOne)
);
