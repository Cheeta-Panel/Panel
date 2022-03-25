import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import Button from "@layouts/Button";

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
				<Button
					color="gray.800"
					width="16rem"
					bgGradient="linear(to-tr, teal.300,yellow.400)"
					_hover={{
						boxShadow: "0 5px 15px rgba(92, 182, 119, .4)"
					}}
				>
					Login
				</Button>
			</Link>
			<Link href="/register" passHref>
				<Button
					color="gray.800"
					width="16rem"
					bgGradient="linear(to-tr, teal.300,yellow.400)"
					_hover={{
						boxShadow: "0 5px 15px rgba(92, 182, 119, .4)"
					}}
				>
					Register
				</Button>
			</Link>
		</Flex>
	);
};

export default Header;
