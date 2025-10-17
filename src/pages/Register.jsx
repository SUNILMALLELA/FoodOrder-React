import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        setErrors({ email: "", password: "", confirmPassword: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = { email: "", password: "", confirmPassword: "" };
        let hasError = false;

        if (!data.email.trim()) {
            newErrors.email = "Please enter an email address.";
            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = "Please enter a valid email address.";
            hasError = true;
        }

        if (!data.password.trim()) {
            newErrors.password = "Please enter a password.";
            hasError = true;
        } else if (data.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
            hasError = true;
        }

        if (data.password !== data.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        console.log("User Data:", data);
        setTimeout(() => {
            alert("Registration successful!");
            setData({ email: "", password: "", confirmPassword: "" });
            setErrors({ email: "", password: "", confirmPassword: "" });
            navigate("/login");
        }, 1000);
    };

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>Register Form</h2>
                <div className={styles.topButtons}>
                    <button
                        type="button"
                        className={styles.loginTop}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                    <button type="button" className={styles.signupTop}>Register</button>
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={data.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}

                <button type="submit" className={styles.submitButton}>Register</button>
                <p className={styles.registerText}>
                    Already have an account?{" "}
                    <span
                        style={{ color: "orange", cursor: "pointer" }}
                        onClick={() => navigate("/")}
                    >
                        Login now
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Register;
