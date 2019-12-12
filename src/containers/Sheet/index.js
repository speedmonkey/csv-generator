import { connect } from 'react-redux';
import { compose } from 'redux';
import { optionsSheetSelector } from 'selectors/sheetSelectors';
import { updateDefaultValueAction } from 'actions/sheetActions';
import SheetView from './View';

const mapStateToProps = state => ({
  optionsSheet: optionsSheetSelector(state),
});

const mapDispatchToProps = dispatch => ({
  updateDefaultValue: (newValue, optionIndex) =>
    dispatch(
      updateDefaultValueAction(newValue, optionIndex),
    ),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SheetView);
