import Wavify from "react-wavify";
import { Flex } from "@chakra-ui/react";

const Waves = () => {
	return (
		<Flex transform="scaleX(-1)" bottom="0" width="full" justifyContent="end" left="0" position="absolute">
			<Wavify
				fill="#2b2b2b"
				paused={false}
				style={{ position: "relative" }}
				options={{
					height: 50,
					amplitude: 45,
					speed: 0.15,
					points: 4
				}}
			/>
		</Flex>
	);
};

export default Waves;
