import styled from "styled-components";

const Nav = styled.nav`
	background: transparent;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
`;

const NavName = styled.a`
	color: #fff;
	justify-self: start;
	margin-left: 20px;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	left: 10%;
	font-family: "Monoid Bold", Fallback, sans-serif;
	@media screen and (max-width: 960px) {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(25%, 50%);
	}
`;

const NavItem = styled.li`
	display: flex;
	align-items: center;
	height: 80px;
`;

const NavLink = styled.a`
	color: white;
	text-decoration: none;
	padding: 0.5rem 1rem;
	:hover {
		background-color: transparent;
		border-radius: 4px;
		transition: all 0.2s ease-out;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		:hover {
			background-color: transparent;
			border-radius: 0;
		}
	}
`;

export { Nav, NavName, NavItem, NavLink };
