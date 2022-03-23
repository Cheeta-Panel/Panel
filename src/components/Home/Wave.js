import React from "react";
import { WaveContainer, Wavee } from "./styles";

const Wave = () => {
	return (
		<>
			<WaveContainer>
				<Wavee
					fill="#2b2b2b"
					paused={false}
					style={{ height: 300 }}
					options={{
						height: 50,
						amplitude: 45,
						speed: 0.15,
						points: 4
					}}
				/>
			</WaveContainer>
		</>
	);
};

export default Wave;
