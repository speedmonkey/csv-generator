import {
  INCREMENT,
  DECREMENT,
} from 'constants/homeConstants';

import produce from 'immer';

const initialState = {
  counter: 0,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.counter += 1;
        break;
      case DECREMENT:
        draft.counter -= 1;
        break;
    }
  });

export default homeReducer;
