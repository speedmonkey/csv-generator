import produce from 'immer';
import {
  selectSolitaires,
  numberSolitaires,
} from 'data/dataSolitaires';
import {
  selectAlliances,
  numberAlliances,
} from 'data/dataAlliances';
import {
  selectBoucles,
  numberBoucles,
} from 'data/dataBoucles';
import {
  UPDATE_SHEET_OPTIONS,
  UPDATE_DEFAULT_VALUE,
  UPDATE_VALUE_TO_DELETE,
  DELETE_INPUT,
} from 'constants/sheetConstants';
import {
  selectColliers,
  numberColliers,
} from 'data/dataColliers';

function updateAllValues(
  select = selectSolitaires,
  number = numberSolitaires,
) {
  const selectValues = select.map(item => item.name);
  const numberValues = number.map(item => item.name);
  return selectValues.concat(numberValues);
}

updateAllValues();

const initialState = {
  optionsSheet: {
    selectValues: selectSolitaires,
    numberValues: numberSolitaires,
    allValues: updateAllValues(),
    valueToDelete: updateAllValues()[0],
  },
};

/* eslint-disable default-case, no-param-reassign */
const sheetReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_SHEET_OPTIONS: {
        if (action.dataSheet === 'solitaires') {
          draft.optionsSheet.selectValues = selectSolitaires;
          draft.optionsSheet.numberValues = numberSolitaires;
        } else if (action.dataSheet === 'alliances') {
          draft.optionsSheet.selectValues = selectAlliances;
          draft.optionsSheet.numberValues = numberAlliances;
        } else if (action.dataSheet === 'colliers') {
          draft.optionsSheet.selectValues = selectColliers;
          draft.optionsSheet.numberValues = numberColliers;
        } else if (action.dataSheet === 'boucles') {
          draft.optionsSheet.selectValues = selectBoucles;
          draft.optionsSheet.numberValues = numberBoucles;
        }
        draft.optionsSheet.allValues = updateAllValues(
          draft.optionsSheet.selectValues,
          draft.optionsSheet.numberValues,
        );
        break;
      }
      case UPDATE_DEFAULT_VALUE:
        draft.optionsSheet[action.typeValues][
          action.optionIndex
        ].defaultValue = action.newValue;
        break;
      case UPDATE_VALUE_TO_DELETE:
        draft.optionsSheet.valueToDelete = action.newValue;
        break;
      case DELETE_INPUT: {
        const inputType = draft.optionsSheet.selectValues.find(
          item => item.name === action.inputName,
        )
          ? 'selectValues'
          : 'numberValues';
        draft.optionsSheet[inputType].splice(
          draft.optionsSheet[inputType].findIndex(
            ({ name }) => name === action.inputName,
          ),
          1,
        );
        draft.optionsSheet.allValues = updateAllValues(
          draft.optionsSheet.selectValues,
          draft.optionsSheet.numberValues,
        );
        // eslint-disable-next-line prefer-destructuring
        draft.optionsSheet.valueToDelete =
          draft.optionsSheet.allValues[0];
        break;
      }
    }
  });

export default sheetReducer;
