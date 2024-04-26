const express = require('express');
const {
    getTeachers,
    newTeacher,
    updateTeacher,
    deleteTeacher,
} = require('../controller/teacherController');
const router = express.Router();
const { upload } = require('../middleware/uploadMiddleware');

router.route('/teachers').get(getTeachers);
router.route('/admin/teachers/new').post(upload.single('file'), newTeacher);
router.route('/admin/teachers/:id').post(upload.single('file'), updateTeacher);
router.route('/admin/teachers/delete/:id').post(deleteTeacher);

module.exports = router;
