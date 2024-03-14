import { combineReducers } from '@reduxjs/toolkit';
import sidebarSlice from './Slices/sidebarSlice';

const rootReducer = combineReducers({
    sidebar: sidebarSlice,
});

export default rootReducer;
