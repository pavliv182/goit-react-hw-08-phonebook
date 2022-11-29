import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['auth'],
  // в whiteList было значение 'token'
};

// const RootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   auth: authReducer,
// });

// const RootReducer = combineReducers({
//   authReducer,
// });

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
