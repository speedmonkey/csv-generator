import { UPDATE_VALUE_TABLE } from 'constants/qualityConstants';

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
