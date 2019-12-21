import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  setProductCategoryAction,
  setProductNameAction,
  setProductReferenceAction,
  setProductDescriptionAction,
} from 'actions/productActions';
import { updateStepAction } from 'actions/headerActions';
import {
  productCategorySelector,
  productNameSelector,
  productReferenceSelector,
  productDescriptionSelector,
} from 'selectors/productSelectors';
import { updateSheetOptionsAction } from 'actions/sheetActions';
import ProductView from './View';

const mapStateToProps = state => ({
  productCategory: productCategorySelector(state),
  productName: productNameSelector(state),
  productReference: productReferenceSelector(state),
  productDescription: productDescriptionSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setProductCategory: productCategory =>
    dispatch(setProductCategoryAction(productCategory)),
  setProductName: productName =>
    dispatch(setProductNameAction(productName)),
  setProductReference: productReference =>
    dispatch(setProductReferenceAction(productReference)),
  setProductDescription: productDescription =>
    dispatch(
      setProductDescriptionAction(productDescription),
    ),
  updateSheetOptions: dataSheet =>
    dispatch(updateSheetOptionsAction(dataSheet)),
  updateStep: newStep =>
    dispatch(updateStepAction(newStep)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProductView);
