import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = props => {
	return (
		<>
			<div className="counter d-flex align-items-center justify-content-center">
				<i className="fas fa-stopwatch"></i>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
		</>
	);
};

//Proptypes Validation
Home.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

export default Home;
