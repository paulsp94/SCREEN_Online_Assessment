import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';
import VerticalStepper from './components/VerticalStepper';

const App = () => (
  <div className="App">
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          SCREEN Online Assessment
        </Typography>
      </Toolbar>
    </AppBar>
    <VerticalStepper />
  </div>
);

export default App;
