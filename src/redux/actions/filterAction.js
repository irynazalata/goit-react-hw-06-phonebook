import types from '../action-types';

const filterContacts = value => ({
  type: types.FILTER_CONTACTS,
  payload: {
    value,
  },
});
export default filterContacts;
