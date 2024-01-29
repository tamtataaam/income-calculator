import { combineReducers, configureStore } from '@reduxjs/toolkit';
import incomeNowReducer from './IncomeNow/slice';

const rootReducer = combineReducers({
  incomeNowReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
