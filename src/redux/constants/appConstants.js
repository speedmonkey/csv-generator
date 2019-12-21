export const UPDATE_STEP = 'UPDATE_STEP';

export const PRODUCT_STEP = {
  id: 'productStep',
  stepName: 'Création du produit',
  recapTitle: 'Créer votre fiche produit',
  recapText:
    'Veuillez saisir les informations de base du produit',
};

export const SHEET_STEP = {
  id: 'sheetStep',
  stepName: 'Fiche technique',
  recapTitle: 'Élaboration de la fiche technique',
  recapText:
    'Il faut maintenant définir les caractéristiques présent dans la fiche technique',
};

export const QUALITY_STEP = {
  id: 'qualityStep',
  stepName: 'Qualité et prix',
  recapTitle: 'Définition des prix en fonction des carats',
  recapText:
    'Enfin, il faut attribuer dans le tableau le prix en fonction de la qualité et du carat',
};

export const HEADER_STEPS = [
  PRODUCT_STEP,
  SHEET_STEP,
  QUALITY_STEP,
];
