import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  actualStepSelector,
  csvInformationsSelector,
} from 'selectors/headerSelectors';
import {
  emptyProductSelector,
  productNameSelector,
} from 'selectors/productSelectors';
import { emptySheetSelector } from 'selectors/sheetSelectors';
import { filledQualitySelector } from 'selectors/qualitySelectors';
import HeaderView from './View';

const mapStateToProps = state => ({
  actualStep: actualStepSelector(state),
  emptyProduct: emptyProductSelector(state),
  emptySheet: emptySheetSelector(state),
  filledQuality: filledQualitySelector(state),
  productName: productNameSelector(state),
  csvInformations: csvInformationsSelector(state),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(HeaderView);
