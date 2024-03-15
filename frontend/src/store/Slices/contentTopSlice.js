import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDropdownVisible: false,
    toggleDropdown: false,
    dropdown: '',
};

const contentTopSlice = createSlice({
    name: 'contentTop',
    initialState,
    reducers: {
        setToggleDropdown(state, _) {
            state.toggleDropdown = !state.toggleDropdown;
            if (state.toggleDropdown) {
                state.dropdown = 'dropdown-visible';
            } else {
                state.dropdown = '';
            }
        },
        setDropdownVisible(state, action) {
            state.isDropdownVisible = action.payload;
        },
    },
});

export const { setDropdownVisible, setToggleDropdown } =
    contentTopSlice.actions;

export default contentTopSlice.reducer;
