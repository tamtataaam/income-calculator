import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store';

import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
