// Gustavo Olgiati
// controlers/students.js

const express = require('express');
const router = express.Router();
const { makeUpperCase, checkAdmin } = require('../middleware');
const { getSpecificStudent, getStudents, addStudent, updateStudent, deleteStudent } = require('../controller/student');

router.get('/:id', checkAdmin, getSpecificStudent);
router.get('/', getStudents);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', checkAdmin, deleteStudent);

module.exports = router;