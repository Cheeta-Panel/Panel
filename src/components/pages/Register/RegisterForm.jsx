import { Box, Flex, chakra } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Button from "@layouts/Button";
import Link from "next/link";
import TextField from "@layouts/TextField";
import PasswordField from "@layouts/PasswordField";
import { registerSchema } from "@lib/schema";

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
				validationSchema={registerSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					setTimeout(() => {
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<TextField name="email" text="Email" />
						<Box my="4" />
						<TextField name="username" text="Username" />
						<Box my="4" />
						<PasswordField name="password" text="Password" />
						<Box my="4" />
						<PasswordField name="password_confirmation" text="Confirm Password" />
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
