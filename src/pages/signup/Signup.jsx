import React from "react";
import "./signup.css";
import BackButton from "../../constants/backbutton/BackButton";
import Header from "../../constants/header/Header";

const Signup = () => {
	return (
		<>
			<Header />
			<div className="signup">
				<form className="signup-form">
					<h1 className="heading">Signup</h1>
					<label className="signup-label" for="email">
						Email
					</label>
					<input
						className="signup-input"
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email"
						required
					/>
					<label className="signup-label" for="username">
						Username
					</label>
					<input
						className="signup-input"
						type="text"
						id="username"
						name="username"
						placeholder="Enter your username"
						required
					/>
					<label className="signup-form_label" for="password">
						Password
					</label>
					<input
						className="signup-input"
						type="password"
						id="password"
						name="password"
						placeholder="Enter your password"
						required
					/>

					<button className="signup-button" type="submit">
						Signup
					</button>
					<p>
						Already registered? Login <a href="/login">here</a>
					</p>
				</form>
			</div>
			<BackButton />
		</>
	);
};

export default Signup;
