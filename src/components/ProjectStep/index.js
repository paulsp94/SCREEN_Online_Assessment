import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { setType, setSubType } from '../../actions';

import styles from './styles';
import ProjectStep from './ProjectStep';

const mapStateToProps = ({ projectReducer }) => ({
  type: projectReducer.type,
  subtype: projectReducer.subtype
});

const mapDispatchToProps = dispatch => ({
  onTypeChange: type => dispatch(setType(type)),
  onSubTypeChange: subtype => dispatch(setSubType(subtype))
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProjectStep)
);
