import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	width: 35%;
	background-color: #2b2b2b;
	padding: 2em;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	box-shadow: inset 0 0 0 1px #2b2b2b;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const Label = styled.label`
	color: #fff;
	font-size: 1rem;
	line-height: 2rem;
	text-align: left;
	margin-top: 0.5rem;
	margin: 10px 0;
`;

const Input = styled.input`
	flex-shrink: 1;
	background-color: hsl(231°, 11%, 32%);
	font-size: 0.875rem;
	padding: 1em;
	height: 3rem;
	border-width: 1px;
	border-color: hsl(60, 30%, 96% / 0.2);
	:focus {
		outline: none;
		scale: 1.1;
	}
	margin-bottom: 5px;
	border-radius: 0.725rem;
`;

const Button = styled.button`
	background-color: #211d1d;
	padding: 1em;
	border-radius: 10px;
	border: none;
	color: #fff;
	cursor: pointer;
	margin-top: 10px;
	font-size: 0.875em;
	width: 10em;
	:focus {
		outline: none;
		border: none;
	}
	:hover {
		background-color: #383434;
	}
	:active {
		transform: scale(1.2);
	}
	transition: all;
	transition-timing-function: linear;
	transition-duration: 500ms;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Link = styled.a`
	color: #fff;
	text-decoration: none;
	font-size: 0.9rem;
	margin-top: 10px;
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
`;

const Center = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export { Container, Label, Button, Input, Form, Link, Center };
