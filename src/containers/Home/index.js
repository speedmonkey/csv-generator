import { connect } from 'react-redux';
import { compose } from 'redux';
import HomeView from './View';

const withConnect = connect(null, null);

export default compose(withConnect)(HomeView);
