import './App.css'
import React, { useState, useEffect } from 'react';
import Pages from "@/pages/index.jsx"
import LoginForm from "./components/LoginForm"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { Auth } from './api/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('authToken');
    if (token) {
      Auth.getCurrentUser()
        .then(userData => {
          setUser(userData.user);
        })
        .catch(() => {
          localStorage.removeItem('authToken');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold">🏦 CASHPOT V7</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="cashpot-ui-theme">
        <LoginForm onLoginSuccess={setUser} />
        <Toaster />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="cashpot-ui-theme">
      <Pages />
      <Toaster />
    </ThemeProvider>
  )
}

export default App 