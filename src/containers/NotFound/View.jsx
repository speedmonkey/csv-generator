import React, { useEffect } from 'react';
import { NOT_FOUND_STEP } from 'constants/appConstants';
import PropTypes from 'prop-types';

const NotFoundView = ({ updateStep }) => {
  useEffect(() => {
    updateStep(NOT_FOUND_STEP);
  }, []);

  return <div />;
};

NotFoundView.propTypes = {
  updateStep: PropTypes.func,
};

export default NotFoundView;
