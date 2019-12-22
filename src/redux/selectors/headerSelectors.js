import { createSelector } from 'reselect';
import { productSelector } from 'selectors/productSelectors';
import { optionsSheetSelector } from 'selectors/sheetSelectors';
import {
  qualityFieldsSelector,
  caratTabSelector,
  countTabSelector,
} from 'selectors/qualitySelectors';
import { BASIC_HEADERS } from 'constants/appConstants';

export const headerSelector = state => state.header;

export const actualStepSelector = createSelector(
  headerSelector,
  header => header.actualStep,
);

export const csvInformationsSelector = createSelector(
  [
    productSelector,
    optionsSheetSelector,
    qualityFieldsSelector,
    caratTabSelector,
    countTabSelector,
  ],
  (product, optionsSheet, quality, caratTab, countTab) => {
    const csvHeaders = BASIC_HEADERS.concat(
      optionsSheet.allValues,
    );

    const csv = [csvHeaders];
    const array = [];
    let referenceLine = 1;
    for (
      let qualityNumber = 0;
      qualityNumber < 5;
      qualityNumber += 1
    ) {
      for (
        let caratNumber = 0;
        caratNumber < countTab;
        caratNumber += 1
      ) {
        let newLine = [
          product.productName,
          quality[qualityNumber],
          caratTab[caratNumber].carats[0],
          caratTab[caratNumber].carats[qualityNumber + 1],
          1,
          'FR Taux Standard (20%)',
          `${product.productReference}_${referenceLine}`,
        ];
        const selectValues = optionsSheet.selectValues.map(
          item => item.defaultValue,
        );
        const numberValues = optionsSheet.numberValues.map(
          item => item.defaultValue,
        );
        newLine = newLine.concat(
          selectValues,
          numberValues,
        );
        array.push(newLine);
        referenceLine += 1;
      }
    }
    return csv.concat(array);
  },
);
