import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './NotFoundPage.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h3>Страница не найдена</h3>
      <Button variant="contained" size="small" onClick={() => navigate('/')}>
        Вернуться на главную
      </Button>
    </div>
  );
};
