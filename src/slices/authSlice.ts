import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface AuthState {
  value: boolean;
}

const initialState: AuthState = {
  value: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const selectAuthorized = (state: RootState) => state.auth.value;

export const { setAuthorized } = authSlice.actions;

export default authSlice.reducer;
