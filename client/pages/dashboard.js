import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import toast, { Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import { TrashIcon, PlusIcon, CalendarIcon, FlagIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'Medium', dueDate: '' });
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) router.push('/login');
    else fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) { toast.error("Failed to load tasks"); }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/tasks', newTask);
      setTasks([res.data, ...tasks]);
      setNewTask({ title: '', description: '', priority: 'Medium', dueDate: '' });
      setShowForm(false);
      toast.success('Task Created!');
    } catch (err) { toast.error('Error adding task'); }
  };

  const toggleComplete = async (task) => {
    try {
      const res = await api.put(`/tasks/${task._id}`, { isCompleted: !task.isCompleted });
      setTasks(tasks.map(t => t._id === task._id ? res.data : t));
      if (!task.isCompleted) toast.success('Task Completed! 🎉');
    } catch (err) { toast.error('Update failed'); }
  };

  const deleteTask = async (id) => {
    if(!window.confirm("Are you sure?")) return;
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
      toast.success('Task Deleted');
    } catch (err) { toast.error('Could not delete'); }
  };

  const completedCount = tasks.filter(t => t.isCompleted).length;
  const progress = tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  const getPriorityColor = (p) => {
    if (p === 'High') return 'bg-red-100 text-red-600';
    if (p === 'Medium') return 'bg-yellow-100 text-yellow-600';
    return 'bg-green-100 text-green-600';
  };

  return (
    <Layout>
      <Toaster position="top-right" />
      
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">My Dashboard</h2>
          <p className="text-slate-500">You have completed {progress}% of your goals.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30">
          <PlusIcon className="h-5 w-5" /> {showForm ? 'Close Form' : 'New Task'}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-3 mb-10 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Add Task Form (Collapsible) - UPDATED CSS HERE */}
      {showForm && (
        <form onSubmit={addTask} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mb-10 animate-fade-in-down">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="text-sm font-bold text-slate-700">Task Title</label>
              <input 
                required 
                className="w-full p-3 border border-slate-300 rounded-lg mt-1 outline-none text-slate-900 bg-white placeholder-slate-400 focus:ring-2 ring-indigo-500" 
                placeholder="What needs to be done?" 
                value={newTask.title} 
                onChange={e => setNewTask({...newTask, title: e.target.value})} 
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700">Priority</label>
              <select 
                className="w-full p-3 border border-slate-300 rounded-lg mt-1 outline-none text-slate-900 bg-white focus:ring-2 ring-indigo-500" 
                value={newTask.priority} 
                onChange={e => setNewTask({...newTask, priority: e.target.value})}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700">Due Date</label>
              <input 
                type="date" 
                className="w-full p-3 border border-slate-300 rounded-lg mt-1 outline-none text-slate-900 bg-white focus:ring-2 ring-indigo-500" 
                value={newTask.dueDate} 
                onChange={e => setNewTask({...newTask, dueDate: e.target.value})} 
              />
            </div>
            <div className="col-span-2">
               <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg">Save Task</button>
            </div>
          </div>
        </form>
      )}

      {/* Task List */}
      <div className="grid gap-4">
        {tasks.map(task => (
          <div key={task._id} className={`group bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border-l-4 flex flex-col md:flex-row justify-between items-center gap-4 ${task.isCompleted ? 'border-green-500 opacity-70' : 'border-indigo-500'}`}>
            <div className="flex items-center gap-4 flex-1">
              <button onClick={() => toggleComplete(task)} className={`transition ${task.isCompleted ? 'text-green-500' : 'text-slate-300 hover:text-indigo-500'}`}>
                <CheckCircleIcon className="h-8 w-8" />
              </button>
              <div>
                <h3 className={`font-bold text-lg ${task.isCompleted ? 'line-through text-slate-400' : 'text-slate-800'}`}>{task.title}</h3>
                <div className="flex gap-3 text-sm text-slate-500 mt-1">
                  {task.dueDate && (
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" /> {format(new Date(task.dueDate), 'MMM dd')}
                    </span>
                  )}
                  {task.priority && (
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button onClick={() => deleteTask(task._id)} className="text-slate-300 hover:text-red-500 transition p-2 hover:bg-red-50 rounded-full">
              <TrashIcon className="h-6 w-6" />
            </button>
          </div>
        ))}
        {tasks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">No tasks yet. Start by adding one above! 🚀</p>
          </div>
        )}
      </div>
    </Layout>
  );
}