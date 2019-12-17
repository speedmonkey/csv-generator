const COULEUR_DIAMANTS = {
  name: 'Couleur diamants :',
  selectValues: ['D - I', 'IF - L1'],
  defaultValue: 'D - I',
};

const COULEUR_DIAMANTS_COTES = {
  name: 'Couleur des diamants de côtés :',
  selectValues: ['D - I', 'IF - L1'],
  defaultValue: 'D - I',
};

const PURETE_DIAMANTS = {
  name: 'Pureté :',
  selectValues: ['IF - L1', 'D - I'],
  defaultValue: 'IF - L1',
};

const PURETE_DIAMANTS_COTES = {
  name: 'Pureté des diamants de côtés :',
  selectValues: ['IF - L1', 'D - I'],
  defaultValue: 'IF - L1',
};

const METAL_UTILISE = {
  name: 'Métal utilisé :',
  selectValues: [
    'Or Blanc 750/1000',
    'Or Jaune 750/1000',
    'Or Rose 750/1000',
    'Platine 950/1000',
  ],
  defaultValue: 'Or Blanc 750/1000',
};

const COULEUR_METAL = {
  name: 'Couleur du métal :',
  selectValues: ['Blanc', 'Jaune', 'Rose', 'Platine'],
  defaultValue: 'Blanc',
};

export const selectSolitaires = [
  COULEUR_DIAMANTS,
  COULEUR_DIAMANTS_COTES,
  PURETE_DIAMANTS,
  PURETE_DIAMANTS_COTES,
  METAL_UTILISE,
  COULEUR_METAL,
];
