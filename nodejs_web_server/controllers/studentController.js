const Student = require('../models/Students');

let students = []; // 메모리 저장

// 1. 추가
const addStudent = (req, res) => {
    const { name, age } = req.body;
    const id = students.length + 1;

    const student = new Student(name, age, id);
    students.push(student);

    res.json(student);
};

// 2. 전체 조회
const getAllStudents = (req, res) => {
    res.json(students);
};

// 3. 한 명 조회
const getStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: 'Not found' });
    }

    res.json(student);
};

// 4. 삭제
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);

    res.json({ message: 'Deleted' });
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudent,
    deleteStudent
};