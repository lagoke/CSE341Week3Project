const express = require('express')
const router = express.Router();
const { attendanceValidation } = require('../validation.js');

const attendanceController = require('../controllers/attendance_data')

router.get('/', attendanceController.getAll);
router.get('/:id', attendanceController.getSingle);
router.post('/', attendanceValidation, attendanceController.createAttendance);
router.put('/:id', attendanceController.updateAttendance);
router.delete('/:id', attendanceController.deleteAttendance);



module.exports = router; 

