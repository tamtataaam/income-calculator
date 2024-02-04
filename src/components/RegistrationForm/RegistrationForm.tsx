import { FC, FormEvent, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import { FormData, RegistrationFormProps } from './types';

import './RegistrationForm.scss';
import { clearState, userRegistration } from 'store/user';

export const RegistrationForm: FC<RegistrationFormProps> = ({ setLogin }) => {
  const dispatch = useAppDispatch();
  const { registrationErrorMsg, registrationMsg } = useAppSelector((store) => store.user);

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickLogin = () => {
    setLogin((login) => !login);
    dispatch(clearState());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormData;

    const data = {
      nickname: target.nickname.value,
      email: target.email.value,
      password: target.password.value,
      repeatedPassword: target.repeatedPassword.value,
    };

    dispatch(userRegistration(data));
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Регистрация</h2>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="nickname">Логин</InputLabel>
        <OutlinedInput id="nickname" type="text" label="nickname" />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput id="email" type="email" label="email" />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="password">Пароль</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Пароль"
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="repeatedPassword">Повторите пароль</InputLabel>
        <OutlinedInput
          id="repeatedPassword"
          type={showRepeatedPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowRepeatedPassword((show) => !show)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showRepeatedPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Повторите пароль"
        />
      </FormControl>

      <div className="error-message">{registrationErrorMsg}</div>
      <div className="success-message">{registrationMsg}</div>

      <Button variant="contained" type="submit">
        Зарегистрироваться
      </Button>

      <div>
        Уже есть аккаунт? <Link onClick={handleClickLogin}>Войди</Link>
      </div>
    </form>
  );
};
