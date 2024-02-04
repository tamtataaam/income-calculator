import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'api';

type UserRegistrationBody = {
  nickname: string;
  email: string;
  password: string;
  repeatedPassword: string;
};
export const userRegistration = createAsyncThunk(
  'user/userRegistration',
  async (body: UserRegistrationBody) => {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    if (response.status >= 400) {
      const { message } = await response.json();
      throw new Error(message);
    } else {
      const { message } = await response.json();
      return message;
    }
  },
);

type UserLoginBody = {
  email: string;
  password: string;
};
export const userLogin = createAsyncThunk('user/userLogin', (body: UserLoginBody) =>
  fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      if (body.message) {
        throw new Error(body.message);
      }
      return body;
    }),
);

export const loadUser = createAsyncThunk('user/loadUser', () =>
  fetch(`${BASE_URL}/users`, { credentials: 'include' })
    .then((response) => response.json())
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      if (body.message) {
        throw new Error(body.message);
      }
      return body;
    }),
);

export const userLogout = createAsyncThunk('user/userLogout', () =>
  fetch(`${BASE_URL}/users/logout`, { credentials: 'include' })
    .then((response) => response.json())
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      return body;
    }),
);
