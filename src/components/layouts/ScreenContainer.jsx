import { chakra } from "@chakra-ui/react";

const ScreenContainer = ({ children, ...props }) => {
	return (
		<chakra.div w="100vw" h="100vh" {...props}>
			{children}
		</chakra.div>
	);
};

export default ScreenContainer;
