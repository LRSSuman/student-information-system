import { combineReducers } from '@reduxjs/toolkit';
import sidebarSlice from './Slices/sidebarSlice';
import contentTopSlice from './Slices/contentTopSlice';
import pageNotFoundSlice from './Slices/pageNotFoundSlice';

const rootReducer = combineReducers({
    pageNotFound: pageNotFoundSlice,
    sidebar: sidebarSlice,
    contentTop: contentTopSlice,
});

export default rootReducer;
