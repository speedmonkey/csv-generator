import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  actualStepSelector,
  allStepSelector,
} from 'selectors/headerSelectors';
import HeaderView from './View';

const mapStateToProps = state => ({
  actualStep: actualStepSelector(state),
  allStep: allStepSelector(state),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(HeaderView);
