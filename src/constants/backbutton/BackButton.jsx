import React from "react";
import "./backbutton.css";

const Backbutton = () => {
	return (
		<div className="back-btn-footer">
			<footer>
			<button className="back-btn">
				<a href="/homepage" class="previous">
					&laquo; Previous
				</a>
				{/* <a href="#" class="next">
					Next &raquo;
				</a> */}
			</button>
			</footer>
		</div>
	);
};

export default Backbutton;