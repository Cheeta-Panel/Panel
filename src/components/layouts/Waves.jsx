import styles from "../../styles/Wave.module.css";
import Wavify from "react-wavify";
import { Box } from "@chakra-ui/react";

const Waves = () => {
	return (
		<Box transform="scaleX(-1)" bottom="0" width="full" display="flex" justifyContent="end" left="0" position="absolute">
			<Wavify
				className={styles.wave}
				fill="#2b2b2b"
				paused={false}
				options={{
					height: 50,
					amplitude: 45,
					speed: 0.15,
					points: 4
				}}
			/>
		</Box>
	);
};

export default Waves;
