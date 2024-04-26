const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    subCode: String,
    subName: String,
    year: String,
    file: String,
});

const schema = mongoose.model('subject', subjectSchema);

module.exports = schema;
