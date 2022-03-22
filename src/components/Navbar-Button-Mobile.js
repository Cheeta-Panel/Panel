import React from "react";

export default class Mobile_Button extends React.Component {

	state = {
		loggedIn: true
	}


	render() {
		const {loggedIn} = this.state;
		return (
			<>
				{loggedIn ? (
					<a href={"/dashboard"} className="nav-links-mobile">
						<i className="fas fa-sign-in-alt"/> Dashboard
					</a>
				) : (
					<a href={"/login"} className="nav-links-mobile">
						<i className="fas fa-sign-in-alt"/> Sign In
					</a>
				)}
			</>
		);

	}
}