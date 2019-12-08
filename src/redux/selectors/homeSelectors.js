import { createSelector } from 'reselect';

export const homeSelector = state => state.home;

export const counterSelector = createSelector(
  homeSelector,
  home => home.counter,
);
