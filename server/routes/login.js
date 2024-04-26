const express = require('express');
const router = express.Router();
const { loginFaculty, loginStudent } = require('../controller/authController');

router.route('/login/faculty').post(loginFaculty);
router.route('/login/student').post(loginStudent);

module.exports = router;
