//create your first component
import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="Container me-5 ms-5">
		<Jumbotron/>
		<div className="card-group">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
