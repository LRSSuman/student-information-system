import { icons, images } from '../utils/images';

// navigation links
export const studentNavigationLinks = [
    { id: 1, title: 'Home', navigation: '/student/home' },
    { id: 2, title: 'Teachers', navigation: '/student/teachers' },
    { id: 3, title: 'Subjects', navigation: '/student/subjects' },
    { id: 4, title: 'Time Table', navigation: '/student/timetable' },
];

export const teacherNavigationLinks = [
    { id: 1, title: 'Home', navigation: '/teacher/home' },
    { id: 2, title: 'Students', navigation: '/teacher/students' },
    { id: 3, title: 'Subjects', navigation: '/teacher/subjects' },
    { id: 4, title: 'Time Table', navigation: '/teacher/timetable' },
];

export const studentPersonalDetails = [
    {
        id: 1,
        title: 'Name',
        data: 'ALICE-DOE',
    },
    {
        id: 2,
        title: 'Department',
        data: 'CSE',
    },
    {
        id: 3,
        title: 'Year',
        data: 'Thirs',
    },
    {
        id: 4,
        title: 'Arrears',
        data: '3',
    },
    {
        id: 5,
        title: 'CGPA',
        data: '70',
    },

    { id: 6, title: 'Gender', data: 'Female' },
    { id: 7, title: 'Date of Birth', data: '22 Apr 1995' },
    {
        id: 8,
        title: 'Address',
        data: ['480,', 'Estern Avenue,', 'New York'],
    },
    { id: 9, title: 'Email', data: 'alicedoe@gmail.com' },
    { id: 10, title: 'Mobile', data: '9876543210' },
];
export const teacherPersonalDetails = [
    {
        id: 1,
        title: 'Name',
        data: 'ALICE-DOE',
    },
    {
        id: 2,
        title: 'Department',
        data: 'CSE',
    },
    {
        id: 3,
        title: 'Role',
        data: 'incharge',
    },
    {
        id: 4,
        title: 'Experience',
        data: '3 year',
    },
    {
        id: 5,
        title: 'Total Subjects',
        data: '3',
    },

    { id: 6, title: 'Gender', data: 'Female' },
    { id: 7, title: 'Date of Birth', data: '22 Apr 1995' },
    // {
    //     id: 8,
    //     title: 'Address',
    //     data: ['480,', 'Estern Avenue,', 'New York'],
    // },
    { id: 9, title: 'Email', data: 'alicedoe@gmail.com' },
    { id: 10, title: 'Mobile', data: '9876543210' },
];

export const yourProfileStudent = {
    dp: images.profile,
    alt: 'profile',
    name: 'ALICE-DOE',
    rollNo: '9613211034001',
};

export const yourProfileTeacher = {
    dp: images.profile,
    alt: 'profile',
    name: 'ALICE-DOE',
    rollNo: 'alicedoe@gmail.com',
};

export const studentCardData = [
    {
        id: 1,
        title: 'Current Subjects',
        data: '6',
        icon: icons.subject,
        alt: 'subject',
    },
    {
        id: 2,
        title: 'Assignment Submited',
        data: '6/18',
        icon: icons.assignment,
        alt: 'assignment',
    },
    {
        id: 3,
        title: 'Attendance Percentage %',
        data: '85/100',
        icon: icons.attendance,
        alt: 'attendance',
    },
];
export const teacherCardData = [
    {
        id: 1,
        title: 'Total Subjects',
        data: '3',
        icon: icons.subject,
        alt: 'subject',
    },
    {
        id: 2,
        title: 'Work Experience(Year)',
        data: '3',
        icon: icons.assignment,
        alt: 'assignment',
    },
    {
        id: 3,
        title: 'Attendance',
        data: '18/25',
        icon: icons.attendance,
        alt: 'attendance',
    },
];

export const teacherList = [
    { id: '1', dp: images.profile, name: 'john', role: 'incharge' },
    { id: '2', dp: images.profile, name: 'wick', role: 'staff' },
    { id: '3', dp: images.profile, name: 'spider', role: 'staff' },
    { id: '4', dp: images.profile, name: 'man', role: 'staff' },
    { id: '5', dp: images.profile, name: 'hulk', role: 'staff' },
    { id: '6', dp: images.profile, name: 'thor', role: 'staff' },
];

export const studentList = [
    {
        id: '1',
        dp: images.profile,
        name: 'john',
        email: 'alicedoe@gmail.com',
        rollNo: '961321104001',
        role: 'cse',
    },
    {
        id: '2',
        dp: images.profile,
        name: 'wick',
        email: 'alicedoe@gmail.com',
        rollNo: '961321104001',
        role: 'cse',
    },
    {
        id: '3',
        dp: images.profile,
        name: 'spider',
        email: 'alicedoe@gmail.com',
        rollNo: '961321104001',
        role: 'cse',
    },
    {
        id: '4',
        dp: images.profile,
        name: 'man',
        email: 'alicedoe@gmail.com',
        rollNo: '961321104001',
        role: 'cse',
    },
    {
        id: '5',
        dp: images.profile,
        name: 'hulk',
        email: 'alicedoe@gmail.com',
        rollNo: '961321104001',
        role: 'cse',
    },
    {
        id: '6',
        dp: images.profile,
        name: 'thor',
        email: 'alicedoe@gmail.com',
        rollNo: '961321104001',
        role: 'cse',
    },
];

export const subjectList = [
    { id: '1', dp: icons.subject, name: 'physics', year: '1st year' },
    { id: '2', dp: icons.subject, name: 'english', year: '2nd year' },
    { id: '3', dp: icons.subject, name: 'chemistry', year: '3rd year' },
    { id: '4', dp: icons.subject, name: 'computer', year: '4th year' },
    { id: '5', dp: icons.subject, name: 'tamil', year: '1st year' },
];
