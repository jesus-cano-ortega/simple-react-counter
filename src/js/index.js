//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;

setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 1000);
	const two = Math.floor(counter / 100);
	const one = Math.floor(counter / 10);
	counter++;

	ReactDOM.render(
		<Home
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 100);
