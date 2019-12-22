import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  actualStepSelector,
  allStepSelector,
} from 'selectors/headerSelectors';
import { emptyProductSelector } from 'selectors/productSelectors';
import { emptySheetSelector } from 'selectors/sheetSelectors';
import HeaderView from './View';

const mapStateToProps = state => ({
  actualStep: actualStepSelector(state),
  allStep: allStepSelector(state),
  emptyProduct: emptyProductSelector(state),
  emptySheet: emptySheetSelector(state),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(HeaderView);
