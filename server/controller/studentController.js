const multer = require('multer');
const path = require('path');
const Student = require('../models/studentModel');

exports.getStudents = async (req, res, next) => {
    let student = await Student.find();
    res.status(200).json({
        success: true,
        student,
    });
};

// Create Student - /admin/students/new
exports.newStudent = async (req, res, next) => {
    const first = '661fff7b84faacd008593f11';
    const second = '661fffb709058dcdb73b2fc4';
    const third = '661fffc427e9b328c61e333b';
    const fourth = '661fffd20fcc2eae099cb99f';
    let timetable;

    const reqData = JSON.parse(req.body.data);
    if (reqData.year == 'first') {
        timetable = first;
    }
    if (reqData.year == 'second') {
        timetable = second;
    }
    if (reqData.year == 'third') {
        timetable = thirdfourth;
    }
    if (reqData.year == 'fourth') {
        timetable = first;
    }
    const data = {
        Image: req.file.filename,
        timetable: timetable,
        ...reqData,
    };
    console.log(data);

    const student = await Student.create(data);
    res.status(201).json({
        success: true,
        student,
    });
};

// update Student - /admin/students/:id
exports.updateStudent = async (req, res, next) => {
    const reqData = JSON.parse(req.body.data);
    let data;
    if (req.file == undefined) {
        data = {
            ...reqData,
        };
    } else {
        data = {
            Image: req.file.filename,
            ...reqData,
        };
    }

    console.log(data);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: 'Student not found',
        });
    }

    student = await Student.findByIdAndUpdate(req.params.id, data);

    res.status(200).json({
        success: true,
        student,
    });
};

// delete student - /admin/student/:id
exports.deleteStudent = async (req, res, next) => {
    let student = await Student.findById(req.params.id);
    if (!student) {
        return res.status(404).json({
            success: false,
            message: 'Student not found',
        });
    }
    await Student.deleteOne({ _id: req.params.id });
    const students = await Student.find();
    res.status(200).json({
        success: true,
        students,
    });
};
