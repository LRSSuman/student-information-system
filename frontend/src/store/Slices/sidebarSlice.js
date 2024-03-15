import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggleSidebar: false,
    isSidebarClose: false,
    blur: '',
    scroll: '',
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setToggleSidebar(state, _) {
            state.toggleSidebar = !state.toggleSidebar;
            if (state.toggleSidebar == true && state.isSidebarClose == true) {
                state.scroll = 'no-scroll';
                state.blur = 'blur-active';
            } else {
                state.scroll = '';
                state.blur = '';
            }
        },
        setSidebarClose(state, action) {
            state.isSidebarClose = action.payload;
        },
    },
});

export const { setToggleSidebar, setSidebarClose } = sidebarSlice.actions;

export default sidebarSlice.reducer;
