import { createSlice } from '@reduxjs/toolkit';
import { loadUser, userLogin, userLogout, userRegistration } from './thunk';
import { UserState } from './types';

const initialState: UserState = {
  userInfo: null,
  registrationErrorMsg: null,
  registrationMsg: null,
  loginErrorMsg: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState(state) {
      state.loginErrorMsg = null;
      state.registrationErrorMsg = null;
      state.registrationMsg = null;
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegistration.rejected, (state, action) => {
        state.registrationErrorMsg = action.error.message as string;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.registrationErrorMsg = null;
        state.registrationMsg = action.payload;
      })

      .addCase(userLogin.rejected, (state, action) => {
        state.loginErrorMsg = action.error.message as string;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        if (!action.payload.isActive) {
          state.loginErrorMsg = `Аккаунт не активирован. На вашу почту была отправлена ссылка для активации.`;
        }
        state.userInfo = action.payload;
      })

      // .addCase(loadUser.rejected, (state, action) => {
      //   // TODO
      // })
      .addCase(loadUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.userLoading = false;
      })

      // .addCase(userLogout.rejected, (state, action) => {
      //   // TODO
      // })
      .addCase(userLogout.fulfilled, (state) => {
        state.userInfo = null;
      });
  },
});

export const { clearState } = userSlice.actions;

export default userSlice;
