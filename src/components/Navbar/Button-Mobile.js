import { useState } from "react";

const Mobile_Button = () => {
	const [loggedIn, _setLoggedIn] = useState(true);

	return (
		<>
			{loggedIn ? (
				<a href={"/dashboard"} className="nav-links-mobile">
					<i className="fas fa-sign-in-alt" /> Dashboard
				</a>
			) : (
				<a href={"/login"} className="nav-links-mobile">
					<i className="fas fa-sign-in-alt" /> Sign In
				</a>
			)}
		</>
	);
};

export default Mobile_Button;
