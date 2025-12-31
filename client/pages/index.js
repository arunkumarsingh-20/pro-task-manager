import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard'); // If logged in, go to Dashboard
    } else {
      router.push('/login');     // If not, go to Login
    }
  }, []);

  return null; // Show nothing while redirecting
}