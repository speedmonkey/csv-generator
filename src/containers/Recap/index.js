import { connect } from 'react-redux';
import { compose } from 'redux';
import { actualStepSelector } from 'selectors/headerSelectors';
import RecapView from './View';

const mapStateToProps = state => ({
  actualStep: actualStepSelector(state),
});

const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RecapView);
