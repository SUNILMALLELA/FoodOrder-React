import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { toast } from "react-toastify";
import axios from "axios";

function LoginForm() {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        setErrors({ email: "", password: "" });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = { email: "", password: "" };
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

        if (hasError) {
            setErrors(newErrors);
            return;
        }
        try {
            const response = await loginApi(data);
            if (response.status === 200) {
                toast.success(response.data.message || "Login successful!");
                localStorage.setItem("isLoggedIn", true);
                setData({ email: "", password: "" });
                setErrors({ email: "", password: "" });

                setTimeout(() => {
                    navigate("/home");
                }, 2000);
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Invalid credentials or server error!");
            }
        }
    };
    const loginApi = async (formdata) => {
        try {
            const response = await axios.post(
                "http://localhost:5007/api/auth/login",
                formdata
            );
            return response;
        } catch (error) {
            throw error;
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <div className={styles.topButtons}>
                    <button type="button" className={styles.loginTop}>Login</button>
                    <button
                        type="button"
                        className={styles.signupTop}
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
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

                <div className={styles.extraLinks}>
                    <a href="#" className={styles.forgotLink}>Forgot password?</a>
                </div>

                <button type="submit" className={styles.submitButton}>Login</button>

                <p className={styles.registerText}>
                    Don't have an account?{" "}
                    <span
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => navigate("/register")}
                    >
                        Register now
                    </span>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;
