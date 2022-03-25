import { Container, Text, Badge } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Container p="5" maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
			<Text fontWeight="bold" fontSize="2xl" color="#fff">
				CheetaPanel
				<Badge ml="5px" colorScheme="yellow">
					BETA
				</Badge>
			</Text>
		</Container>
	);
};

export default Navbar;
