import { createSelector } from 'reselect';

export const sheetSelector = state => state.sheet;

export const optionsSheetSelector = createSelector(
  sheetSelector,
  product => product.optionsSheet,
);
