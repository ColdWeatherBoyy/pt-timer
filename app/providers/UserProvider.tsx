"use client";

import { createContext, useEffect, useState } from "react";
import { validateUserSession } from "../utilities/amplify/amplify.auth";

interface UserContextInterface {
	handleLogInChange: (isValid: boolean) => void;
	loadingUser: boolean;
	userId: string | null;
}

export const UserContext = createContext<UserContextInterface>({
	handleLogInChange: (isValid: boolean) =>
		console.error("Internal Error: handleLogInChange not defined"),
	loadingUser: true,
	userId: null,
});

export default function UserProvider({ children }: { children: React.ReactNode }) {
	const [userId, setUserId] = useState<string | null>(null);
	const [loadingUser, setLoadingUser] = useState<boolean>(true);

	useEffect(() => {
		const validate = async () => {
			try {
				if (
					Object.entries(localStorage).filter(([key]) =>
						key.includes("CognitoIdentityServiceProvider")
					).length === 0
				)
					return;
				const data = await validateUserSession();
				if (data) {
					setUserId(data.userId);
				} else {
					setUserId(null);
				}
			} catch (error) {
				console.error("Internal Error: ", error);
			} finally {
				setLoadingUser(false);
			}
		};
		validate();
	}, []);

	const handleLogInChange = async (loggedIn: boolean) => {
		try {
			if (loggedIn) {
				setLoadingUser(true);
				const data = await validateUserSession();
				if (data) {
					setUserId(data.userId);
				}
			} else {
				setUserId(null);
			}
		} catch (error) {
			console.error("Internal Error: ", error);
		} finally {
			setLoadingUser(false);
		}
	};

	return (
		<UserContext.Provider value={{ handleLogInChange, loadingUser, userId }}>
			{children}
		</UserContext.Provider>
	);
}
