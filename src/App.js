import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Signup from "./pages/signup/Signup";
import LoginForm from "./pages/login/LoginForm";
import Contact from "./pages/contact/Contact";
import { useContext } from "react";
import { Context } from "./context/Context";

export default function App() {
	const { user } = useContext(Context);

	return (
		<>
			<div>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<Homepage />}></Route>
						<Route
							exact
							path="/login"
							element={user ? <Homepage /> : <LoginForm />}
						/>
						<Route
							exact
							path="/signup"
							element={user ? <Homepage /> : <Signup />}
						></Route>
						<Route
							exact
							path="/contact"
							element={<Contact />}
						></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}
