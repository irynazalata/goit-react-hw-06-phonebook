import types from '../action-types';

const addContact = ({ id, name, number }) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: id,
    name: name,
    number: number,
  },
});

const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: {
    id,
  },
});

export default { addContact, deleteContact };
