import { connect } from 'react-redux';
import { compose } from 'redux';
import { updateStepAction } from 'actions/headerActions';
import NotFoundView from './View';

const mapDispatchToProps = dispatch => ({
  updateStep: newStep =>
    dispatch(updateStepAction(newStep)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(NotFoundView);
