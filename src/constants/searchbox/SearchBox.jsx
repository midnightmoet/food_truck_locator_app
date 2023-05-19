import React from "react";
import "./searchbox.css";

const SearchBar = () => {
	return (
		<>
      <div className="form-container">
        <h1>Food Truck Finder</h1>
        <p>
          The best app to find food trucks near you! Find them in a few ways:
        </p>
        <ul>
          <li>1. Search by your current location.</li>
          <li>2. Search by your favorite food truck.</li>
          <li>3. Search by your favorite food.</li>
          <li>4. Click on the pins to explore options</li>
        </ul>
        <form method="POST">
          <input type="text" placeholder="Enter your address" required></input>
          <button type="submit" placeholder="Enter location">Search</button>
          <button type="submit"><a href="*">Favorite</a></button>
        </form>
      </div>
		</>
	);
};

export default SearchBar;
