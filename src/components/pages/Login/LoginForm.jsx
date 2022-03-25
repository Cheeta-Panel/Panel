import { Box, Flex, chakra } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Link from "next/link";
import Button from "@layouts/Button";
import TextField from "@layouts/TextField";
import PasswordField from "@layouts/PasswordField";
import { loginSchema } from "@lib/schema";

const LoginForm = () => {
	const initialValues = {
		username_email: "",
		password: ""
	};

	return (
		<Box width={{ base: 80, sm: 80, md: "50%", lg: "40%" }} bgColor="#2b2b2b" p="10" borderRadius="lg" boxShadow="lg">
			<Formik
				initialValues={initialValues}
				validationSchema={loginSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					setTimeout(() => {
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<TextField name="username_email" text="Username or email" />
						<Box my="4" />
						<PasswordField name="password" text="Password" />
						<Flex gap="5" mt="4" justifyContent="space-between" alignItems="center">
							<Button _hover={{ boxShadow: "0 5px 15px rgba(92, 182, 119, .4)" }} bgColor="green.500" isLoading={isSubmitting} type="submit">
								Login
							</Button>
							<Link href="/forgot-password" passHref>
								<chakra.div
									cursor="pointer"
									fontSize={{ base: "sm", md: "md" }}
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
								>
									Forgot Password?
								</chakra.div>
							</Link>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default LoginForm;
