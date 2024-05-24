"use client";

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { validateUserSession } from "../utilities/amplify/amplify.auth";

interface ContextInterface {
	validated: boolean;
	externalSetValidated: (isValid: boolean) => void;
	userId: string;
}

export const UserContext = createContext<ContextInterface>({
	validated: false,
	externalSetValidated: (isValid: boolean) => {},
	userId: "",
});

export default function UserProvider({ children }: { children: React.ReactNode }) {
	const [validated, setValidated] = useState(false);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		console.log("userprovider");
		const validate = async () => {
			const data = await validateUserSession();

			if (data) {
				setUserId(data.userId);
				setValidated(true);
			} else {
				setUserId("");
				setValidated(false);
			}
		};
		validate();
	}, []);

	// To-Do: Decide if this is worth it. It avoids a call of the validateUserSession when signing out, but duplicates code
	const externalSetValidated = async (isValid: boolean) => {
		if (isValid) {
			const data = await validateUserSession();
			if (data) {
				setUserId(data.userId);
				setValidated(true);
			}
		} else {
			setUserId("");
			setValidated(false);
		}
	};

	return (
		<UserContext.Provider value={{ validated, externalSetValidated, userId }}>
			{children}
		</UserContext.Provider>
	);
}
