import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
	return (
		<>
			<div className="not-found-container">
				<h1>Work in progress</h1>
				<p>Check back for updates and additional content</p>
				<p>Here are some helpful links:</p>
				<button>
					<Link to="/">Homepage</Link>
				</button>
				<button>
					{" "}
					<Link to="/contact">Contact</Link>
				</button>
			</div>
		</>
	);
};

export default NotFound;
