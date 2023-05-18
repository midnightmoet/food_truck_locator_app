import React from "react";
import "./searchbox.css";

const SearchBar = () => {
	return (
		<>
      <div className="form-container">
        <h1>Food Truck Finder</h1>
        <p>
          "The best app to find food trucks near you!"
          <br></br>
          "Find them in two ways:"
        </p>
        <p>1. Entering your current address to see nearby food trucks.</p>
        <p>2. Click anywhere on the map to update your current location.</p>
        <form>
          <input type="text" placeholder="Enter your address"></input>
          <button type="submit">Find Food Truck</button>
          <button type="submit"><a href="/signup">Save to Favorites</a></button>
        </form>
      </div>
		</>
	);
};

export default SearchBar;