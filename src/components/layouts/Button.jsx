import { Button as Btn } from "@chakra-ui/react";

const Button = ({ width = "6rem", height = "3rem", children, ...props }) => {
	return (
		<Btn
			w={width}
			h={height}
			variant="unstyled"
			display="flex"
			justifyContent="center"
			alignItems="center"
			textTransform="uppercase"
			fontSize=".875rem"
			_active={{ transform: "scale(0.94)", transition: "all", transitionDuration: "50ms", transitionTimingFunction: "linear" }}
			_focus={{ border: "none" }}
			{...props}
		>
			{children}
		</Btn>
	);
};

export default Button;
