export const UPDATE_STEP = 'UPDATE_STEP';

export const PRODUCT_STEP = {
  id: 'productStep',
  stepName: 'Création du produit',
  stepLink: '/',
  stepButton: 'Étape suivante',
  recapTitle: 'Créer votre fiche produit',
  recapText:
    'Veuillez saisir les informations de base du produit',
};

export const SHEET_STEP = {
  id: 'sheetStep',
  stepName: 'Fiche technique',
  stepLink: 'sheet',
  stepButton: 'Étape suivante',
  recapTitle: 'Élaboration de la fiche technique',
  recapText:
    'Définir les caractéristiques techniques du produit',
};

export const QUALITY_STEP = {
  id: 'qualityStep',
  stepName: 'Qualité et prix',
  stepLink: 'quality',
  stepButton: 'Générer CSV',
  recapTitle: 'Définition des prix en fonction des carats',
  recapText:
    'Il faut attribuer dans le tableau ci-dessous les différents prix en fonction de la qualité et du carat',
};

export const NOT_FOUND_STEP = {
  id: 'notFoundStep',
  stepName: 'Page introuvable',
  stepLink: 'notfound',
  stepButton: `Retourner à l'accueil`,
  recapTitle: 'Page non trouvable',
  recapText: `Wooops, cette page n'existe pas`,
};

export const HEADER_STEPS = [
  PRODUCT_STEP,
  SHEET_STEP,
  QUALITY_STEP,
  NOT_FOUND_STEP,
];

export const BASIC_HEADERS = [
  'Nom du modele',
  'Qualite',
  'Carats',
  'Prix TTC',
  'Shop ID',
  'TVA',
  'Reference',
];
