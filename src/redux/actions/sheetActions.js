import {
  UPDATE_SHEET_OPTIONS,
  UPDATE_DEFAULT_VALUE,
  UPDATE_VALUE_TO_DELETE,
  DELETE_INPUT,
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
  typeValues,
) {
  return {
    type: UPDATE_DEFAULT_VALUE,
    newValue,
    optionIndex,
    typeValues,
  };
}
export function updateValueToDeleteAction(newValue) {
  return {
    type: UPDATE_VALUE_TO_DELETE,
    newValue,
  };
}

export function deleteInputAction(inputName) {
  return {
    type: DELETE_INPUT,
    inputName,
  };
}
