import { connect } from 'react-redux';
import { compose } from 'redux';
import { actualStepSelector } from 'selectors/headerSelectors';
import RecapView from './View';

const mapStateToProps = state => ({
  actualStep: actualStepSelector(state),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(RecapView);
