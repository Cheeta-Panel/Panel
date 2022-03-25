import { chakra } from "@chakra-ui/react";

const ScreenContainer = ({ children }) => {
	return (
		<chakra.div w="100vw" h="100vh">
			{children}
		</chakra.div>
	);
};

export default ScreenContainer;
