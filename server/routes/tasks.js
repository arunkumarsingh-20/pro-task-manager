const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getTasks, createTask, deleteTask, updateTask } = require('../controllers/taskController');

router.get('/', auth, getTasks);
router.post('/', auth, createTask);
router.put('/:id', auth, updateTask); // New Route
router.delete('/:id', auth, deleteTask);

module.exports = router;