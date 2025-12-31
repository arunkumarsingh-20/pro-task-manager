import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <aside className="bg-indigo-900 text-white w-full md:w-64 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">✨ TaskPro</h1>
          <nav className="space-y-4">
            <span className="block py-2 px-4 bg-indigo-800 rounded">Dashboard</span>
          </nav>
        </div>
        <button onClick={handleLogout} className="text-sm text-indigo-200 hover:text-white text-left">Logout</button>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}