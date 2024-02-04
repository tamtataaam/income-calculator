import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { AuthPage, MainPage } from 'pages';
import { loadUser } from 'store/user';
import { loadAllIncomes } from 'store/income';

export const App = () => {
  const dispatch = useAppDispatch();
  const { userInfo, userLoading } = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo?.isAuthenticated && userInfo?.isActive) {
      dispatch(loadAllIncomes());
    }
  }, [dispatch, userInfo?.isAuthenticated, userInfo?.isActive]);

  if (userLoading) {
    // TODO: loading
    return null;
  }

  return (
    <Routes>
      {userInfo?.isAuthenticated && userInfo?.isActive ? (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
};
