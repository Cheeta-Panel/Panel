import { Button, Container, Label, Input, Form, Center, Link } from "./styles";

const LoginForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.email);
	};

	return (
		<Container>
			<Form onClick={handleSubmit}>
				<Label htmlFor="email">Email</Label>
				<Input type="email" id="email" name="email" />
				<Label htmlFor="password">Password</Label>
				<Input type="password" id="password" name="password" />
				<Center>
					<Button type="submit">Sign In</Button>
					<Link href="/forgot">Forgot Password?</Link>
				</Center>
			</Form>
		</Container>
	);
};

export default LoginForm;
