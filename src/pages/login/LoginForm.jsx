import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Header from "../../constants/header/Header";
import Footer from "../../constants/footer/Footer";

const LoginForm = () => {
	const [username, setUsername] = useState("");

	const handleLogin = () => {
		// perform login logic here
		// assuming successful login, redirect to home page
		localStorage.setItem("username", username);
	};

	return (
    <>
      <Header />
      <div className="login-form">
			<h2 className="login-form__heading">Login</h2>
			<form>
				<label className="login-form__label">Username:</label>
				<input
					className="login-form__input"
					type="text"
					onChange={(e) => setUsername(e.target.value)}
				></input>
				<label className="login-form__label">Password:</label>
				<input
					className="login-form__input"
					type="password"
					onChange={(e) => setUsername(e.target.value)}
				></input>
				<Link
					onClick={handleLogin}
					className="login-form__button"
					to="/homepage"
				>
					Login
				</Link>
				<p>
					Not registered? Sign up <a href="/signup">here</a>
				</p>
			</form>
		</div>
		<Footer />
    </>
	);
};

export default LoginForm;
