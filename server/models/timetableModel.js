const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
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
    subjectList: [],
});

const schema = mongoose.model('timetable', timetableSchema);

module.exports = schema;
