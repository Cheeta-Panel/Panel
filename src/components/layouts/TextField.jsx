import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";
import { Field } from "formik";

const TextField = ({ name, text }) => {
	return (
		<Field name={name}>
			{({ field, form }) => (
				<FormControl isInvalid={form.errors[name] && form.touched[name]}>
					<FormLabel htmlFor={name} fontSize=".875rem">
						{text}
					</FormLabel>
					<Input {...field} type="text" name={name} id={name} />
					<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
				</FormControl>
			)}
		</Field>
	);
};

export default TextField;
