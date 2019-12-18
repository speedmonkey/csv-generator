import { createSelector } from 'reselect';

export const qualitySelector = state => state.quality;

export const qualityFieldsSelector = createSelector(
  qualitySelector,
  quality => quality.qualityFields,
);

export const caratTabSelector = createSelector(
  qualitySelector,
  quality => quality.caratTab,
);
