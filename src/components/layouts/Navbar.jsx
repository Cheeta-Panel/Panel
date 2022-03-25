import { Box, Container, Text } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Box padding="5">
			<Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
				<Text fontWeight="bold" fontSize="2xl" color="#fff">
					CheetaPanel
				</Text>
			</Container>
		</Box>
	);
};

export default Navbar;
