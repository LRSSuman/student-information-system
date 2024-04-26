const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Image: String,
    name: String,
    rollNo: String,
    image: String,
    department: String,
    year: String,
    arrears: String,
    cgpa: String,
    gender: String,
    dob: String,
    address: String,
    email: String,
    mobile: String,
    currentSubject: String,
    assignmentSubmitted: String,
    attendancePercentage: String,
    timetable: { type: mongoose.SchemaTypes.ObjectId, ref: 'timetable' },
});

const schema = mongoose.model('student', studentSchema);

module.exports = schema;
