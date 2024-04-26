import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    studentList: [],
    teacherList: [],
    subjectList: [],
    timetableList: [],
};

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setStudentList(state, action) {
            state.studentList = action.payload;
        },
        setTeacherList(state, action) {
            state.teacherList = action.payload;
        },
        setSubjectList(state, action) {
            state.subjectList = action.payload;
        },
        setTimetableList(state, action) {
            state.timetableList = action.payload;
            console.log(state.timetableList);
        },
    },
});

export const {
    setStudentList,
    setTeacherList,
    setSubjectList,
    setTimetableList,
} = listSlice.actions;
export default listSlice.reducer;
