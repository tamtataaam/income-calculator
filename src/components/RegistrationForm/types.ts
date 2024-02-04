import { Dispatch, SetStateAction } from 'react';

export type RegistrationFormProps = {
  setLogin: Dispatch<SetStateAction<boolean>>;
};

export type FormData = {
  nickname: { value: string };
  email: { value: string };
  password: { value: string };
  repeatedPassword: { value: string };
};
