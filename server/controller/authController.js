const studentModel = require('../models/studentModel');
const teacherModel = require('../models/teacherModel');

exports.loginFaculty = async (req, res, next) => {
    console.log('hi');
    const authData = req.body;

    if (
        authData.identity === 'admin@gmail.com' &&
        authData.password === 'met@123'
    ) {
        return res.status(200).json({
            admin: true,
            success: true,
            message: 'you are admin',
            redirectUrl: '/admin/students',
        });
    } else {
        const teacherIdentity = await teacherModel.exists({
            email: authData.identity,
        });
        const teacherData = await teacherModel.findById(teacherIdentity);

        const { email, password } = teacherData;

        if (authData.identity === email && authData.password === password) {
            return res.status(200).json({
                teacher: true,
                success: true,
                message: 'you are teacher',
                redirectUrl: '/teacher/home',
                teacherData: teacherData,
            });
        }
    }

    return res.status(400).json({
        success: false,
        message: 'Enter a Valid Credentials',
    });
};

exports.loginStudent = async (req, res, next) => {
    const authData = req.body;
    const studentIdentity = await studentModel.exists({
        rollNo: authData.identity,
    });
    const studentData = await studentModel
        .findById(studentIdentity)
        .populate('timetable');
    const { rollNo, dob } = studentData;

    if (authData.identity === rollNo && authData.password === dob) {
        return res.status(200).json({
            student: true,
            success: true,
            message: 'you are student',
            redirectUrl: '/student/home',
            studentData: studentData,
        });
    }

    return res.status(400).json({
        success: false,
        message: 'Enter a Valid Credentials',
    });
};
