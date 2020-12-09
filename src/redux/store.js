import { createStore, combineReducers } from 'redux';
import contactReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
