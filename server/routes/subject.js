const express = require('express');
const {
    getSubjects,
    newSubject,
    updateSubject,
    deleteSubject,
    downloadSubject,
} = require('../controller/subjectController');
const router = express.Router();
const { pdfUpload } = require('../middleware/uploadMiddleware');

router.route('/subjects').get(getSubjects);
router.route('/admin/subjects/new').post(pdfUpload.single('file'), newSubject);
router
    .route('/admin/subjects/:id')
    .post(pdfUpload.single('file'), updateSubject);
router.route('/admin/subjects/delete/:id').post(deleteSubject);
router.route('/subjects/download/:id').get(downloadSubject);

module.exports = router;
