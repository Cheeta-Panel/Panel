import Head from "next/head";
import LoginForm from "../components/pages/Login/LoginForm";

const Login = () => {
	return (
		<>
			<Head>
				<title>CheetaPanel | Login</title>
			</Head>
			<LoginForm />
		</>
	);
};

export default Login;
