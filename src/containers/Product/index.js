import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  setProductCategoryAction,
  setProductNameAction,
} from 'actions/productActions';
import {
  productCategorySelector,
  productNameSelector,
} from 'selectors/productSelectors';
import { updateSheetOptionsAction } from 'actions/sheetActions';
import ProductView from './View';

const mapStateToProps = state => ({
  productCategory: productCategorySelector(state),
  productName: productNameSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setProductCategory: productCategory =>
    dispatch(setProductCategoryAction(productCategory)),
  setProductName: productName =>
    dispatch(setProductNameAction(productName)),
  updateSheetOptions: dataSheet =>
    dispatch(updateSheetOptionsAction(dataSheet)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProductView);
