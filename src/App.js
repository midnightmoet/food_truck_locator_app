// import './App.css';
// import Homepage from './pages/homepage/Homepage';

// const App = () => {
//   return (
//     <>
//     <Homepage />
//     </>

//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Signup from "./pages/signup/Signup";
import LoginForm from "./pages/login/LoginForm";
import Contact from "./pages/contact/Contact";

export default function App() {
	return (
		<> 
		<div>
		<BrowserRouter>
		  <Routes>
			<Route exact path="/" element={<Homepage/>}></Route>
			<Route exact path="/login" element={<LoginForm></LoginForm>} />
			<Route exact path="/signup" element={<Signup /> }></Route>
			<Route exact path="/contact" element={<Contact />}></Route> 
	
		  </Routes>
		</BrowserRouter>
		</div>
	  </>
	);
}
