import { createSelector } from 'reselect';

export const qualitySelector = state => state.quality;

export const filledQualitySelector = createSelector(
  qualitySelector,
  quality => {
    const emptyCarat = item => item === '';
    const isFalse = item => item === false;
    const emptyTab = quality.caratTab.map(item =>
      item.carats.some(emptyCarat),
    );
    return emptyTab.every(isFalse);
  },
);

export const qualityFieldsSelector = createSelector(
  qualitySelector,
  quality => quality.qualityFields,
);

export const caratTabSelector = createSelector(
  qualitySelector,
  quality => quality.caratTab,
);

export const columnToDeleteSelector = createSelector(
  qualitySelector,
  quality => quality.columnToDelete,
);

export const newColumnNameSelector = createSelector(
  qualitySelector,
  quality => quality.newColumnName,
);
