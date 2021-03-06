import { createSelector } from 'reselect';

export const sheetSelector = state => state.sheet;

export const emptySheetSelector = createSelector(
  sheetSelector,
  sheet => {
    const emptyNumber = select =>
      select.defaultValue === '';
    return sheet.optionsSheet.numberValues.some(
      emptyNumber,
    );
  },
);

export const optionsSheetSelector = createSelector(
  sheetSelector,
  sheet => sheet.optionsSheet,
);

export const allValuesSheetSelector = createSelector(
  sheetSelector,
  sheet => sheet.optionsSheet.allValues,
);

export const valueToDeleteSelector = createSelector(
  sheetSelector,
  sheet => sheet.optionsSheet.valueToDelete,
);
