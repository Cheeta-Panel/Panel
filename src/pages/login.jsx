import Head from "next/head";
import ScreenContainer from "@layouts/ScreenContainer";
import LoginForm from "@pages/Login/LoginForm";

const Login = () => {
	return (
		<>
			<Head>
				<title>CheetaPanel | Login</title>
			</Head>
			<ScreenContainer display="flex" justifyContent="center" alignItems="center">
				<LoginForm />
			</ScreenContainer>
		</>
	);
};

export default Login;
