import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { setN, setP, calculateEmployment } from '../../actions';

import styles from './styles';
import EmploymentStep from './EmploymentStep';

const mapStateToProps = ({ employmentReducer }) => ({
  n: employmentReducer.n,
  p: employmentReducer.p
});

const mapDispatchToProps = dispatch => ({
  onNChange: event => {
    dispatch(setN(event.target.value));
    dispatch(calculateEmployment());
  },
  onPChange: event => {
    dispatch(setP(event.target.value));
    dispatch(calculateEmployment());
  }
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(EmploymentStep)
);
