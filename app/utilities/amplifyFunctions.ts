import { confirmSignUp, signIn, signUp, autoSignIn } from "aws-amplify/auth";

export const handleSignUp = async (username: string, password: string) => {
	const { isSignUpComplete, userId, nextStep } = await signUp({
		username,
		password,
		options: {
			userAttributes: {
				email: username,
			},
			autoSignIn: true,
		},
	});
	console.log(isSignUpComplete, userId, nextStep);
};

export const handleConfirmSignUp = async (username: string, confirmationCode: string) => {
	const { isSignUpComplete, nextStep } = await confirmSignUp({
		username,
		confirmationCode,
	});
	console.log(isSignUpComplete, nextStep);
};

export const handleSignIn = async (username: string, password: string) => {
	const { isSignedIn, nextStep } = await signIn({
		username,
		password,
	});
	console.log(isSignedIn, nextStep);
};

export const handleAutoSignIn = async () => {
	const { isSignedIn, nextStep } = await autoSignIn();
	console.log(isSignedIn, nextStep);
};
