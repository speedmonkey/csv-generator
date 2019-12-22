import { createSelector } from 'reselect';
import { productSelector } from 'selectors/productSelectors';
import { optionsSheetSelector } from 'selectors/sheetSelectors';
import {
  qualityFieldsSelector,
  caratTabSelector,
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
  ],
  (product, optionsSheet, quality, caratTab) => {
    /*
     * Première partie du générateur de CSV:
     * Création des Headers et de la première ligne
     */
    const csvHeaders = BASIC_HEADERS.concat(
      optionsSheet.allValues,
    );
    const initialInfos = [
      product.productName,
      quality[0],
      caratTab[0].carats[0],
      caratTab[0].carats[1],
      1,
      'FR Taux Standard (20%)',
      product.productReference,
      product.productDescription,
    ];
    const selectValues = optionsSheet.selectValues.map(
      item => item.defaultValue,
    );
    const numberValues = optionsSheet.numberValues.map(
      item => item.defaultValue,
    );
    const firstLine = initialInfos.concat(
      selectValues,
      numberValues,
    );
    /*
     * Deuxième partie du générateur de CSV :
     * Création de l'ensemble du fichier CSV
     */
    return [csvHeaders, firstLine];
  },
);
