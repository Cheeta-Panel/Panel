import * as yup from "yup";

export const loginSchema = yup.object().shape({
	username_email: yup.string().required("username or email is required"),
	password: yup.string().required()
});

export const registerSchema = yup.object().shape({
	username: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required(),
	password_confirmation: yup
		.string()
		.required("confirm password is a required field")
		.oneOf([yup.ref("password"), null], "passwords must match")
});
