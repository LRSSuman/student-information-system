import { combineReducers } from '@reduxjs/toolkit';
import sidebarSlice from './Slices/sidebarSlice';
import contentTopSlice from './Slices/contentTopSlice';
import pageNotFoundSlice from './Slices/pageNotFoundSlice';
import homeDataSlice from './Slices/homeDataSlice';
import adminSlice from './Slices/adminSlice';
import ListSlice from './Slices/ListSlice';

const rootReducer = combineReducers({
    pageNotFound: pageNotFoundSlice,
    sidebar: sidebarSlice,
    contentTop: contentTopSlice,
    homeData: homeDataSlice,
    adminRole: adminSlice,
    listSlice: ListSlice,
});

export default rootReducer;
