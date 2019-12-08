import {
  INCREMENT,
  DECREMENT,
} from 'constants/homeConstants';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decrementAction() {
  return {
    type: DECREMENT,
  };
}
