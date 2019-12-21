import { connect } from 'react-redux';
import { compose } from 'redux';
import { productNameSelector } from 'selectors/productSelectors';
import {
  qualityFieldsSelector,
  caratTabSelector,
  newColumnNameSelector,
  columnToDeleteSelector,
} from 'selectors/qualitySelectors';
import {
  updateValueTableAction,
  updateNewColumnNameAction,
  addColumnTableAction,
  updateColumnToDeleteAction,
  deleteColumnTableAction,
} from 'actions/qualityActions';
import { updateStepAction } from 'actions/headerActions';
import QualityView from './View';

const mapStateToProps = state => ({
  productName: productNameSelector(state),
  qualityFields: qualityFieldsSelector(state),
  caratTab: caratTabSelector(state),
  newColumnName: newColumnNameSelector(state),
  columnToDelete: columnToDeleteSelector(state),
});

const mapDispatchToProps = dispatch => ({
  updateValueTable: (newValue, columnTable, lineTable) =>
    dispatch(
      updateValueTableAction(
        newValue,
        columnTable,
        lineTable,
      ),
    ),
  updateNewColumnName: newColumnName =>
    dispatch(updateNewColumnNameAction(newColumnName)),
  addColumnTable: newColumnName =>
    dispatch(addColumnTableAction(newColumnName)),
  updateColumnToDelete: columnTable =>
    dispatch(updateColumnToDeleteAction(columnTable)),
  deleteColumnTable: () =>
    dispatch(deleteColumnTableAction()),
  updateStep: newStep =>
    dispatch(updateStepAction(newStep)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(QualityView);
