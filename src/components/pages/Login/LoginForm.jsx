import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Input, Link as ChakraLink } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import Button from "../../layouts/Button";
import Link from "next/link";

const LoginForm = () => {
	const initialValues = {
		email: "",
		password: ""
	};

	return (
		<Box width={{ base: 80, sm: 80, md: "50%", lg: "40%" }} bgColor="#2b2b2b" mx="auto" mt="28vh" p="10" borderRadius="lg" boxShadow="lg">
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					console.log(values);
					setTimeout(() => {
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field name="email">
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.name && form.touched.name}>
									<FormLabel htmlFor="email">Email</FormLabel>
									<Input {...field} type="text" name="email" id="email" />
									<FormErrorMessage>{form.errors.email}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Box my="4" />
						<Field name="password">
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.name && form.touched.name}>
									<FormLabel htmlFor="password">Password</FormLabel>
									<Input {...field} type="password" name="password" id="password" />
									<FormErrorMessage>{form.errors.email}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Flex mt="2" justifyContent="space-between" alignItems="center">
							<Button bgColor="green.500" mt="4" isLoading={isSubmitting} type="submit">
								Login
							</Button>
							<Link href="/forgot-password" passHref>
								<ChakraLink>Forgot Password?</ChakraLink>
							</Link>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default LoginForm;
