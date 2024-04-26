const express = require('express');
const {
    getTimetable,
    newTimetable,
    updateTimetable,
} = require('../controller/timetableController');
const router = express.Router();

router.route('/timetable').get(getTimetable);
// router.route('/admin/timetable/new').post(newTimetable);
router.route('/admin/timetable/:id').post(updateTimetable);
// router.route('/admin/timetable/delete/:id').post(deleteTimetable);

module.exports = router;
