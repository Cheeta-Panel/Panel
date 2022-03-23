import styled from "styled-components";
import Wavify from "react-wavify";

const Alert = styled.div`
	background-color: #485d74;
	padding: 2em;
	width: 35%;
	align-items: center;
	position: inherit;
	border-radius: 15px;
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

const AlertText = styled.h1`
	color: #ffffff;
	font-size: 20px;
`;

const Desc = styled.p`
	font-size: 1.5rem;
	line-height: 2rem;
	color: rgba(255, 255, 255, 0.5);
	text-align: center;
	margin-top: 0.5rem;
	margin: 10px 0;
`;

const ButtonContainer = styled.button`
	background-color: #2b2b2b;
	padding: 1em;
	width: 8%;
	align-items: center;
	position: inherit;
	border-radius: 15px;
	border-top: #2b2b2b;
	border-left: #2b2b2b;
	left: 42%;
	:focus {
		outline: none;
		border: none;
	}
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

const ButtonContainer1 = styled.button`
	background-color: #2b2b2b;
	padding: 1em;
	width: 8%;
	align-items: center;
	position: inherit;
	border-radius: 15px;
	border-top: #2b2b2b;
	cursor: pointer;
	border-left: #2b2b2b;
	:focus {
		outline: none;
		border: none;
	}
	right: 41%;
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

const Content1 = styled.div`
	text-align: center;
	width: 100%;
	min-height: 35vh;
	background-color: transparent;
	// top: 0;
	position: absolute;
`;

const Title = styled.h1`
	color: rgba(255, 255, 255, 0.5);
	font-size: 45px;
	font-weight: lighter;
	margin-top: 250px;
	@media screen and (max-width: 768px) {
		font-size: 35px;
	}
`;

const WaveContainer = styled.div`
	transform: scaleX(-1);
	bottom: 0;
	width: 100%;
	left: 0;
	position: absolute;
	height: 31%;
`;

const Wavee = styled(Wavify)`
	height: 100px;
	@media only screen and (max-width: 900px) {
		height: 200px;
	}
`;

export { Alert, AlertText, Desc, ButtonContainer, ButtonContainer1, Content1, Title, WaveContainer, Wavee };
