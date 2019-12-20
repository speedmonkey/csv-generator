import {
  UPDATE_VALUE_TABLE,
  UPDATE_NEW_COLUMN_NAME,
  ADD_COLUMN_TABLE,
  UPDATE_COLUMN_TO_DELETE,
  DELETE_COLUMN_TABLE,
} from 'constants/qualityConstants';

export function updateValueTableAction(
  newValue,
  columnTable,
  lineTable,
) {
  return {
    type: UPDATE_VALUE_TABLE,
    newValue,
    columnTable,
    lineTable,
  };
}

export function updateNewColumnNameAction(newColumnName) {
  return {
    type: UPDATE_NEW_COLUMN_NAME,
    newColumnName,
  };
}

export function addColumnTableAction(newColumnName) {
  return {
    type: ADD_COLUMN_TABLE,
    newColumnName,
  };
}

export function updateColumnToDeleteAction(columnTable) {
  return {
    type: UPDATE_COLUMN_TO_DELETE,
    columnTable,
  };
}

export function deleteColumnTableAction() {
  return {
    type: DELETE_COLUMN_TABLE,
  };
}
