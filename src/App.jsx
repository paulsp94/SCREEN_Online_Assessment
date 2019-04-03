import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Av: 1,
      Cn: 1,
      Dn: 1,
      Fn: 1,
      C7: 1,
      C8: 1,
      E9: 1,
      description: '',
      relevantStakeholders: false,
      circularProcurment: false
    };
  }

  calcAssesmentValue = () => {
    const { relevantStakeholders, circularProcurment } = this.state;
    let { Cn, Dn, Fn, C7, C8, E9 } = this.state;
    if (relevantStakeholders) {
      Fn *= 1.1;
    }
    const val = Cn * Dn * Fn * C7 * C8 * E9;
    this.setState({ Av: val });
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              SCREEN Online Assessment
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Button color="primary" variant="contained">
            Production
          </Button>
          <Button color="primary" variant="contained">
            Consumtion
          </Button>
          <Button color="primary" variant="contained">
            Disposal
          </Button>
        </Grid>
      </div>
    );
  }
}
