import {
  UPDATE_SHEET_OPTIONS,
  UPDATE_DEFAULT_VALUE,
} from 'constants/sheetConstants';

export function updateSheetOptionsAction(dataSheet) {
  return {
    type: UPDATE_SHEET_OPTIONS,
    dataSheet,
  };
}

export function updateDefaultValueAction(
  newValue,
  optionIndex,
) {
  return {
    type: UPDATE_DEFAULT_VALUE,
    newValue,
    optionIndex,
  };
}
