import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="header">
      <a
        // target="_blank"
        href="/#"
      >
        Отправить благодарность автору
      </a>

      <div className="user-info">
        user@mail.ru
        <Link onClick={handleLogout}>Выход</Link>
      </div>
    </div>
  );
};
