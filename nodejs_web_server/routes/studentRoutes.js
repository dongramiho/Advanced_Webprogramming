const express = require('express');
const router = express.Router();

const {
    addStudent,
    getAllStudents,
    getStudent,
    deleteStudent
} = require('../controllers/studentController');

router.post('/students', addStudent);
router.get('/students', getAllStudents);
router.get('/students/:id', getStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;