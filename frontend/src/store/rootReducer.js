import { combineReducers } from '@reduxjs/toolkit';
import sidebarSlice from './Slices/sidebarSlice';
import contentTopSlice from './Slices/contentTopSlice';

const rootReducer = combineReducers({
    sidebar: sidebarSlice,
    contentTop: contentTopSlice,
});

export default rootReducer;
