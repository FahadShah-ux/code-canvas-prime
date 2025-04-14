
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button 
      variant="ghost" 
      size={isMobile ? "icon" : "default"}
      onClick={toggleTheme} 
      className="rounded-full"
    >
      {isDarkMode ? (
        <>
          {!isMobile && <span className="mr-2">Light</span>}
          <Sun className="h-5 w-5" />
        </>
      ) : (
        <>
          {!isMobile && <span className="mr-2">Dark</span>}
          <Moon className="h-5 w-5" />
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
