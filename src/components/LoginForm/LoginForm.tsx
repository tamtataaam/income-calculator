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
import { FormData } from 'components/RegistrationForm/types';
import { clearState, userLogin } from 'store/user';
import { LoginFormProps } from './types';

import './LoginForm.scss';

export const LoginForm: FC<LoginFormProps> = ({ setLogin }) => {
  const dispatch = useAppDispatch();
  const errorMsg = useAppSelector((store) => store.user.loginErrorMsg);

  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickRegistration = () => {
    setLogin((login) => !login);
    dispatch(clearState());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormData;

    const data = {
      email: target.email.value,
      password: target.password.value,
    };

    dispatch(userLogin(data));
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Вход</h2>

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

      <div className="error-message">{errorMsg}</div>

      <Button type="submit" variant="contained">
        Войти
      </Button>

      <div>
        Нет аккаунта? <Link onClick={handleClickRegistration}>Зарегистрируйся</Link>
      </div>
    </form>
  );
};
