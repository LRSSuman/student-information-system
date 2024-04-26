const Teacher = require('../models/teacherModel');

exports.getTeachers = async (req, res, next) => {
    let teacher = await Teacher.find();
    res.status(200).json({
        success: true,
        teacher,
    });
};

// Create Teacher - /admin/teachers/new
exports.newTeacher = async (req, res, next) => {
    const reqData = JSON.parse(req.body.data);
    const data = {
        Image: req.file.filename,
        ...reqData,
    };
    console.log(data);
    const teacher = await Teacher.create(data);
    res.status(201).json({
        success: true,
        teacher,
    });
};

// update Teacher - /admin/teachers/:id
exports.updateTeacher = async (req, res, next) => {
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

    let student = await Teacher.findById(req.params.id);
    if (!student) {
        return res.status(404).json({
            success: false,
            message: 'Student not found',
        });
    }

    student = await Teacher.findByIdAndUpdate(req.params.id, data);

    res.status(200).json({
        success: true,
        student,
    });
};

// delete teacher - /admin/student/:id
exports.deleteTeacher = async (req, res, next) => {
    let teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
        return res.status(404).json({
            success: false,
            message: 'Teacher not found',
        });
    }
    await Teacher.deleteOne({ _id: req.params.id });
    const teachers = await Teacher.find();
    res.status(200).json({
        success: true,
        teachers,
    });
};
