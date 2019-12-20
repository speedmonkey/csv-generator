import {
  QUALITY_CONSTANTS,
  CARATS_TABLE,
  UPDATE_VALUE_TABLE,
  UPDATE_NEW_COLUMN_NAME,
  ADD_COLUMN_TABLE,
  UPDATE_COLUMN_TO_DELETE,
} from 'constants/qualityConstants';

import produce from 'immer';

const initialState = {
  qualityFields: QUALITY_CONSTANTS,
  caratTab: CARATS_TABLE,
  countTab: 5,
  newColumnName: '',
  columnToDelete: '0',
};

/* eslint-disable default-case, no-param-reassign */
const qualityReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_VALUE_TABLE:
        draft.caratTab[action.columnTable].carats[
          action.lineTable
        ] = action.newValue;
        break;
      case UPDATE_NEW_COLUMN_NAME:
        draft.newColumnName = action.newColumnName;
        break;
      case ADD_COLUMN_TABLE: {
        const newCaratTab = {
          tabNumber: draft.countTab,
          carats: [
            action.newColumnName,
            '',
            '',
            '',
            '',
            '',
          ],
        };
        draft.caratTab = draft.caratTab.concat(newCaratTab);
        draft.countTab += 1;
        break;
      }
      case UPDATE_COLUMN_TO_DELETE:
        draft.columnToDelete = action.columnTable;
    }
  });

export default qualityReducer;
