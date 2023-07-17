import { createSlice } from '@reduxjs/toolkit';

interface Token {
  token: string;
  username: string;
  expires: Date;
}

interface UserState {
  refreshToken?: string;
  token?: Token;
}

const initialState: UserState = {
  refreshToken: undefined,
  token: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    logIn: (state, action) => {
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
    },
  },
});

export const { logIn } = userSlice.actions;

export default userSlice.reducer;