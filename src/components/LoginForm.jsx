import React, { useState } from 'react';
import { Auth } from '../api/auth';

const LoginForm = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: 'admin',
    password: 'admin123'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      let response;
      if (isRegisterMode) {
        response = await Auth.register({
          username: formData.username,
          password: formData.password,
          email: formData.username + '@cashpot.ro',
          firstName: 'User',
          lastName: 'Test',
          role: 'user'
        });
      } else {
        response = await Auth.login(formData.username, formData.password);
      }

      if (response.user) {
        onLoginSuccess(response.user);
      }
    } catch (error) {
      setError(error.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🏦 CASHPOT V6</h1>
          <p className="text-gray-600">Gaming Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : (isRegisterMode ? 'Register' : 'Login')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsRegisterMode(!isRegisterMode)}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            {isRegisterMode ? 'Already have an account? Login' : 'Need an account? Register'}
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Demo Credentials:</h3>
          <p className="text-sm text-gray-600">
            <strong>Admin:</strong> admin / admin123<br />
            <strong>User:</strong> test / test123
          </p>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Backend:</strong> Vercel API<br />
            <strong>Database:</strong> MongoDB Cloud<br />
            <strong>Status:</strong> Online ✅
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
