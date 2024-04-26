import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggleSidebar: false,
    isSidebarClose: false,
    blur: '',
    scroll: '',
    navLinks: [],
    loginPage: false,
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
        setNavlinks(state, _) {
            state.navLinks = JSON.parse(sessionStorage.getItem('navLinks'));
        },
        setLoginPage(state, action) {
            state.loginPage = action.payload;
        },
    },
});

export const { setToggleSidebar, setSidebarClose, setNavlinks, setLoginPage } =
    sidebarSlice.actions;

export default sidebarSlice.reducer;
