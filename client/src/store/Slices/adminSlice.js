import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    add: false,
    edit: false,
    view: false,
    editValue: {},
    isAdmin: false,
};

const adminSlice = createSlice({
    name: 'adminRole',
    initialState,
    reducers: {
        setAdminRole(state, action) {
            if (action.payload.add === true) {
                state.add = true;
                state.edit = false;
                state.view = false;
            }
            if (action.payload.edit === true) {
                state.add = false;
                state.view = false;
                state.edit = true;
            }
            if (action.payload.default === true) {
                state.view = false;
                state.add = false;
                state.edit = false;
            }
            if (action.payload.view === true) {
                state.view = true;
                state.add = false;
                state.edit = false;
                state.viewValue = action.payload.viewValue;
            }
            state.editValue = action.payload.editValue;
        },
        setIsAdmin(state, action) {
            state.isAdmin = action.payload;
        },
    },
});

export const { setAdminRole, setIsAdmin } = adminSlice.actions;

export default adminSlice.reducer;
