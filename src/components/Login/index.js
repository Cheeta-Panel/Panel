import { Button, Container, Label, Input, Form, Center, Link, Spinner } from "./styles";
import { useState } from "react";

const LoginForm = () => {
	const [loading, setLoading] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(
			JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value
			})
		);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Label htmlFor="email">Email</Label>
				<Input type="email" id="email" name="email" />
				<Label htmlFor="password">Password</Label>
				<Input type="password" id="password" name="password" />
				<Center style={{ justifyContent: "space-between" }}>
					<Button type="submit">
						{loading ? (
							<>
								<Center style={{ gap: "10px" }}>
									<Spinner />
									Sign In
								</Center>
							</>
						) : (
							"Sign In"
						)}
					</Button>
					<Link href="/forgot">Forgot Password?</Link>
				</Center>
			</Form>
		</Container>
	);
};

export default LoginForm;
