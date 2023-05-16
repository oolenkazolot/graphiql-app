import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
