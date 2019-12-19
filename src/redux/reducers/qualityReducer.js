import {
  QUALITY_CONSTANTS,
  CARATS_TABLE,
  UPDATE_VALUE_TABLE,
} from 'constants/qualityConstants';

import produce from 'immer';

const initialState = {
  qualityFields: QUALITY_CONSTANTS,
  caratTab: CARATS_TABLE,
};

/* eslint-disable default-case, no-param-reassign */
const qualityReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_VALUE_TABLE:
        draft.caratTab[action.columnTable].carats[
          action.lineTable
        ] = action.newValue;
    }
  });

export default qualityReducer;
