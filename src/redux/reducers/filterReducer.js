import types from '../action-types';

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACTS:
      return payload.value;

    default:
      return state;
  }
};

export default filterReducer;
