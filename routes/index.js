const router = require('express').Router()

router.use('/', require('./swagger.js'));

router.get('/', (req, res) => {
    res.send("Welcome to Web service week 3 Church Attendance Project");
})

router.use('/attendance_data', require('./attendance_data'));

module.exports = router; 