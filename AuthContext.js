import { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const login = async (email, password) => {
        try {
            const res = await axios.post('/api/login', { email, password });
            console.log('Login Response:', res.data);  // Log the response for debugging
            setUser(res.data.user);
            setError('');  // Clear any previous error
        } catch (err) {
            console.error('Login Error:', err.response ? err.response.data : err.message);  // Log the error for debugging
            setError('Invalid credentials');
        }
    };

    const signup = async (email, password) => {
        try {
            const res = await axios.post('/api/signup', { email, password });
            console.log('Signup Response:', res.data);  // Log the response for debugging
            setUser(res.data.user);
            setError('');  // Clear any previous error
        } catch (err) {
            console.error('Signup Error:', err.response ? err.response.data : err.message);  // Log the error for debugging
            setError('Error creating account');
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, error }}>
            {children}
        </AuthContext.Provider>
    );
};
