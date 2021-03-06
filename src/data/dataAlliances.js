/*
  |-----------------------------------------------------------------------------
  | [SelectValues] 
  |-----------------------------------------------------------------------------
*/

const COULEUR_DIAMANT = {
  name: 'Couleur diamants',
  selectValues: ['D - I', 'IF - L1', 'D - E - G ou H'],
  defaultValue: 'D - I',
};

const PURETE_DIAMANTS = {
  name: 'Purete',
  selectValues: [
    'IF - L1',
    'D - I',
    'IF - VVS2 - VS1 -SI1',
  ],
  defaultValue: 'IF - L1',
};

const METAL_UTILISE = {
  name: 'Metal utilise',
  selectValues: [
    'Or Blanc 750/1000',
    'Or Jaune 750/1000',
    'Or Rose 750/1000',
    'Platine 950/1000',
  ],
  defaultValue: 'Or Blanc 750/1000',
};

const TOUR_DOIGT = {
  name: 'Tour de doigt',
  selectValues: ['46 - 60', '30 - 40', '40 - 60'],
  defaultValue: '46-60',
};

const COULEUR_METAL = {
  name: 'Couleur du metal',
  selectValues: ['Blanc', 'Jaune', 'Rose', 'Platine'],
  defaultValue: 'Blanc',
};

export const selectAlliances = [
  COULEUR_DIAMANT,
  PURETE_DIAMANTS,
  METAL_UTILISE,
  TOUR_DOIGT,
  COULEUR_METAL,
];

/*
  |-----------------------------------------------------------------------------
  | [NumberValues] 
  |-----------------------------------------------------------------------------
*/

const POIDS_MOYEN = {
  name: 'Poids moyen du metal',
  defaultValue: 2.6,
  step: 0.1,
};

const DIAMANTS_PAVAGES = {
  name: 'Nombre de diamants de pavage',
  defaultValue: 38,
  step: 1,
};

const POIDS_DIAMANTS_PAVAGES = {
  name: 'Poids des diamants de pavages',
  defaultValue: 0.6,
  step: 0.1,
};

const LARGEUR_ANNEAU = {
  name: "Largeur de l'anneau (mm)",
  defaultValue: 1.7,
  step: 0.01,
};

const EPAISSEUR_ANNEAU = {
  name: "Epaisseur de l'anneau",
  defaultValue: 1.6,
  step: 0.01,
};

export const numberAlliances = [
  POIDS_MOYEN,
  DIAMANTS_PAVAGES,
  POIDS_DIAMANTS_PAVAGES,
  LARGEUR_ANNEAU,
  EPAISSEUR_ANNEAU,
];
