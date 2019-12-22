import { connect } from 'react-redux';
import { compose } from 'redux';
import { optionsSheetSelector } from 'selectors/sheetSelectors';
import {
  updateDefaultValueAction,
  updateSheetOptionsAction,
} from 'actions/sheetActions';
import { updateStepAction } from 'actions/headerActions';
import {
  emptyProductSelector,
  productCategorySelector,
} from 'selectors/productSelectors';
import SheetView from './View';

const mapStateToProps = state => ({
  emptyProduct: emptyProductSelector(state),
  optionsSheet: optionsSheetSelector(state),
  productCategory: productCategorySelector(state),
});

const mapDispatchToProps = dispatch => ({
  updateDefaultValue: (newValue, optionIndex, typeValues) =>
    dispatch(
      updateDefaultValueAction(
        newValue,
        optionIndex,
        typeValues,
      ),
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

export default compose(withConnect)(SheetView);
