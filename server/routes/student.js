const express = require('express');
const {
    getStudents,
    newStudent,
    updateStudent,
    deleteStudent,
} = require('../controller/studentController');
const router = express.Router();
const { upload } = require('../middleware/uploadMiddleware');

router.route('/students').get(getStudents);
router.route('/admin/students/new').post(upload.single('file'), newStudent);
router.route('/admin/students/:id').post(upload.single('file'), updateStudent);
router.route('/admin/students/delete/:id').post(deleteStudent);

module.exports = router;
