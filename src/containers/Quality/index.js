import { connect } from 'react-redux';
import { compose } from 'redux';
import { productNameSelector } from 'selectors/productSelectors';
import {
  qualityFieldsSelector,
  caratTabSelector,
} from 'selectors/qualitySelectors';
import QualityView from './View';

const mapStateToProps = state => ({
  productName: productNameSelector(state),
  qualityFields: qualityFieldsSelector(state),
  caratTab: caratTabSelector(state),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(QualityView);
