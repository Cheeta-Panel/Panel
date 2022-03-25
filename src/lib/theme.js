import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
	global: (props) => ({
		body: {
			color: mode("gray.800", "whiteAlpha.900")(props),
			backgroundColor: mode("white", "#1c1a1a")(props)
		}
	})
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false
};

export default extendTheme({ config, styles });
