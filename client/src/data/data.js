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
export const adminNavigationLinks = [
    { id: 1, title: 'Students', navigation: '/admin/students' },
    { id: 2, title: 'teachers', navigation: '/admin/teachers' },
    { id: 3, title: 'Subjects', navigation: '/admin/subjects' },
    { id: 4, title: 'Time Table', navigation: '/admin/timetable' },
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
    {
        id: '1',
        dp: images.profile,
        dept: 'cse',
        name: 'john',
        role: 'incharge',
        email: 'alicedoe@gmail.com',
    },
    {
        id: '2',
        dp: images.profile,
        dept: 'cse',
        name: 'wick',
        role: 'staff',
        email: 'alicedoe@gmail.com',
    },
    {
        id: '3',
        dp: images.profile,
        dept: 'cse',
        name: 'spider',
        role: 'staff',
        email: 'alicedoe@gmail.com',
    },
    {
        id: '4',
        dp: images.profile,
        dept: 'cse',
        name: 'man',
        role: 'staff',
        email: 'alicedoe@gmail.com',
    },
    {
        id: '5',
        dp: images.profile,
        dept: 'cse',
        name: 'hulk',
        role: 'staff',
        email: 'alicedoe@gmail.com',
    },
    {
        id: '6',
        dp: images.profile,
        dept: 'cse',
        name: 'thor',
        role: 'staff',
        email: 'alicedoe@gmail.com',
    },
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
    {
        id: '1',
        dp: icons.subject,
        name: 'ph3151',
        email: 'engineering-physics',
        year: '1st year',
    },
    {
        id: '2',
        dp: icons.subject,
        name: 'ch3151',
        email: 'engineering-physics',
        year: '2nd year',
    },
    {
        id: '3',
        dp: icons.subject,
        name: 'mh3151',
        email: 'engineering-physics',
        year: '3rd year',
    },
    {
        id: '4',
        dp: icons.subject,
        name: 'cl3152',
        email: 'engineering-physics',
        year: '4th year',
    },
    {
        id: '5',
        dp: icons.subject,
        name: 'tl3151',
        email: 'engineering-physics',
        year: '1st year',
    },
];
