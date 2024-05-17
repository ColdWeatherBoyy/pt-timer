import {
	confirmSignUp,
	signIn,
	signUp,
	autoSignIn,
	getCurrentUser,
} from "aws-amplify/auth";

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
	return { isSignUpComplete, userId, nextStep };
};

export const handleConfirmSignUp = async (username: string, confirmationCode: string) => {
	const { isSignUpComplete, nextStep } = await confirmSignUp({
		username,
		confirmationCode,
	});
	return { isSignUpComplete, nextStep };
};

export const handleAutoSignIn = async () => {
	const { isSignedIn, nextStep } = await autoSignIn();
	return { isSignedIn, nextStep };
};

export const handleSignIn = async (username: string, password: string) => {
	const { isSignedIn, nextStep } = await signIn({
		username,
		password,
	});
	// console.log(isSignedIn, nextStep);
};

export const validateUserSession = async () => {
	try {
		const { username, userId, signInDetails } = await getCurrentUser();
		console.log(username, userId, signInDetails);
		return true;
	} catch (error) {
		// To-Do: Handle Error
		// console.log(error);
		return false;
	}
};
