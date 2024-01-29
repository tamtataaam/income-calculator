import { Header } from '../../components/Header/Header';
import { Tabs } from '../../components/Tabs/Tabs';

import './MainPage.scss';

export const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <Tabs />
    </div>
  );
};
