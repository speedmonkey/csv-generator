import { connect } from 'react-redux';
import { compose } from 'redux';
import { optionsSheetSelector } from 'selectors/sheetSelectors';
import {
  updateDefaultValueAction,
  updateSheetOptionsAction,
} from 'actions/sheetActions';
import { productCategorySelector } from 'selectors/productSelectors';
import SheetView from './View';

const mapStateToProps = state => ({
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
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SheetView);
