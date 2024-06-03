"use client";

import { createContext, useEffect, useState } from "react";
import { validateUserSession } from "../utilities/amplify/amplify.auth";

interface UserContextInterface {
	handleLogInChange: (isValid: boolean) => void;
	userId: string | null;
}

export const UserContext = createContext<UserContextInterface>({
	handleLogInChange: (isValid: boolean) =>
		console.error("Internal Error: handleLogInChange not defined"),
	userId: null,
});

export default function UserProvider({ children }: { children: React.ReactNode }) {
	const [userId, setUserId] = useState<string | null>(null);

	useEffect(() => {
		const validate = async () => {
			const data = await validateUserSession();
			if (data) {
				setUserId(data.userId);
			} else {
				setUserId(null);
			}
		};
		validate();
	}, []);

	const handleLogInChange = async (loggedIn: boolean) => {
		if (loggedIn) {
			const data = await validateUserSession();
			if (data) {
				setUserId(data.userId);
			}
			// handle error for no data
		} else {
			setUserId(null);
		}
	};

	return (
		<UserContext.Provider value={{ handleLogInChange, userId }}>
			{children}
		</UserContext.Provider>
	);
}
