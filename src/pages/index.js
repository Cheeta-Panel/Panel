import Head from "next/head";
import React from "react";
import Navbar from "../components/layouts/Navbar";
import Waves from "../components/layouts/Waves";
import Header from "../components/pages/Login/Header";
import ScreenContainer from "../components/layouts/ScreenContainer";

export default function Home() {
	return (
		<>
			<Head>
				<title>CheetaPanel</title>
				<meta name="description" content="Cheetapanel" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ScreenContainer>
				<Navbar />
				<Header />
				<Waves />
			</ScreenContainer>
		</>
	);
}
