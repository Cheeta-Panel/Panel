import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Input, chakra } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import Button from "../../layouts/Button";
import Link from "next/link";

const RegisterForm = () => {
	const initialValues = {
		username: "",
		email: "",
		password: ""
	};

	return (
		<Box width={{ base: 80, sm: 80, md: "50%", lg: "40%" }} bgColor="#2b2b2b" p="10" borderRadius="lg" boxShadow="lg">
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
								<FormControl isInvalid={form.errors.email && form.touched.email}>
									<FormLabel htmlFor="email" fontSize=".875rem">
										Email
									</FormLabel>
									<Input {...field} type="text" name="email" id="email" />
									<FormErrorMessage>{form.errors.email}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name="username">
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.username && form.touched.username}>
									<FormLabel htmlFor="username" fontSize=".875rem">
										Username
									</FormLabel>
									<Input {...field} type="text" name="username" id="username" />
									<FormErrorMessage>{form.errors.username}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Box my="4" />
						<Field name="password">
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.password && form.touched.password}>
									<FormLabel htmlFor="password" fontSize=".875rem">
										Password
									</FormLabel>
									<Input {...field} type="password" name="password" id="password" />
									<FormErrorMessage>{form.errors.password}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Box my="4" />
						<Field name="confirm_password">
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.confirm_password && form.touched.confirm_password}>
									<FormLabel htmlFor="confirm_password" fontSize=".875rem">
										Confirm Password
									</FormLabel>
									<Input {...field} type="confirm_password" name="confirm_password" id="confirm_password" />
									<FormErrorMessage>{form.errors.confirm_password}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Flex gap="5" mt="4" justifyContent="space-between" alignItems="center">
							<Button _hover={{ boxShadow: "0 5px 15px rgba(92, 182, 119, .4)" }} bgColor="green.500" isLoading={isSubmitting} type="submit">
								Register
							</Button>
							<Link href="/login" passHref>
								<chakra.div
									cursor="pointer"
									_after={{
										background: "none repeat scroll 0 0 transparent",
										content: '""',
										display: "block",
										height: "1px",
										background: "#fff",
										transition: "width 0.3s ease 0s, left 0.3s ease 0s",
										width: "0"
									}}
									_hover={{
										_after: {
											width: "100%",
											left: "0"
										},
										textDecorationColor: "rgba(255, 255, 255, 1)"
									}}
									fontSize={{ base: "sm", md: "md" }}
								>
									Already have an account?
								</chakra.div>
							</Link>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default RegisterForm;
