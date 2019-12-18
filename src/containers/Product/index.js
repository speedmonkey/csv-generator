import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  setProductCategoryAction,
  setProductNameAction,
  setProductReferenceAction,
} from 'actions/productActions';
import {
  productCategorySelector,
  productNameSelector,
  productReferenceSelector,
} from 'selectors/productSelectors';
import { updateSheetOptionsAction } from 'actions/sheetActions';
import ProductView from './View';

const mapStateToProps = state => ({
  productCategory: productCategorySelector(state),
  productName: productNameSelector(state),
  productReference: productReferenceSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setProductCategory: productCategory =>
    dispatch(setProductCategoryAction(productCategory)),
  setProductName: productName =>
    dispatch(setProductNameAction(productName)),
  setProductReference: productReference =>
    dispatch(setProductReferenceAction(productReference)),
  updateSheetOptions: dataSheet =>
    dispatch(updateSheetOptionsAction(dataSheet)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProductView);
