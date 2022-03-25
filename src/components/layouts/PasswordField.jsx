import { FormControl, FormLabel, FormErrorMessage, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Field } from "formik";
import { useState } from "react";
import EyeClosed from "@svgs/EyeClosed";
import EyeOpen from "@svgs/EyeOpen";
import Button from "./Button";

const PasswordField = ({ name, text }) => {
	const [show, setShow] = useState(false);

	return (
		<Field name={name}>
			{({ field, form }) => (
				<FormControl isInvalid={form.errors[name] && form.touched[name]}>
					<FormLabel htmlFor={name} fontSize=".875rem">
						{text}
					</FormLabel>
					<InputGroup size="md">
						<Input {...field} type={show ? "text" : "password"} name={name} id={name} />
						<InputRightElement>
							<Button onClick={() => setShow(!show)}>{show ? <EyeOpen /> : <EyeClosed />}</Button>
						</InputRightElement>
					</InputGroup>
					<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
				</FormControl>
			)}
		</Field>
	);
};

export default PasswordField;
