const multer = require('multer');
const path = require('path');
const Subject = require('../models/subjectModel');

exports.getSubjects = async (req, res, next) => {
    let subjects = await Subject.find();
    res.status(200).json({
        success: true,
        subjects,
    });
};

// Create Subject - /admin/teachers/new
exports.newSubject = async (req, res, next) => {
    console.log('hi');
    const reqData = JSON.parse(req.body.data);
    const data = {
        ...reqData,
        file: req.file.filename,
    };
    console.log(data);
    const subject = await Subject.create(data);
    res.status(201).json({
        success: true,
        subject,
    });
};

// update Subject - /admin/students/:id
exports.updateSubject = async (req, res, next) => {
    const reqData = JSON.parse(req.body.data);
    let data;
    if (req.file == undefined) {
        data = {
            ...reqData,
        };
    } else {
        data = {
            ...reqData,
            file: req.file.filename,
        };
    }

    console.log(data);

    let subject = await Subject.findById(req.params.id);
    if (!subject) {
        return res.status(404).json({
            success: false,
            message: 'Student not found',
        });
    }

    subject = await Subject.findByIdAndUpdate(req.params.id, data);

    res.status(200).json({
        success: true,
        subject,
    });
};

// delete subject - /admin/student/:id
exports.deleteSubject = async (req, res, next) => {
    let subject = await Subject.findById(req.params.id);
    if (!subject) {
        return res.status(404).json({
            success: false,
            message: 'Student not found',
        });
    }
    await Subject.deleteOne({ _id: req.params.id });
    const subjects = await Subject.find();
    res.status(200).json({
        success: true,
        subjects,
    });
};

exports.downloadSubject = async (req, res, next) => {
    const file = `${__dirname}/../public/pdf/${req.body}`;
    res.download(file);
    res.status(200).json({
        success: true,
    });
};
