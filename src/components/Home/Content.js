import Link from "next/link";
import React from "react";
import { Content1, Title, ButtonContainer, ButtonContainer1, Desc } from "./styles";

const Content = () => {
	return (
		<Content1>
			<Title className="title-plain">Cheeta Panel</Title>

			<ButtonContainer>
				<Desc>User Creation</Desc>
			</ButtonContainer>
			<ButtonContainer1>
				<Link href="/login" passHref>
					<Desc>User Login</Desc>
				</Link>
			</ButtonContainer1>
		</Content1>
	);
};

export default Content;
