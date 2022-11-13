import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const RootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});
// console.log(store.getState());
