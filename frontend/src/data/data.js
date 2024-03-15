import { icons, images } from '../utils/images';

// navigation links
export const navigationLinks = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'Teacher' },
    { id: 3, title: 'Subject' },
    { id: 4, title: 'Time Table' },
    { id: 5, title: 'Events' },
    { id: 6, title: 'Fees' },
    { id: 7, title: 'Circular' },
];

export const personalDetailS = {
    l: [
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
    ],
    r: [
        { id: 6, title: 'Gender', data: 'Female' },
        { id: 7, title: 'Date of Birth', data: '22 Apr 1995' },
        {
            id: 8,
            title: 'Address',
            data: ['480,', 'Estern Avenue,', 'New York'],
        },
        { id: 9, title: 'Email', data: 'alicedoe@gmail.com' },
        { id: 10, title: 'Mobile', data: '9876543210' },
    ],
};

export const yourProfile = {
    dp: images.profile,
    alt: 'profile',
    name: 'ALICE-DOE',
    rollNo: '9613211034001',
};

export const cardData = [
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
