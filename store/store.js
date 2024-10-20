import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from '../src/slices/productSlice';
import globalVariablesReducer from '../src/slices/globalVariablesSlice';
import categoriesReducer from '../src/slices/categoriesSlice';
import categoryProductReducer from '../src/slices/categoryProductSlice';
import userAuthReducer from '../src/slices/userAuthSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userAuthReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    products: productReducer,
    selectCategory: globalVariablesReducer,
    categoriesApi: categoriesReducer,
    CategoryProduct: categoryProductReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
