import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function RootLayout() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('dark-mode');
    if (saved !== null) {
      return saved === 'true';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update HTML element class and localStorage
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('dark-mode', isDark.toString());
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-12">
        <Outlet />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
