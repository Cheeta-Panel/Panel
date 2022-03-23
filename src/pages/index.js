import Head from "next/head";
import React from "react";
import Content from "../components/Home/Content.js";
import Wave from "../components/Home/Wave.js";
import Navbar from "../components/Navbar/index.js";

export default function Home() {
	return (
		<>
			<Head>
				<title>CheetaPanel</title>
				<meta name="description" content="Cheetapanel" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Content />
			<Wave />
		</>
	);
}
