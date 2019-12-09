import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  productNameSelector,
  productCategorySelector,
} from 'selectors/productSelectors';
import HeaderView from './View';

const mapStateToProps = state => ({
  productName: productNameSelector(state),
  productCategory: productCategorySelector(state),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(HeaderView);
