const Timetable = require('../models/timetableModel');

exports.getTimetable = async (req, res, next) => {
    let timetable = await Timetable.find();
    console.log(timetable);
    res.status(200).json({
        success: true,
        timetable,
    });
};

// Create Teacher - /admin/teachers/new
// exports.newTimetable = async (req, res, next) => {
//     // const data = {
//     //     monday: {
//     //         first: 'cs6521',
//     //         second: 'cs6522',
//     //         third: 'cs6523',
//     //         fourth: 'cs6524',
//     //         fifth: 'cs6525',
//     //         sixth: 'cs6526',
//     //     },
//     //     tuesday: {
//     //         first: 'cs6521',
//     //         second: 'cs6522',
//     //         third: 'cs6523',
//     //         fourth: 'cs6524',
//     //         fifth: 'cs6525',
//     //         sixth: 'cs6526',
//     //     },
//     //     wednesday: {
//     //         first: 'cs6521',
//     //         second: 'cs6522',
//     //         third: 'cs6523',
//     //         fourth: 'cs6524',
//     //         fifth: 'cs6525',
//     //         sixth: 'cs6526',
//     //     },
//     //     thursday: {
//     //         first: 'cs6521',
//     //         second: 'cs6522',
//     //         third: 'cs6523',
//     //         fourth: 'cs6524',
//     //         fifth: 'cs6525',
//     //         sixth: 'cs6526',
//     //     },
//     //     friday: {
//     //         first: 'cs6521',
//     //         second: 'cs6522',
//     //         third: 'cs6523',
//     //         fourth: 'cs6524',
//     //         fifth: 'cs6525',
//     //         sixth: 'cs6526',
//     //     },
//     //     subjectList: [
//     //         'Theory of Computation(CS6521) - Arnold',
//     //         'Artifical Intelligence and Machine Learning(CS6522) - Stark',
//     //         'Introduction to Operating System(CS6523) - Stark',
//     //         'Database Management System(CS6524) - Scarlett',
//     //         'Compiler Design(CS6525) - Jenifer',
//     //         'Introduction to Python(CS6526) - Jenifer',
//     //     ],
//     // };

//     const timetable = await Timetable.create(data);
//     res.status(201).json({
//         success: true,
//         timetable,
//     });
// };

// update Timetable - /admin/teachers/:id
exports.updateTimetable = async (req, res, next) => {
    const reqData = req.body;
    let data = reqData;

    console.log(data);
    let timetable = await Timetable.findById(req.params.id);
    if (!timetable) {
        return res.status(404).json({
            success: false,
            message: 'timetable not found',
        });
    }

    timetable = await Timetable.findByIdAndUpdate(req.params.id, data);

    res.status(200).json({
        success: true,
        timetable,
    });
};
