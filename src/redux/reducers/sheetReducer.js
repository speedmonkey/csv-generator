import produce from 'immer';
import dataSolitaires from 'data/dataSolitaires';
import dataAlliances from 'data/dataAlliances';
import {
  UPDATE_SHEET_OPTIONS,
  UPDATE_DEFAULT_VALUE,
} from 'constants/sheetConstants';

const initialState = {
  optionsSheet: dataSolitaires,
};

/* eslint-disable default-case, no-param-reassign */
const sheetReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_SHEET_OPTIONS: {
        if (action.dataSheet === 'alliances')
          draft.optionsSheet = dataAlliances;
        else if (action.dataSheet === 'solitaires')
          draft.optionsSheet = dataSolitaires;
        break;
      }
      case UPDATE_DEFAULT_VALUE:
        draft.optionsSheet[
          action.optionIndex
        ].defaultValue = action.newValue;
    }
  });

export default sheetReducer;
