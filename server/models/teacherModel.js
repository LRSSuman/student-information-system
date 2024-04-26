const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    Image: String,
    name: String,
    department: String,
    role: String,
    experience: String,
    totalSubjects: String,
    gender: String,
    dob: String,
    email: String,
    mobile: String,
    attendance: String,
    password: String,
    timetable: {
        monday: {
            first: String,
            second: String,
            third: String,
            fourth: String,
            fifth: String,
            sixth: String,
        },
        tuesday: {
            first: String,
            second: String,
            third: String,
            fourth: String,
            fifth: String,
            sixth: String,
        },
        wednesday: {
            first: String,
            second: String,
            third: String,
            fourth: String,
            fifth: String,
            sixth: String,
        },
        thursday: {
            first: String,
            second: String,
            third: String,
            fourth: String,
            fifth: String,
            sixth: String,
        },
        friday: {
            first: String,
            second: String,
            third: String,
            fourth: String,
            fifth: String,
            sixth: String,
        },
        saturday: {
            first: String,
            second: String,
            third: String,
            fourth: String,
            fifth: String,
            sixth: String,
        },
    },
    subList: [String],
});

const schema = mongoose.model('teacher', teacherSchema);

module.exports = schema;
