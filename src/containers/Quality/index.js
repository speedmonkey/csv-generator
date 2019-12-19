import { connect } from 'react-redux';
import { compose } from 'redux';
import { productNameSelector } from 'selectors/productSelectors';
import {
  qualityFieldsSelector,
  caratTabSelector,
} from 'selectors/qualitySelectors';
import { updateValueTableAction } from 'actions/qualityActions';
import QualityView from './View';

const mapStateToProps = state => ({
  productName: productNameSelector(state),
  qualityFields: qualityFieldsSelector(state),
  caratTab: caratTabSelector(state),
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
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(QualityView);
