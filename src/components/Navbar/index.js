import React, { useState } from "react";
import Button from "./Button";
import { Nav, NavName } from "./styles";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<Nav>
				<NavName href="/"></NavName>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<Button />
			</Nav>
		</>
	);
}

export default Navbar;
