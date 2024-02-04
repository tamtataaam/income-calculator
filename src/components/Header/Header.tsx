import { Link } from '@mui/material';
import { DONATE_URL } from 'api';
import { useAppDispatch, useAppSelector } from 'hooks';
import { userLogout } from 'store/user';

import './Header.scss';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((store) => store.user);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className="header">
      <a target="_blank" rel="noopener noreferrer" href={DONATE_URL}>
        Отправить благодарность автору
      </a>

      <div className="user-info">
        {userInfo?.email}
        <Link onClick={handleLogout}>Выход</Link>
      </div>
    </div>
  );
};
