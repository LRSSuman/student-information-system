import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageNotFound: false,
};

const pageNotFoundSlice = createSlice({
    name: 'pageNotFound',
    initialState,
    reducers: {
        setPageNotFound(state, _) {
            state.pageNotFound = !state.pageNotFound;
            console.log(state.pageNotFound);
        },
    },
});

export const { setPageNotFound } = pageNotFoundSlice.actions;

export default pageNotFoundSlice.reducer;
