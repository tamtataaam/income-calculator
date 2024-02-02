import { Route, Routes } from 'react-router-dom';
import { AuthPage, NotFoundPage, MainPage } from 'pages';

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <Routes>
        {isUser ? (
          <>
            <Route index element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes> */}
    </>
  );
};
