/*
  |-----------------------------------------------------------------------------
  | [SelectValues] 
  |-----------------------------------------------------------------------------
*/

const POIDS_PIERRE = {
  name: 'Poids pierre au centre (carat)',
  selectValues: ['0,30 - 1,50', '0,50 - 1,50'],
  defaultValue: '0,30 - 1,50',
};

const COULEUR_DIAMANTS = {
  name: 'Couleur diamants',
  selectValues: ['D - I', 'IF - L1'],
  defaultValue: 'D - I',
};

const COULEUR_DIAMANTS_COTES = {
  name: 'Couleur des diamants de côtés',
  selectValues: ['D - I', 'IF - L1'],
  defaultValue: 'D - I',
};

const PURETE_DIAMANTS = {
  name: 'Pureté',
  selectValues: ['IF - L1', 'D - I'],
  defaultValue: 'IF - L1',
};

const PURETE_DIAMANTS_COTES = {
  name: 'Pureté des diamants de côtés',
  selectValues: ['IF - L1', 'D - I'],
  defaultValue: 'IF - L1',
};

const METAL_UTILISE = {
  name: 'Métal utilisé',
  selectValues: [
    'Or Blanc 750/1000',
    'Or Jaune 750/1000',
    'Or Rose 750/1000',
    'Platine 950/1000',
  ],
  defaultValue: 'Or Blanc 750/1000',
};

const COULEUR_METAL = {
  name: 'Couleur du métal',
  selectValues: ['Blanc', 'Jaune', 'Rose', 'Platine'],
  defaultValue: 'Blanc',
};

const LARGEUR_ANNEAU = {
  name: "Largeur de l'anneau (mm)",
  selectValues: [
    '1.69 - 1.74',
    '1.70 - 1.75',
    '1.60 - 1.80',
    'Aucun',
  ],
  defaultValue: '1.69 - 1.74',
};

export const selectSolitaires = [
  POIDS_PIERRE,
  COULEUR_DIAMANTS,
  COULEUR_DIAMANTS_COTES,
  PURETE_DIAMANTS,
  PURETE_DIAMANTS_COTES,
  METAL_UTILISE,
  COULEUR_METAL,
  LARGEUR_ANNEAU,
];

/*
  |-----------------------------------------------------------------------------
  | [NumberValues] 
  |-----------------------------------------------------------------------------
*/

const POIDS_MOYEN = {
  name: 'Poids moyen du métal',
  defaultValue: 3.1,
  step: 0.1,
};

const DIAMANTS_CENTRAL = {
  name: 'Nombre diamant central',
  defaultValue: 1,
  step: 1,
};

const DIAMANTS_PAVAGES = {
  name: 'Nombre de diamants de pavage',
  defaultValue: 18,
  step: 1,
};

const POIDS_DIAMANTS_PAVAGES = {
  name: 'Poids des diamants de pavages',
  defaultValue: 0.4,
  step: 0.1,
};

const EPAISSEUR_ANNEAU = {
  name: "Epaisseur de l'anneau",
  defaultValue: 2.65,
  step: 0.01,
};

export const numberSolitaires = [
  POIDS_MOYEN,
  DIAMANTS_CENTRAL,
  DIAMANTS_PAVAGES,
  POIDS_DIAMANTS_PAVAGES,
  EPAISSEUR_ANNEAU,
];
