
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Inside create</h1>
	<Link to="/"><button>BackToHome</button></Link>
	</div>
);
};

export default Home;
