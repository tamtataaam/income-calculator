import { useState } from 'react';
import { LoginForm, RegistrationForm } from 'components';

import './AuthPage.scss';

export const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="auth-page">
      {
        login 
          ? <LoginForm setLogin={setLogin} /> 
          : <RegistrationForm setLogin={setLogin} />
      }
    </div>
  );
};
