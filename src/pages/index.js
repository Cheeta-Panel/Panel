import Head from 'next/head'
import React, {Component} from "react";
import Wave from "react-wavify";
import styled from "styled-components";
import { Button } from "@mantine/core";
import Navbar from "../components/Navbar.js";

export default function Home() {
	return (
		<>
			<Head>
				<title>Cheetapanel</title>
				<meta name="description" content="Cheetapanel"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Navbar/>

			<Content1>
				<Title className={"title-plain"}>
					CheetaPanel
				</Title>

				<ButtonContainer>
					<Desc>
						User Creation
					</Desc>
				</ButtonContainer>
				<ButtonContainer1>
					<Desc>
						User Login
					</Desc>
				</ButtonContainer1>
				</Content1>


			<WaveContainer>
				<Wavee
					fill="#2b2b2b"
					paused={false}
					style={{height: 300}}
					options={{
						height: 50,
						amplitude: 45,
						speed: 0.15,
						points: 4,
					}}
				/>
			</WaveContainer>
		</>
	);
}

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
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

const ButtonContainer1 = styled.button`
  background-color: #2b2b2b;
  padding: 1em;
  width: 8%;
  align-items: center;
  position: inherit;
  border-radius: 15px;
	border-top: #2b2b2b;
	border-left: #2b2b2b;
	right: 41%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

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


const Wavee = styled(Wave)`
  height: 100px;
  @media only screen and (max-width: 900px) {
    height: 200px;
  }
`

const Alert = styled.div`
  background-color: #485D74;
  padding: 2em;
  width: 35%;
  align-items: center;
  position: inherit;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

const AlertText = styled.h1`
  color: #ffffff;
  font-size: 20px;
`

const Desc = styled.p`
  font-size: 1.50rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: 0.5rem;
  margin: 10px 0;
`