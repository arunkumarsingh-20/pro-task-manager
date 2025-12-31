const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    // Sort: High priority first, then by date
    const tasks = await Task.find({ user: req.user.id }).sort({ isCompleted: 1, priority: -1, dueDate: 1 });
    res.json(tasks);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    const newTask = new Task({ title, description, priority, dueDate, user: req.user.id });
    const task = await newTask.save();
    res.json(task);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.updateTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    task = await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(task);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (err) { res.status(500).send('Server Error'); }
};