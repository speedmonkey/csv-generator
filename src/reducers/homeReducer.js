import {
  INCREMENT,
  DECREMENT,
} from 'constants/homeConstants';

import produce from 'immer';

const initialState = {
  counter: 0,
};

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      draft.counter += 1;
      break;
    case DECREMENT:
      if (draft.counter !== 0) draft.counter -= 1;
      break;
    default:
      return draft;
  }
});
