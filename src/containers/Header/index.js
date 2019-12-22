import { connect } from 'react-redux';
import { compose } from 'redux';
import { actualStepSelector } from 'selectors/headerSelectors';
import { emptyProductSelector } from 'selectors/productSelectors';
import { emptySheetSelector } from 'selectors/sheetSelectors';
import { filledQualitySelector } from 'selectors/qualitySelectors';
import HeaderView from './View';

const mapStateToProps = state => ({
  actualStep: actualStepSelector(state),
  emptyProduct: emptyProductSelector(state),
  emptySheet: emptySheetSelector(state),
  filledQuality: filledQualitySelector(state),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(HeaderView);
