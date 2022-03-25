import Head from "next/head";
import ScreenContainer from "../components/layouts/ScreenContainer";
import RegisterForm from "../components/pages/Register/RegisterForm";

const Register = () => {
	return (
		<>
			<Head>
				<title>CheetaPanel | Register</title>
			</Head>
			<ScreenContainer display="flex" justifyContent="center" alignItems="center">
				<RegisterForm />
			</ScreenContainer>
		</>
	);
};

export default Register;
