import { createSelector } from 'reselect';

export const headerSelector = state => state.header;

export const actualStepSelector = createSelector(
  headerSelector,
  header => header.actualStep,
);
