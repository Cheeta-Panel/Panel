import Head from "next/head";
import React from "react";
import Navbar from "@layouts/Navbar";
import Waves from "@pages/Home/Waves";
import Header from "@pages/Home/Header";
import ScreenContainer from "@layouts/ScreenContainer";

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
