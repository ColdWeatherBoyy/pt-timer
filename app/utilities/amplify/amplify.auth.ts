import {
	autoSignIn,
	confirmSignUp,
	getCurrentUser,
	signIn,
	signUp,
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
	return { isSignedIn, nextStep };
};

export const validateUserSession = async () => {
	try {
		const { username, userId, signInDetails } = await getCurrentUser();
		return { username, userId, signInDetails };
	} catch (error) {
		// To-Do: Handle Error
		return false;
	}
};
