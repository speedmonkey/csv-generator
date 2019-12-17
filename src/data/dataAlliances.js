const POIDS_PIERRE = {
  name: 'Poids pierre au centre (carat)',
  selectValues: ['0,30 - 1,50', '0,50 - 1,50', '1 - 1,50'],
  defaultValue: '0,30 - 1,50',
};

const POIDS_METAL = {
  name: 'Poids moyen du métal grammes',
  selectValues: ['1', '2', '3', '4'],
  defaultValue: '',
};

export const selectAlliances = [POIDS_PIERRE, POIDS_METAL];
