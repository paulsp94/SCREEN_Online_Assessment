import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { setEnergyBalance, setEmissionReduction } from '../../actions';

import styles from './styles';
import ClimateStep from './ClimateStep';

const mapStateToProps = ({ climateReducer }) => ({
  energyBalance: climateReducer.energyBalance,
  emissionReduction: climateReducer.emissionReduction
});

const mapDispatchToProps = dispatch => ({
  onBalanceChange: event => dispatch(setEnergyBalance(event.target.value)),
  onEmissionChange: event => dispatch(setEmissionReduction(event.target.value))
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ClimateStep)
);
