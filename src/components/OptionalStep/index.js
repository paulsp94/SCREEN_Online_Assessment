import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { setCircularProcurement, setEducational } from '../../actions';

import styles from './styles';
import OptionalsStep from './OptionalsStep';

const mapStateToProps = ({ optionalReducer }) => ({
  circularProcurement: optionalReducer.circularProcurement,
  educational: optionalReducer.educational
});

const mapDispatchToProps = dispatch => ({
  onTriggerCircularProcurement: event =>
    dispatch(setCircularProcurement(event.target.checked)),
  onTriggerEducational: event => dispatch(setEducational(event.target.checked))
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(OptionalsStep)
);
