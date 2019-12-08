import { connect } from 'react-redux';
import { compose } from 'redux';
import { setProductCategoryAction } from 'actions/productActions';
import { productCategorySelector } from 'selectors/productSelectors';
import ProductView from './View';

const mapStateToProps = state => ({
  productCategory: productCategorySelector(state),
});

const mapDispatchToProps = dispatch => ({
  setProductCategory: nameProduct =>
    dispatch(setProductCategoryAction(nameProduct)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProductView);
