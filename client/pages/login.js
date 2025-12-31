import { useState } from 'react';
import api from '../utils/api';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      toast.success('Welcome back!');
      setTimeout(() => router.push('/dashboard'), 1000);
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Toaster position="top-center" />
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-bold text-indigo-900 mb-2 text-center">Welcome Back</h2>
        <p className="text-slate-500 text-center mb-8">Please enter your details to sign in</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
              placeholder="e.g. john@example.com" 
              type="email" 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
              placeholder="Enter your password" 
              type="password" 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5">
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-slate-600">
          New here? <a href="/register" className="text-indigo-600 font-bold hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  );
}