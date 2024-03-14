import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

export const store = configureStore({
    devTools: false,
    reducer: rootReducer,
});
