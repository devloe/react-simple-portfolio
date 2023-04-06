import { configureStore } from '@reduxjs/toolkit';
import themeStore from './stores/themeStore';

export const store = configureStore({
  reducer: {
    theme: themeStore.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
