import { Text } from "@chakra-ui/react";
import { BarLoader } from "react-spinners";
import ScreenContainer from "./ScreenContainer";
import { loadingText } from "../../lib/constant";
import { random } from "../../lib/functions";
import { useMemo, useState } from "react";

const Loading = () => {
	const [text, setText] = useState("");

	useMemo(() => {
		setInterval(() => {
			setText(random(loadingText));
		}, 3000);
	}, [setText]);

	return (
		<ScreenContainer display="flex" justifyContent="center" alignItems="center" flexDir="column" gap="10">
			<Text textAlign="center" fontWeight="bold" fontSize="xl">
				{text}
			</Text>
			<BarLoader width="300px" color="#808bed" loading />
		</ScreenContainer>
	);
};

export default Loading;
