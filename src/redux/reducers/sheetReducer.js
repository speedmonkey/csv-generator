import produce from 'immer';
import { selectSolitaires } from 'data/dataSolitaires';
import { selectAlliances } from 'data/dataAlliances';
import {
  UPDATE_SHEET_OPTIONS,
  UPDATE_DEFAULT_VALUE,
} from 'constants/sheetConstants';

const initialState = {
  optionsSheet: {
    selectValues: selectSolitaires,
  },
};

/* eslint-disable default-case, no-param-reassign */
const sheetReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_SHEET_OPTIONS: {
        if (action.dataSheet === 'alliances')
          draft.optionsSheet.selectValues = selectAlliances;
        else if (action.dataSheet === 'solitaires')
          draft.optionsSheet.selectValues = selectSolitaires;
        break;
      }
      case UPDATE_DEFAULT_VALUE:
        draft.optionsSheet.selectValues[
          action.optionIndex
        ].defaultValue = action.newValue;
    }
  });

export default sheetReducer;
