import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        setErrors({ name: "", email: "", password: "", confirmPassword: "" });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = { name: "", email: "", password: "", confirmPassword: "" };
        let hasError = false;
        if (!data.name.trim()) {
            newErrors.name = "Please enter your name.";
            hasError = true;
        }
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
        try {
            const response = await registerApi(data);
            if (response.status === 201 || response.status === 200) {
                toast.success(response.data.message || "Registration successful!");
                setData({ name: "", email: "", password: "", confirmPassword: "" });
                setErrors({ name: "", email: "", password: "", confirmPassword: "" });
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong. Please try again later!");
            }
        }
    };
    const registerApi = async (formdata) => {
        try {
            const response = await axios.post(
                "http://localhost:5007/api/auth/register",
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
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={data.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                    >
                        Login now
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Register;
