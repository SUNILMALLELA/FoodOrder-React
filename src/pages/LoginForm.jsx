import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        setError("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.email.trim() || !data.password.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (data.password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        console.log("User Data:", data);
        setTimeout(() => {
            alert("Login successful!");
            setData({ email: "", password: "" });
        }, 1000);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <div className="top-buttons">
                    <button type="button" className="login-top">Login</button>
                    <button type="button" className="signup-top">Signup</button>
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={handleChange}
                />
                {error && <p className="error">{error}</p>}
                <div className="extra-links">
                    <a href="/forgot-password" className="forgot-link">
                        Forgot password?
                    </a>
                </div>
                <button type="submit" >Login
                </button>
                <p className="register-text">
                    Don’t have an account? <a href="/register">Register</a>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;
