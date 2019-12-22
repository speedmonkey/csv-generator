/*
  |-----------------------------------------------------------------------------
  | [SelectValues] 
  |-----------------------------------------------------------------------------
*/

const DIAMETRE_DIAMANT = {
  name: 'Diametre diamant',
  selectValues: [
    'entre 2.3 et 4.5 mm',
    'entre 2.3 et 4.6 mm',
    'entre 2.3 et 4.7 mm',
    'entre 2.3 et 4.8 mm',
    'entre 2.3 et 4.9 mm',
    'entre 2.3 et 5 mm',
    'entre 2.3 et 5.1 mm',
  ],
  defaultValue: 'entre 2.3 et 5.1 mm',
};

const COULEUR_DIAMANT = {
  name: 'Couleur diamants',
  selectValues: ['D - I', 'IF - L1', 'D - E - G ou H'],
  defaultValue: 'D - E - G ou H',
};

const PURETE_DIAMANTS = {
  name: 'Purete',
  selectValues: [
    'IF - L1',
    'D - I',
    'IF - VVS2 - VS1 -SI1',
  ],
  defaultValue: 'IF - VVS2 - VS1 -SI1',
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

const FERMOIR_UTILISE = {
  name: 'Fermoir utilise',
  selectValues: [
    'Haute sécurité',
    'Bonne sécurité',
    'Double sécurité',
  ],
  defaultValue: 'Double sécurité',
};

export const selectColliers = [
  DIAMETRE_DIAMANT,
  COULEUR_DIAMANT,
  PURETE_DIAMANTS,
  METAL_UTILISE,
  FERMOIR_UTILISE,
];

/*
  |-----------------------------------------------------------------------------
  | [NumberValues] 
  |-----------------------------------------------------------------------------
*/

const POIDS_MOYEN = {
  name: 'Poids moyen du metal',
  defaultValue: 20,
  step: 0.1,
};

const DIAMANTS_PAVAGES = {
  name: 'Nombre de diamants de pavage',
  defaultValue: 150,
  step: 1,
};

const POIDS_DIAMANTS_PAVAGES = {
  name: 'Poids des diamants de pavages',
  defaultValue: 15,
  step: 0.1,
};

export const numberColliers = [
  POIDS_MOYEN,
  DIAMANTS_PAVAGES,
  POIDS_DIAMANTS_PAVAGES,
];
