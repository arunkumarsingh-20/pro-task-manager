import { useState } from 'react';
import api from '../utils/api';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', formData);
      toast.success('Account created! Redirecting...');
      setTimeout(() => router.push('/login'), 1500);
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Toaster position="top-center" />
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-bold text-indigo-900 mb-2 text-center">Create Account</h2>
        <p className="text-slate-500 text-center mb-8">Join us to manage your tasks efficiently</p>
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
              placeholder="e.g. John Doe" 
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
              placeholder="e.g. john@example.com" 
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
              placeholder="Create a password (min 6 chars)" 
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })} 
            />
          </div>
          
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-slate-600">
          Already have an account? <a href="/login" className="text-indigo-600 font-bold hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}