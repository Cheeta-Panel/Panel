import Head from "next/head";
import ScreenContainer from "@layouts/ScreenContainer";
import RegisterForm from "@pages/Register/RegisterForm";

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
