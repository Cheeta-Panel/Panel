import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import Button from "../../layouts/Button";

const Header = () => {
	return (
		<Flex
			flexDir={{ base: "row", md: "column", sm: "column", lg: "row" }}
			mx="10"
			gap="5"
			justifyContent="center"
			alignItems="center"
			minH="35%"
			backgroundColor="transparent"
			mt="20vh"
		>
			<Link href="/login" passHref>
				<Button width="16rem" bgGradient="linear(to-tr, teal.300,yellow.400)">
					Login
				</Button>
			</Link>
			<Link href="/register" passHref>
				<Button width="16rem" bgGradient="linear(to-tr, teal.300,yellow.400)">
					Register
				</Button>
			</Link>
		</Flex>
	);
};

export default Header;
