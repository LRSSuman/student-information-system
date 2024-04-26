import { createSlice } from '@reduxjs/toolkit';
import { icons, images } from '../../utils/images';

const initialState = {
    personalDetails: [],
    cardData: [],
    yourProfile: {},
};

const homeDataSlice = createSlice({
    name: 'studentData',
    initialState,
    reducers: {
        setHomeData(state, action) {
            const { data } = action.payload;
            console.log(data);
            console.log(action.payload);
            if (action.payload.student == true) {
                state.personalDetails = [
                    {
                        id: 1,
                        title: 'Name',
                        data: data.name,
                    },
                    {
                        id: 2,
                        title: 'Department',
                        data: data.department,
                    },
                    {
                        id: 3,
                        title: 'Year',
                        data: data.year,
                    },
                    {
                        id: 4,
                        title: 'Arrears',
                        data: data.arrears,
                    },
                    {
                        id: 5,
                        title: 'CGPA',
                        data: data.cgpa,
                    },

                    { id: 6, title: 'Gender', data: data.gender },
                    { id: 7, title: 'Date of Birth', data: data.dob },
                    {
                        id: 8,
                        title: 'Address',
                        data: data.address,
                    },
                    { id: 9, title: 'Email', data: data.email },
                    { id: 10, title: 'Mobile', data: data.mobile },
                ];
                state.cardData = [
                    {
                        id: 1,
                        title: 'Current Subjects',
                        data: data.currentSubject,
                        icon: icons.subject,
                        alt: 'subject',
                    },
                    {
                        id: 2,
                        title: 'Assignment Submited',
                        data: data.assignmentSubmitted,
                        icon: icons.assignment,
                        alt: 'assignment',
                    },
                    {
                        id: 3,
                        title: 'Attendance Percentage %',
                        data: data.attendancePercentage,
                        icon: icons.attendance,
                        alt: 'attendance',
                    },
                ];
                state.yourProfile = {
                    name: data.name,
                    image: data.Image,
                    rollNo: data.rollNo,
                };
            }
            if (action.payload.teacher == true) {
                state.personalDetails = [
                    {
                        id: 1,
                        title: 'Name',
                        data: data.name,
                    },
                    {
                        id: 2,
                        title: 'Department',
                        data: data.department,
                    },
                    {
                        id: 3,
                        title: 'Role',
                        data: data.role,
                    },
                    {
                        id: 4,
                        title: 'Experience',
                        data: data.experience,
                    },
                    {
                        id: 5,
                        title: 'Total Subjects',
                        data: data.totalSubjects,
                    },

                    { id: 6, title: 'Gender', data: data.gender },
                    { id: 7, title: 'Date of Birth', data: data.dob },

                    { id: 8, title: 'Email', data: data.email },
                    { id: 9, title: 'Mobile', data: data.mobile },
                ];
                state.cardData = [
                    {
                        id: 1,
                        title: 'Total Subjects',
                        data: data.totalSubjects,
                        icon: icons.subject,
                        alt: 'subject',
                    },
                    {
                        id: 2,
                        title: 'Work Experience(Year)',
                        data: data.experience,
                        icon: icons.assignment,
                        alt: 'assignment',
                    },
                    {
                        id: 3,
                        title: 'Attendance',
                        data: data.attendance,
                        icon: icons.attendance,
                        alt: 'attendance',
                    },
                ];
                state.yourProfile = {
                    image: data.Image,
                    alt: 'profile',
                    name: data.name,
                    rollNo: data.email,
                };
            }
        },
    },
});

export const { setHomeData } = homeDataSlice.actions;

export default homeDataSlice.reducer;
