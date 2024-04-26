const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// routes
const login = require('./routes/login');
const student = require('./routes/student');
const teacher = require('./routes/teacher');
const subject = require('./routes/subject');
const timetable = require('./routes/timetable');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use('/', login);
app.use(student);
app.use(teacher);
app.use(subject);
app.use(timetable);

module.exports = app;
