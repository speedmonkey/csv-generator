export const UPDATE_STEP = 'UPDATE_STEP';

export const PRODUCT_STEP = {
  id: 'productStep',
  stepName: 'Création du produit',
  stepLink: '/',
  stepButton: "Passer à l'étape suivante",
  recapTitle: 'Créer votre fiche produit',
  recapText:
    'Veuillez saisir les informations de base du produit',
};

export const SHEET_STEP = {
  id: 'sheetStep',
  stepName: 'Fiche technique',
  stepLink: 'sheet',
  stepButton: "Passer à l'étape suivante",
  recapTitle: 'Élaboration de la fiche technique',
  recapText:
    'Il faut maintenant définir les caractéristiques techniques du produit',
};

export const QUALITY_STEP = {
  id: 'qualityStep',
  stepName: 'Qualité et prix',
  stepLink: 'quality',
  stepButton: 'Générer votre fichier CSV',
  recapTitle: 'Définition des prix en fonction des carats',
  recapText:
    'Il faut attribuer dans le tableau ci-dessous les différents prix en fonction de la qualité et du carat',
};

export const HEADER_STEPS = [
  PRODUCT_STEP,
  SHEET_STEP,
  QUALITY_STEP,
];
