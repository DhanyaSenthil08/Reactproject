import { useState } from 'react';
import './LoginSignup.css';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);  // To toggle between login and signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login state

    // Function to handle login request
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login successful:', data);
            setError('');  // Clear any previous error
            setIsLoggedIn(true);  // Set login state to true on successful login
        } else {
            console.error('Login failed:', data);
            setError('Invalid credentials');
        }
    };

    // Function to handle signup request
    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Signup successful:', data);
            setError('');  // Clear any previous error
            setIsLoggedIn(true);  // Set login state to true on successful signup
        } else {
            console.error('Signup failed:', data);
            setError('Error creating account');
        }
    };

    if (isLoggedIn) {
        // Show the welcome message after successful login/signup
        return (
            <div className="welcome-container">
                <h1 className="welcome-message">Welcome to Our Medico Pharma</h1>
                <p className="welcome-subtitle">We are delighted to have you here!</p>
            </div>
        );
    }

    return (
        <div className="auth-container">
            <form
                onSubmit={isLogin ? handleLogin : handleSignup}
                className="auth-form"
            >
                <h2>{isLogin ? 'Login' : 'Signup'}</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">
                    {isLogin ? 'Login' : 'Signup'}
                </button>
                {error && <p className="error">{error}</p>}
                <p>
                    {isLogin
                        ? "Don't have an account? "
                        : 'Already have an account? '}
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="toggle-btn"
                    >
                        {isLogin ? 'Signup' : 'Login'}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default AuthForm;
