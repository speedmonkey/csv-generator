import { createSelector } from 'reselect';

export const headerSelector = state => state.header;

export const actualStepSelector = createSelector(
  headerSelector,
  header => header.actualStep,
);

export const allStepSelector = createSelector(
  headerSelector,
  header => header.allStep,
);
