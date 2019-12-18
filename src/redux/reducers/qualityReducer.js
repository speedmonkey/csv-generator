import {
  QUALITY_CONSTANTS,
  FIRST_CARAT_TABLE,
  SECOND_CARAT_TABLE,
  THIRD_CARAT_TABLE,
  FOURTH_CARAT_TABLE,
  FIVE_CARAT_TABLE,
} from 'constants/qualityConstants';

import produce from 'immer';

const initialState = {
  qualityFields: QUALITY_CONSTANTS,
  caratTab: [
    FIRST_CARAT_TABLE,
    SECOND_CARAT_TABLE,
    THIRD_CARAT_TABLE,
    FOURTH_CARAT_TABLE,
    FIVE_CARAT_TABLE,
  ],
};

/* eslint-disable default-case, no-param-reassign */
const qualityReducer = (state = initialState, action) =>
  produce(state, draft => {});

export default qualityReducer;
