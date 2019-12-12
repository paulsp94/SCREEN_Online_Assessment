import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Paper,
  Typography
} from '@material-ui/core';
import { projects } from '../../constants';

const ProjectStep = ({
  type,
  subtype,
  onTypeChange,
  onSubTypeChange,
  classes
}) => {
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
            {Object.keys(projects).map(key => (
              <MenuItem value={key}>{key}</MenuItem>
            ))}
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
              {Object.keys(projects[type]).map(key => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </>
      {subtype && (
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h6" component="h3">
            {subtype}
          </Typography>
          <Typography component="p">
            {projects[type][subtype].description}
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default ProjectStep;
